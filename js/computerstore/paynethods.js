var selectedrow = null;
function showmenu(){
    if (validate()){
        if (selectedrow==null){
            insertnewrow();
        }
        else{
            editelem();
        }
    }
}
function onedit(tr){
  selectedrow = tr.parentElement.parentElement;
  document.getElementById("id1").value= selectedrow.cells[0].innerHTML;
  document.getElementById("tid").value = selectedrow.cells[1].innerHTML;
  document.getElementById("decid").value= selectedrow.cells[2].innerHTML;
}
function editelem(){
    selectedrow.cells[1].innerHTML=document.getElementById("tid").value;
    selectedrow.cells[2].innerHTML = document.getElementById("decid").value;
    resetform();
}
function validate(){
    var err="";
    if (document.getElementById("tid").value==""){
        err+="please enter Pay Method\n";
    }
    if (document.getElementById("decid").value==""){
        err+="please ener description\n";
    }
    if (err!=""){
        alert(err);
    }
    return err=="";
}
function insertnewrow(){
    var c = document.getElementById("paymid");
    var newrow = c.insertRow(c.length);
    cell1 = newrow.insertCell(0);
    cell1.innerHTML= getid();
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = `<td>`+document.getElementById("tid").value+`</td>`;
    cell3 = newrow.insertCell(2);
    cell3.innerHTML = `<td>`+document.getElementById("decid").value+`</td>`;
    cell4 = newrow.insertCell(3);
    cell4.innerHTML = `<a OnClick="onedit(this)">Edit</a>&nbsp;&nbsp;<a OnClick="ondelete(this)">Delete</a>`;
    resetform();
}
function resetform(){
    document.getElementById("tid").value = "";
    document.getElementById("decid").value="";
    document.getElementById("id1").value="";
    selectedrow = null;
}
function ondelete(tr){
    if (confirm("Are you sure to delete this record?")){
        var c = tr.parentElement.parentElement;
        console.log(c.rowIndex);
        document.getElementById("paymid").deleteRow(c.rowIndex);
    }
}
function getid(){
    var table = document.getElementById("paymid");
    var a = new Array();
    for (var i=1;i<table.rows.length-1; i++){
        a.push(table.rows[i].cells[0].innerHTML);
    }
   
    if (a.length==0){
        return a.length+1;
    }
    else{ 
        console.log("array");
        console.log(a);
        console.log("max value");
        var l = Number(a[0]);
        for (var j=0;j<a.length;j++){
            if (Number(a[j])>Number(l)){
                l=Number(a[j]);
            }
        }
        console.log(l)+1;
       
        return l+1;
    }
}