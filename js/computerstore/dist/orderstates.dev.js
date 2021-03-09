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

function validate() {
  var it = document.getElementById("stateid").value;
  var des = document.getElementById("descid").value;
  var err = "";

  if (it == "") {
    err += "please enter a state of order\n";
  }

  if (des == "") {
    err += "please enter description of category\n";
  }

  if (err != "") {
    alert(err);
  }

  return err == "";
}

function insertnewrow() {
  var table = document.getElementById("ostab").getElementsByTagName('tbody')[0];
  var newrow = table.insertRow(table.length);
  cell1 = newrow.insertCell(0);
  cell1.innerHTML = getid();
  cell2 = newrow.insertCell(1);
  cell2.innerHTML = "<td>" + document.getElementById("stateid").value + "<td>";
  cell3 = newrow.insertCell(2);
  cell3.innerHTML = "<td>" + document.getElementById("descid").value + "</td>";
  cell4 = newrow.insertCell(3);
  cell4.innerHTML = "<a OnClick=\"onedit(this)\">Edit</a>&nbsp;&nbsp;<a OnClick=\"ondelete(this)\">Delete</a>";
  resetform();
}

function resetform() {
  document.getElementById("stateid").value = "";
  document.getElementById("descid").value = "";
  selectedrow = null;
}

function editelem() {
  selectedrow.cells[1].innerHTML = document.getElementById("stateid").value;
  selectedrow.cells[2].innerHTML = document.getElementById("descid").value;
  resetform();
}

function onedit(tr) {
  selectedrow = tr.parentElement.parentElement;
  document.getElementById("id1").value = selectedrow.cells[0].innerHTML;
  document.getElementById("stateid").value = selectedrow.cells[1].innerHTML;
  document.getElementById("descid").value = selectedrow.cells[2].innerHTML;
}

function ondelete(tr) {
  if (confirm("Are you sure to delete this record?")) {
    document.getElementById("ostab").deleteRow(tr.parentElement.parentElement.rowIndex);
  }
}

function getid() {
  var table = document.getElementById("ostab");
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