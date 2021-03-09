var selectedrow = null;
function signal(){
    alert("go");
}
function showmenu(){
    if (validate()){
        if (selectedrow == null){
            addnewitem();
        }
        else{
            editelem();
        }
    }
}
function validate(){
    var name = document.getElementById("tdmid").value;
    var err = "";
    var description = document.getElementById("tdesid").value;
    if (name==""){
        err +="пожалуйста введите имя\n";
    }
    if (description==""){
        err+="пожалуйста введите описание\n";
    }
    if (err!=""){
        alert(err);
    }
    return err=="";
}
function addnewitem(){
   
    var table= document.getElementById("dmtabid").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    cell1.innerHTML = getid();
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = document.getElementById("tdmid").value;
    cell3 = newrow.insertCell(2);
    cell3.innerHTML = document.getElementById("tdesid").value;
    cell4 = newrow.insertCell(3);
    cell4.innerHTML = `<a OnClick="onedit(this)">Edit</a>&nbsp;&nbsp;<a OnClick="ondelete(this)">Delete</a>`;
    resetform();
}
function resetform(){
    document.getElementById("id1").value = "";
    document.getElementById("tdmid").value = "";
    document.getElementById("tdesid").value = "";
    selectedrow = null;
}
function onedit(tr){
    selectedrow = tr.parentElement.parentElement;
    document.getElementById("id1").value=document.getElementById("dmtabid").rows.length-1;
    document.getElementById("tdmid").value = selectedrow.cells[1].innerHTML;
    document.getElementById("tdesid").value = selectedrow.cells[2].innerHTML;
}
function editelem(){
    selectedrow.cells[1].innerHTML = document.getElementById("tdmid").value;
    selectedrow.cells[2].innerHTML = document.getElementById("tdesid").value;
    resetform();
}
function ondelete (tr){
    var  c = tr.parentElement.parentElement;
    if (confirm("Are you sure to delete this record?"))
    {
        document.getElementById("dmtabid").deleteRow(c.rowIndex);
    }
 
}
function getid(){
    var table = document.getElementById("dmtabid");
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