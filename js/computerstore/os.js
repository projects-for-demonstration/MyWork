function test(){
    alert("tet message");
}
var selectedrow = null;
function init(){
    
    var table = document.getElementById("osid").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    console.log(document.getElementById("osid").rows);
    cell1.innerHTML = getid();
    //console.log(max(document.getElementById("osid").rows));
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = "Linux";
    cell3 = newrow.insertCell(2);
    cell3.innerHTML = "это одна из популярных операционных систем";
    cell4 = newrow.insertCell(3);
    cell4.innerHTML = 9.4;
    cell5 = newrow.insertCell(4);
    cell5.innerHTML = `<a OnClick="onedit(this)">Edit</a>&nbsp;<a OnClick="ondelete(this)">Delete</a>`;
    newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    cell1.innerHTML = getid();
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = "Windows";
    cell3 = newrow.insertCell(2);
    cell3.innerHTML = "это одна из самых популярных операционнных систем в мире";
    cell4 = newrow.insertCell(3);
    cell4.innerHTML = 7.8;
    cell5 = newrow.insertCell(4);
    cell5.innerHTML = `<a OnClick="onedit(this)">Edit</a>&nbsp;<a OnClick="ondelete(this)">Delete</a>`;
    newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    cell1.innerHTML = getid();
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = "MAC OS";
    cell3 = newrow.insertCell(2);
    cell3.innerHTML = "это одна из самых популярных операционных систем в мире";
    cell4 = newrow.insertCell(3);
    cell4.innerHTML = 9.4;
    cell5 = newrow.insertCell(4);
    cell5.innerHTML = `<a OnClick="onedit(this)">Edit</a>&nbsp;<a OnClick="ondelete(this)">Delete</a>`;

}
function getid(){
    var table = document.getElementById("osid");

    var a = new Array();
    for (var i=1;i<table.rows.length-1; i++){
        a.push(table.rows[i].cells[0].innerHTML);
    }
   
    if (a.length==0){
        return a.length+1;
    }
    else{ 
        //console.log("array");
       // console.log(a);
        //console.log("max value");
        var l = Number(a[0]);
        for (var j=0;j<a.length;j++){
            if (Number(a[j])>Number(l)){
                l=Number(a[j]);
            }
        }
        //console.log(l)+1;
       
        return l+1;
    }
    
    
    
   // return Math.max(a)+1;
}
function showmenu(){
    if (validate()){
        if (selectedrow==null){
            addnewitem();
        }
        else{
            edititem();
        }
    }
}

function edititem(){
    selectedrow.cells[1].innerHTML = document.getElementById("nid").value;
    selectedrow.cells[2].innerHTML = document.getElementById("desid").value;
    selectedrow.cells[3].innerHTML = document.getElementById("ratid").value;
    resetform();
}

function addnewitem(){
   
    var r = document.getElementById("ratid").value;
    var table = document.getElementById("osid").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    cell1.innerHTML = getid();
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = document.getElementById("nid").value;
    cell3 = newrow.insertCell(2);
    cell3.innerHTML = document.getElementById("desid").value;
    cell4 = newrow.insertCell(3);
    cell4.innerHTML = document.getElementById("ratid").value;
    cell5 = newrow.insertCell(4);
    cell5.innerHTML = `<a OnClick="onedit(this)">Edit</a>&nbsp;<a OnClick="ondelete(this)">Delete</a>`;
    resetform();

}
function onedit(tr){
    selectedrow = tr.parentElement.parentElement;
    document.getElementById("id1").value = selectedrow.cells[0].innerHTML;
    document.getElementById("nid").value = selectedrow.cells[1].innerHTML;
    document.getElementById("desid").value = selectedrow.cells[2].innerHTML;
    document.getElementById("ratid").value = selectedrow.cells[3].innerHTML;
}
function ondelete(tr){
    
    if (confirm("Are you sure to delete this record?")){
        var d = tr.parentElement.parentElement;
        document.getElementById("osid").deleteRow(d.rowIndex);
    }
}
function validate(){
    var err = "";
    if (document.getElementById("nid").value==""){
        err += "пожалуйста введите название операционной ситсемы\n";
    }
    if (document.getElementById("desid").value==""){
        err +="пожалуйста введите описание операционной системы\n";
    }
    if (document.getElementById("ratid").value==""){
        err+="пожалуйста введите рейтинг операционной системы";
    }
    console.log(document.getElementById("ratid").value);
    if (Number.isInteger(Number(document.getElementById("ratid").value))===false){
        err+="пожалуйста введите число";
    }
    if (err!=""){
        alert(err);
    }
    return err=="";
}
function resetform(){
    document.getElementById("id1").value="";
    document.getElementById("nid").value = "";
    document.getElementById("desid").value="";
    document.getElementById("ratid").value="";
    selectedrow = null;
}
document.addEventListener("DOMContentLoaded",init);
function getid(){
    var table = document.getElementById("osid");
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