var selecteditem = null;
const rowsize = 10;
var products = new Array(rowsize)
var sk = ["Samsung","LG","Apple","Lenovo"];
var typeos = ["Linux", "Windows","MAC OS"];


function info(){
     var table = document.getElementById("cataltabid").getElementsByTagName('tbody')[0].length;
     console.log(table);
}
document.addEventListener("DOMContentLoaded",init);
function init(){

    var data = document.getElementById("cataltabid").rows[0].cells.length;
    var table = document.getElementById("cataltabid").getElementsByTagName('tbody')[0];
    
    for (var i=0; i<rowsize;i++){
        products[i] = new Array(data);
        products[i][0] = i+1;
        products[i][1] = "товар номер "+i;
        products[i][2] = generatesupplercompany();
        products[i][3] = generateos();
        var price = (Math.random()*(100000-10000+1)+1000).toFixed(2);
        var countpr = Math.floor(Math.random()*(50000-1000)+1000);
        products[i][4] = price;
        products[i][5] = countpr;
        products[i][6] = countpr;
        products[i][7] = (Math.random()*(1.0-0.2)+0.2).toFixed(2);
        products[i][8] = "Описание товара "+i;
        products[i][9]= `<a onClick="addintobasket(this)">Add into basket</a>&nbsp;<a onclick="getinfo(this)">get ino</a>`;
        
    }
    for (var i=0;i<rowsize; i++){
        var table = document.getElementById("cataltabid").getElementsByTagName('tbody')[0];
        var newrow = table.insertRow(table.length);
        cell1 =  newrow.insertCell(0);
        cell1.innerHTML = products[i][0]
        cell2 = newrow.insertCell(1);
        cell2.innerHTML = products[i][1];       
        cell3 = newrow.insertCell(2);
        cell3.innerHTML = products[i][2];
        cell4 = newrow.insertCell(3);
        cell4.innerHTML = products[i][3];
        cell5 = newrow.insertCell(4);
        cell5.innerHTML = products[i][4];
        cell6 = newrow.insertCell(5);
        cell6.innerHTML = products[i][5];
        cell7 = newrow.insertCell(6);
        cell7.innerHTML = products[i][6];
        cell8 = newrow.insertCell(7);
        cell8.innerHTML = products[i][7];
        cell9 = newrow.insertCell(8);
        cell9.innerHTML = products[i][8];
        cell10 = newrow.insertCell(9);
        cell10.innerHTML = products[i][9];
    }
}
function getid(){
    var table = document.getElementById("cataltabid");
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
function generatesupplercompany(){
    
    var skindex = Math.floor(Math.random()*(sk.length-1)+0);//generate supplercompany from suppler company
    return sk[skindex];
}
function generateos(){
    var osindex = Math.floor(Math.random()*(typeos.length-1)+0);//generate value from type os;
    return typeos[osindex];
}
function search(){
    var name = document.getElementById("nameid").value;
    if (name==""){
        alert(" пожалуйста, укажите имя");
        return;
    }
  
    else {
        var searchar = new Array();
        var m = 0;
        for (var i = 0; i<rowsize; i++){
            
            if (products[i][1]==name){

                var data = document.getElementById("cataltabid").rows[0].cells.length;
                searchar[i] = new Array(data);
                for (var j=0;j<data;j++){
                    searchar[i][j]=(products[i][j]);
                }
                m+=1;
            }
        }
        //cleartable
        cleartable();
        console.log(m);
        var table = document.getElementById("cataltabid").getElementsByTagName('tbody')[0];
        for (var i = 0; i<m;i++){
            var newrow = table.insertRow(table.length);
            cell1 = newrow.insertCell(0);
            cell1.innerHTML = searchar[i][0];
            cell2 = newrow.insertCell(1);
            cell2.innerHTML =searchar[i][1];
            cell3 = newrow.insertCell(2);
            cell3.innerHTML = searchar[i][2];
            cell4 = newrow.insertCell(3);
            cell4.innerHTML = searchar[i][3];
            cell5 = newrow.insertCell(4);
            cell5.innerHTML = searchar[i][4];
            cell6 = newrow.insertCell(5);
            cell6.innerHTML = searchar[i][5];
            cell7 = newrow.insertCell(6);
            cell7.innerHTML =searchar[i][6];
            cell8 = newrow.insertCell(7);
            cell8.innerHTML = searchar[i][7];
            cell9 = newrow.insertCell(8);
            cell9.innerHTML = searchar[i][8];
            cell10 = newrow.insertCell(9);
            cell10.innerHTML = searchar[i][9];
        }
    }
}

function cleartable(){
    var table = document.getElementById("cataltabid");
    for (var i=document.getElementById("cataltabid").rows.length-1;i>=0;i--){
        table.deleteRow(i);
    }
}