"use strict";

var selectedrow = null;

function init() {
  var table = document.getElementById("osid").getElementsByTagName('tbody')[0];
  var newrow = table.insertRow(table.length);
  cell1 = newrow.insertCell(0);
  cell1.innerHTML = document.getElementById("osid").rows.length - 1;
  cell2 = newrow.insertCell(1);
  cell2.innerHTML = "Linux";
  cell3 = newrow.insertCell(2);
  cell3.innerHTML = "это одна из популярных операционных систем";
  cell4 = newrow.insertCell(3);
  cell4.innerHTML = 9.4;
  cell5 = newrow.insertCell(4);
  cell5.innerHTML = "<a OnClick=\"onedit\">Edit</a><a OnClick=\"ondelete\">Delete</a>";
  newrow = table.insertRow(table.length);
  cell1 = newrow.insertCell(0);
  cell1.innerHTML = document.getElementById("osid").rows.length - 1;
  cell2 = newrow.insertCell(1);
  cell2.innerHTML = "Windows";
  cell3 = newrow.insertCell(2);
  cell3.innerHTML = "это одна из самых популярных операционнных систем в мире";
  cell4 = newrow.insertCell(3);
  cell4.innerHTML = 7.8;
  cell5 = newrow.insertCell(4);
  cell5.innerHTML = "<a OnClick=\"onedit\">Edit</a><a OnClick=\"ondelete\">Delete</a>";
  newrow = table.insertRow(table.length);
  cell1 = newrow.insertCell(0);
  cell1.innerHTML = document.getElementById("osid").rows.length - 1;
  cell2 = newrow.insertCell(1);
  cell2.innerHTML = "MAC OS";
  cell3 = newrow.insertCell(1);
  cell3.innerHTML = "это одна из самых популярных операционных систем в мире";
  cell4 = newrow.insertCell(2);
  cell4.innerHTML = 9.4;
  cell5 = newrow.insertCell(3);
  cell5.innerHTML = "<a OnClick=\"onedit\">Edit</a><a OnClick=\"ondelete\">Delete</a>";
}

document.addEventListener("DOMContentLoaded", init);