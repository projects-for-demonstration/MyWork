"use strict";

function show() {
  alert("go");
}

function getform() {
  var items = document.getElementsByName("type[]");
  var name = document.getElementById("name1").value;
  var err = "";

  if (name == "") {
    err += "пожалуйста, введите имя\n";
  }

  var data = "Выбранные роли: ";
  var c = "";

  for (var i = 0; i < items.length; i++) {
    if (items[i].checked && i != items.length - 1) {
      c += i == items.length - 1 ? items[i].value + "," : items[i].value;
    }
  }

  if (c == "") {
    err += "выберите роль";
  }

  if (err == "") {
    alert(data + c);
  } else {
    alert(err);
  }
}