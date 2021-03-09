"use strict";

var selectedrow = null;

function onformsubmit() {
  if (ValidityState()) {
    var formdata = readformdata();

    if (selectedrow = null) {
      insertnewrecord(formdata);
    } else {
      updateexistsrecord(formdata);
    }
  }
}

function readformdata() {
  var formdata = {};
  formdata["username"] = document.getElementById("username").value;
  formdata["com"] = document.getElementById("com").value;
  return formdata;
}

function insertnewrecord(data) {
  var table = document.getElementById("commentslist").getElementsByTagName('tbody')[0];
  var newrow = table.insertRow(table.length);
  cell1 = newrow.insertCell(0);
  cell1.innerHTML = data.username;
  cell2 = newrow.insertCell(1);
  cell2.innerHTML = data.com;
}

function updateexistsrecord(data) {
  selectedrow.cells[0].innerHTML = data.username;
  selectedrow.cells[1].innerHTML = data.des;
}

function signal() {
  alert("good morning");
}

function init() {
  var table = document.getElementById("");
}