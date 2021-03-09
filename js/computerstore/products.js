var selecteditem = null;
function showmenu(){
    if (validate()){
        if (selecteditem == null){
            addnewitem();
        }
        else {
            editform();
        }
    }
}
function signal(){
    alert("go");
}
//complete
function addnewitem(){
    var table = document.getElementById("prodtab").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);
 
    cell1 = newrow.insertCell(0);
    cell1.innerHTML = getid();
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = document.getElementById("nid").value;
    cell3 = newrow.insertCell(2);
    cell3.innerHTML = getactivesupplercompany().value;
    cell4 = newrow.insertCell(3);
    cell4.innerHTML = getactivetype().value;
    cell5 = newrow.insertCell(4);
    cell5.innerHTML = getactiveoperationsystem().value;
    cell6 = newrow.insertCell(5);
    cell6.innerHTML = document.getElementById("prid").value;
    cell7 = newrow.insertCell(6);
    cell7.innerHTML = document.getElementById("countid").value;
    cell8 = newrow.insertCell(7);
    cell8.innerHTML = document.getElementById("countid").value;
    cell9 = newrow.insertCell(8);
    cell9.innerHTML = 1;//RATING
   /* cell10 = newrow.insertCell(9);
    cell10.innerHTML = document.getElementById("priceid").value;*/
    cell11 = newrow.insertCell(9);
    cell11.innerHTML = document.getElementById("desid").value;
    cell12 = newrow.insertCell(10);
    cell12.innerHTML = `<a OnClick="onedit(this)">Edit</a>&nbsp;&nbsp;<a OnClick="ondelete(this)">Delete</a>`;

    
    resetform();
}
/*
complete
*/
function getactivesupplercompany(){
    var items = document.getElementsByName("sk[]");
    var selected = "";
    for (var i=0; i<items.length;i++){
        if (items[i].checked){
            selected=items[i];
            break;
        }
    }
    return selected;
}
/*
complete
*/
function validate(){
    var err = "";
    if (document.getElementById("nid").value==""){
        err+="please enter balid name of product\n";
    }
    if (document.getElementById("prid").value==""){
        err+="please enter price for product";
    }
    if (document.getElementById("countid").value==""){
        err+="please enter count for product";
    }
    /*if (document.getElementById("priceid").value==""){
        err+="please enter information about users";
    }*/
    if (document.getElementById("desid").value==""){
        err+="please enter description of company";
    }
    var c1 = document.getElementsByName("type[]");
    var c2 = document.getElementsByName("os[]");
    var c3 = document.getElementsByName("sk[]");
    var flag = false;
    for (var i=0;i<c2.length;i++){
        if (c2[i].checked){
            flag=true;
        }
    }
    if (!flag){
        err+="пожалуйста выбрите фирму поставщика";
    }
     flag = false;
    for (var i=0;i<c1.length; i++){
        if (c1[i].checked){
            flag=true;
            break;
        }
    }
    if (!flag){
        err+="пожалуйста выберите тип товара";
    }
    flag = false;
    for (var i=0; i<c2.length;i++){
        if (c2[i].checked){
            flag=true;
            break;
        }
    }
    if (!flag){
        err+="пожалуйста выберите тип операционной системы";
    }
    if (err!=""){
        alert(err);
    }
    return err=="";
   
}
function getactiveoperationsystem(){
    var items = document.getElementsByName("os[]");
    var typeelem = "";
    for (var i=0;i<items.length; i++){
        if (items[i].checked){
            typeelem = items[i];
            break;
        }
    }
    return typeelem;
}
function getactivetype(){
    var items = document.getElementsByName("type[]");
    var typeelem = "";
    for (var i=0;i<items.length; i++){
        if (items[i].checked){
            typeelem=items[i];
            break;
        }
    }
    return typeelem;
}
function getoperatonsystem(){
    var items = doucment.getElementsByName("os[]");
    var selected = "";
    for (var i=0; i<items.length; i++){
        if (items[i].checked)
        {
            selected.value = items[i];
            break;
        }
    }
    return selected;
}
//complete
function onedit(tr){
   selecteditem = tr.parentElement.parentElement;
    document.getElementById("id1").value = getid();
    document.getElementById("nid").value=selecteditem.cells[1].innerHTML;
   
    inicializesk(Number(selecteditem.cells[2].innerHTML)-1);
    inicializetype(Number(selecteditem.cells[3].innerHTML)-1);
    inicializeos(Number(selecteditem.cells[4].innerHTML)-1);
    document.getElementById("prid").value = selecteditem.cells[5].innerHTML;
    document.getElementById("countid").value = selecteditem.cells[6].innerHTML;
    //document.getElementById("priceid").value = selecteditem.cells[9].innerHTML;
    document.getElementById("desid").value = selecteditem.cells[9].innerHTML;

  
}
/*
checked
*/
function inicializetype(t){
    var types = document.getElementsByName("type[]");
    
    for (var i=0;i<types.length;i++){
        if (t==i){
            types[i].checked=true;
            break;
        }
    }
}
/*
checked
*/
function inicializeos(t){
    var operationsystems = document.getElementsByName("os[]");
    console.log(t);
    for (var i=0;i<operationsystems.length;i++){
        if (t==i){
            operationsystems[i].checked=true;
            break;
        }
    }
}
/*
checked
*/
function inicializesk(t){
    var sk = document.getElementsByName("sk[]");
    
    for (var i=0; i<sk.length; i++){
        if (i==t){
            sk[i].checked=true;
            break;
        }
    }
}
/*
complete
*/
function editform (){
    selecteditem.cells[1].innerHTML = document.getElementById("nid").value;
    selecteditem.cells[2].innerHTML = getactivesupplercompany().value;
    selecteditem.cells[3].innerHTML = getactivetype().value;
    selecteditem.cells[4].innerHTML = getactiveoperationsystem().value;
    selecteditem.cells[5].innerHTML = document.getElementById("prid").value;
    selecteditem.cells[6].innerHTML = document.getElementById("countid").value;
    selecteditem.cells[7].innerHTML = document.getElementById("countid").value;
    selecteditem.cells[8].innerHTML = 1;//rating;
    //selecteditem.cells[9].innerHTML = document.getElementById("priceid").value;
    selecteditem.cells[9].innerHTML = document.getElementById("desid").value;
    resetform();
}
//completed
function resetform(){

    resetselector();
    document.getElementById("id1").value = "";
    document.getElementById("nid").value="";
    document.getElementById("prid").value="";
    document.getElementById("countid").value="";
    //document.getElementById("priceid").value="";
    //document.getElementById("ratid").value="";
    document.getElementById("desid").value=""; 
   selecteditem = null;
}
/*
complete
*/
function resetselector(){
    var c = document.getElementsByName("type[]");
    for (var i=0; i<c.length;i++){
        c[i].checked=(i==0)?true:false;
    }
    c = document.getElementsByName("os[]");
    for (var i=0; i<c.length;i++){
        c[i].checked=(i==0)?true:false;
    }
    c = document.getElementsByName("sk[]");
    for (var i=0; i<c.length; i++){
        c[i].checked=(i==0)?true:false;
    }
}

function ondelete(tr){
    var ritem = tr.parentElement.parentElement;
    if (confirm("Are you sure to delete this record?")){
        document.getElementById("prodtab").deleteRow(ritem.rowIndex);
    }
}

function getid(){
    var table = document.getElementById("prodtab");
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