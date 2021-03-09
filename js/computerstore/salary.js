var selectedrow = null;
const size = 10;
function showmenu(){
    if (validate()){
        editrow();
    }
}
function onedit(tr){
    selectedrow = tr.parentElement.parentElement;
    document.getElementById("id1").value = selectedrow.cells[0].innerHTML;
    document.getElementById("empid").value = selectedrow.cells[1].innerHTML;
    document.getElementById("salsizeid").value = selectedrow.cells[2].innerHTML;
    document.getElementById("desid").value = selectedrow.cells[3].innerHTML;
}
function resetform(){
    document.getElementById("empid").value="";
  
    document.getElementById("salsizeid").value="";
    document.getElementById("desid").value="";
    selectedrow = null;
}
function validate(){
    var err = "";
    if (""==document.getElementById("empid").value){
        err+="please enter employee number\n";
    }
    if (document.getElementById("desid").value == ""){
        err+="please enter employee description\n";
    }
    if (document.getElementById("salsizeid").value==""){
        err+="please enter employee salary\n";
    }
    else if (document.getElementById("salsizeid").value<0){
        err+="employee salary can\'t be a negative value";
    }
    if (err!=""){
        alert(err);
    }
    return err == "";
}
function editrow(){
    selectedrow.cells[1].innerHTML=document.getElementById("empid").value;
    selectedrow.cells[2].innerHTML = document.getElementById("salsizeid").value;
    selectedrow.cells[3].innerHTML = document.getElementById("desid").value;
    resetform();
}
function ondelete(tr){
    
    if (confirm("Are you sure to delete this record?")){
        var c = tr.parentElement.parentElement;
        document.getElementById("saltable").deleteRow(c.rowIndex);
    }
}

function inicialize(){
    
    var table = document.getElementById("saltable").getElementsByTagName('tbody')[0];
    
    for(var i=0; i<size;i++){
        var newrow = table.insertRow(table.length);
        cell1 = newrow.insertCell(0);
        cell1.innerHTML = getid();
        cell2 = newrow.insertCell(1);
        cell2.innerHTML = "Пользователь "+i;
        cell3 = newrow.insertCell(2);
        cell3.innerHTML = 520*i+1000*1.1;
        cell4 = newrow.insertCell(3);
        cell4.innerHTML = "данный сотрудник хорошо поработал";
        cell5 = newrow.insertCell(4);
        cell5.innerHTML = `<a OnClick="onedit(this)">Edit</a>&nbsp;&nbsp;<a OnClick="ondelete(this)">Delete</a>`
    }

}
document.addEventListener("DOMContentLoaded", inicialize);
function getid(){
    var table = document.getElementById("saltable");
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