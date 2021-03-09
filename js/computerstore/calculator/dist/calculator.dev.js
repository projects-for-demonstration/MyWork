"use strict";

var selecteditem = null;
var supplercompanies = ["LG", "Samsung", "4Good", "Apple", "Parasonic"];
var operationsystems = ["Windows", "MAC OS", "Linux"];

function getinfo() {
  if (validate()) {
    document.getElementById("inf").style.visibility = "visible";
    var table = document.getElementById("information").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    var c1 = Math.floor(Math.random() * (1000 - 500) + 500).toFixed(2);
    cell1.innerHTML = c1;
    cell2 = newrow.insertCell(1);
    var c2 = getsupplercompany();
    cell2.innerHTML = c2;
    cell3 = newrow.insertCell(2);
    var c3 = getos();
    cell3.innerHTML = c3;
    var t1 = document.getElementById("priceidmin").value;
    var t2 = document.getElementById("priceidmax").value;
    cell4 = newrow.insertCell(3);
    cell4.innerHTML = t1;
    cell5 = newrow.insertCell(4);
    cell5.innerHTML = t2;
    var msg = c1 + " " + c2.value + " " + c3.value + t1 + " " + t2;
    alert(msg);
  }
}

function clear() {
  document.getElementById("inf").style.visibility = "hidden";
}

function getsupplercompany() {
  var sk = "";
  var items = document.getElementsByName("sk[]");

  for (var i = 0; i < items.length; i++) {
    if (items[i].checked) {
      sk = supplercompanies[i - 1];
      break;
    }
  }

  return sk;
}

function validate() {
  var items = document.getElementsByName("os[]");
  var err = "";

  if (items[0].checked) {
    err += "пожалуйста, введите тип операционной системы";
  }

  items = document.getElementsByName("sk[]");

  if (items[0].checked) {
    err += "пожалуйста, выберите фирму поставщика";
  }

  if (err != "") {
    alert(err);
  }

  return err == "";
}

function getos() {
  var items = document.getElementsByName("os[]");
  var os = "";

  for (var i = 0; i < items.length; i++) {
    if (items[i].checked) {
      os = operationsystems[i - 1];
      break;
    }
  }

  return os;
}