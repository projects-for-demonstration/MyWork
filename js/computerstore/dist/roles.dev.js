"use strict";

var selectedrow = null;

function showmenu() {
  if (validate()) {
    if (selectedrow == null) {
      insertnewrow();
    } else {
      editelem();
    }
  }
}

function insertnewrow() {
  var table = document.getElementById("roletabid").getElementsByTagName('tbody')[0];
  var newrow = table.insertRow(table.length);
  cell1 = newrow.insertCell(0);
  cell1.innerHTML = getid();
  cell2 = newrow.insertCell(1);
  cell2.innerHTML = document.getElementById("nid").value;
  cell3 = newrow.insertCell(2);
  cell3.innerHTML = document.getElementById("desid").value;
  cell4 = newrow.insertCell(3);
  cell4.innerHTML = "<a OnClick=\"onedit(this)\">Edit</a>&nbsp;&nbsp;<a OnClick=\"ondelete(this)\">Delete</a>";
  resetform();
}

function resetform() {
  document.getElementById("nid").value = "";
  document.getElementById("desid").value = "";
  document.getElementById("id1").value = "";
  selectedrow = null;
}

function onedit(tr) {
  selectedrow = tr.parentElement.parentElement;
  document.getElementById("id1").value = selectedrow.cells[0].innerHTML;
  document.getElementById("nid").value = selectedrow.cells[1].innerHTML;
  document.getElementById("desid").value = selectedrow.cells[2].innerHTML;
}

function editelem() {
  selectedrow.cells[1].innerHTML = document.getElementById("nid").value;
  selectedrow.cells[2].innerHTML = document.getElementById("desid").value;
  resetform();
}

function ondelete(tr) {
  selectedrow = tr.parentElement.parentElement;

  if (confirm("Are you sure to delete this record?")) {
    document.getElementById("roletabid").deleteRow(selectedrow.rowIndex);
  }
}

function validate() {
  var err = "";

  if (document.getElementById("nid").value == "") {
    err += "please enter nane for posititions\n";
  }

  if (document.getElementById("desid").value == "") {
    err += "please enter a description\n";
  }

  if (err != "") {
    alert(err);
  }

  return err == "";
}

function getid() {
  var table = document.getElementById("roletabid");
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