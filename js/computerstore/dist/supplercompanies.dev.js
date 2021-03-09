"use strict";

var selectedrow = null;

function showmenu() {
  if (validate()) {
    if (selectedrow == null) {
      addnewitem();
    } else {
      edititem();
    }
  }
}

function validate() {
  var err = "";

  if (document.getElementById("nameid").value == "") {
    err += "please enter name of suppler company\n";
  }

  if (document.getElementById("fcount").value == "") {
    err += "please enter count of suppler companies\n";
  } else if (document.getElementById("fcount").value < 0) {
    err += "please enter a positive value\n";
  }

  if (document.getElementById("adrid").value == "") {
    err += "please enter address of suppler company\n";
  }

  if (document.getElementById("ratid").value == "") {
    err += "please enter a rating of suppler companies\n";
  } else if (document.getElementById("ratid").value < 0) {
    err += "rating  can only be positive\n";
  }

  if (document.getElementById("desid").value == "") {
    err += "please enter a description of category\n";
  }

  if (err != "") {
    alert(err);
  }

  return err == "";
}

function resetform() {
  document.getElementById("id1").value = "";
  document.getElementById("nameid").value = "";
  document.getElementById("fcount").value = "";
  document.getElementById("adrid").value = "";
  document.getElementById("ratid").value = "";
  document.getElementById("desid").value = "";
  selectedrow = null;
}

function addnewitem() {
  //alert("go");
  var table = document.getElementById("sktabid").getElementsByTagName('tbody')[0];
  var newrow = table.insertRow(table.length);
  cell1 = newrow.insertCell(0);
  cell1.innerHTML = document.getElementById("sktabid").rows.length - 1;
  cell2 = newrow.insertCell(1);
  cell2.innerHTML = document.getElementById("nameid").value;
  cell3 = newrow.insertCell(2);
  cell3.innerHTML = document.getElementById("fcount").value;
  cell4 = newrow.insertCell(3);
  cell4.innerHTML = document.getElementById("adrid").value;
  cell5 = newrow.insertCell(4);
  cell5.innerHTML = document.getElementById("ratid").value;
  cell6 = newrow.insertCell(5);
  cell6.innerHTML = document.getElementById("desid").value;
  cell7 = newrow.insertCell(6);
  cell7.innerHTML = "<a Onclick=\"onedit(this)\">Edit</a>&nbsp;&nbsp;<a OnClick=\"ondelete(this)\">Delete</a>";
  resetform();
}

function edititem() {
  selectedrow.cells[1].innerHTML = document.getElementById("nameid").value;
  selectedrow.cells[2].innerHTML = document.getElementById("fcount").value;
  selectedrow.cells[3].innerHTML = document.getElementById("adrid").value;
  selectedrow.cells[4].innerHTML = document.getElementById("ratid").value;
  selectedrow.cells[5].innerHTML = document.getElementById("desid").value;
  resetform();
}

function onedit(tr) {
  selectedrow = tr.parentElement.parentElement;
  document.getElementById("id1").value = getid();
  document.getElementById("nameid").value = selectedrow.cells[1].innerHTML;
  document.getElementById("fcount").value = selectedrow.cells[2].innerHTML;
  document.getElementById("adrid").value = selectedrow.cells[3].innerHTML;
  document.getElementById("ratid").value = selectedrow.cells[4].innerHTML;
  document.getElementById("desid").value = selectedrow.cells[5].innerHTML;
}

function ondelete(tr) {
  if (confirm("Are you sure to delete this record?")) {
    removedrecod = tr.parentElement.parentElement;
    console.log(removedrecod);
    document.getElementById("sktabid").deleteRow(removedrecod.rowIndex);
  }
}

function searching() {
  var c = document.getElementById("searchid").value;
  console.log(c);
  var data = "";
  var searchstr = "\n    <html>\n    <head>\n    <title>Search result</title>\n    </head>\n    <body>\n        <table>\n        <thead>\n        <tr>\n            <th>id</th>\n            <th>name</th>\n            <th>filialcount</th>\n            <th>address</th>\n            <th>rating</th>\n            <th>description</th>\n        </tr>\n        </thead>\n        \n    ";

  if (c == "") {
    alert("please eneter name of seaching");
    document.getElementById("searchid").focus();
  } else {
    var table = document.getElementById("sktabid");

    for (var i = 0; i < table.rows.length; i++) {
      //console.log(table.rows[i].cells[2])
      if (table.rows[i].cells[1].innerHTML == c) {
        data += "<tr>";

        for (var j = 0; j < table.rows[i].cells.length - 1; j++) {
          data += "<td>" + table.rows[i].cells[j].innerHTML + "</td>";
        }

        data += "</tr>";
      }
    }

    if (data == "") {
      searchstr += "<tbody><tr><td colspan=\"6\">Nothing results</td></tr></tdbody></table>";
    } else {
      searchstr += data + "</tbody></table>";
    }
  }

  document.getElementById("searchid").value = "";
  document.write(searchstr);
}
/**
 * generate id address
 */


function getid() {
  var table = document.getElementById("sktabid");
  var a = new Array();

  for (var i = 1; i < table.rows.length - 1; i++) {
    a.push(table.rows[i].cells[0].innerHTML);
  }

  if (a.length == 0) {
    return a.length + 1;
  } else {
    console.log("array");
    console.log(a);
    console.log("max value");
    var l = Number(a[0]);

    for (var j = 0; j < a.length; j++) {
      if (Number(a[j]) > Number(l)) {
        l = Number(a[j]);
      }
    }

    console.log(l) + 1;
    return l + 1;
  }
}