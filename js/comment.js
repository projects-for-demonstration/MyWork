function onformsubmit(){
 
    var formdata = readformdata();
    var table = document.getElementById(`comtable`);
   
    var tr= document.createElement("tr");
    tr.innerHTML='<td>'+formdata.nid+'</td><td>'+formdata.desid+'</td>';
    table.appendChild(tr);
}
function readformdata(){
    var formdata = {};
    formdata[`nid`]=document.getElementById('nid').value;
    formdata[`desid`]=document.getElementById(`desid`).value;
   
    if ((formdata["nid"]=="") && (formdata["desid"]=="")){
        alert("please input name and comment");
        return;
    }
    if (formdata["nid"]==""){
        alert("please input your name");
        return;
    }
    if (formdata["desid"]==""){
        alert("please input your comment");
        return;
    }
    return formdata;
}
