var selectedrow = null;
function showmenu(){
    if (validate()){
        if (selectedrow == null){
            insertNewRow();
        }
        else{
            edirrow();
        }
    }
}



function insertNewRow(){
    var name = document.getElementById("catname").value;
    var description = document.getElementById("desc").value;
    var rating = document.getElementById("rat").value;
    var temp = document.getElementById("CatTable").getElementsByTagName('tbody')[0];
    var newrow = temp.insertRow(temp.length);
    cell1=newrow.insertCell(0);
    cell1.innerHTML=getid();
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = name;
    cell3 = newrow.insertCell(2);
    cell3.innerHTML = `<td>`+description+`</td>`;
    cell4 = newrow.insertCell(3);
    cell4.innerHTML = `<td>`+rating+`</td>`;
    cell5 = newrow.insertCell(4);
    cell5.innerHTML = `<a OnClick="onEdit(this)">Edit</a>&nbsp;&nbsp;<a OnClick="onDelete(this)">Delete</a>`;
    resetform();
}
//edit, post запрос
function edirrow(){
    selectedrow.cells[1].innerHTML=document.getElementById("catname").value;
    selectedrow.cells[2].innerHTML=document.getElementById("desc").value;
    selectedrow.cells[3].innerHTML=document.getElementById("rat").value;
    
    resetform();
    
}
/**
*generate id
**/
function getid(){
    var table = document.getElementById("CatTable");
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





//редактирование, get запрос
function onEdit(td){
    selectedrow = td.parentElement.parentElement;
    document.getElementById("id1").value = selectedrow.cells[0].innerHTML;
    document.getElementById("catname").value = selectedrow.cells[1].innerHTML;
    document.getElementById("desc").value=selectedrow.cells[2].innerHTML;
    document.getElementById("rat").value=selectedrow.cells[3].innerHTML;
    //selectedrow = null;
}
//удаление, GET
function onDelete(td){
    if (confirm('Are you sure to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById("CatTable").deleteRow(row.rowIndex);
        resetform();
    }
}
//валидация
function validate(cat){
    isvalid = true;
    console.log(document.getElementById("catname").value);
    console.log(document.getElementById("desc").value);
    console.log(document.getElementById("rat").value);

    var err = "";
    if (document.getElementById("catname").value==""){
        err+="please enter name of category\n";
        isvalid = false;
    }
    if (document.getElementById("desc").value==""){
        err += "please enter description of category\n";
        isvalid=false;
    }
    if (document.getElementById("rat").value==""){
        err+="please ener rating of category\n";
        isvalid=false;
    }
    if (document.getElementById("rat").value<0){
        err+="please ener a valid rating of category\n";
        isvalid=false;
    }
    
   if (!isvalid){
       alert(err);
   }
   
    return isvalid;

}
function resetform(){
    document.getElementById("catname").value="";
    document.getElementById("desc").value="";
    document.getElementById("rat").value=0.0;
    selectedrow = null;
}
function search(){
    var par = document.getElementById("nsearch").value;
    var searchstr = "<html><table class=\"table\"><tr><th>id</th><th>name</th><th>description</th><th>rating</th></tr>";
    var c = 0;
    if (par==""){
        document.getElementById("nsearch").focus();
        alert("please enter name from searching");
    }
    else{
        var table = document.getElementById("CatTable");
        for (var i=1;i<table.rows.length;i++){
            if (par==table.rows[i].cells[1].innerHTML){
                searchstr+="<tr><td>"+table.rows[i].cells[0].innerHTML+"</td><td>"+table.rows[i].cells[1].innerHTML+"</td><td>"+table.rows[i].cells[2].innerHTML+"</td><td>"+table.rows[i].cells[3].innerHTML+"</td></tr>";
                c = 1;
                
            }
            //console.log(table.rows[i].cells[1].innerHTML);
        }
    }
    if (c==0){
        searchstr+="<tr><td colspan=4>нет ни одного совпадания</td></tr>"
    }
    document.write(searchstr);

}

