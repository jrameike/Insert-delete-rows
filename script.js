"use strict";

function deleteRow1() {
   document.getElementById("row").deleteRow(-1);}
function deleteRow2() {
  document.getElementById("row").deleteRow(0);}


var inputValue = document.getElementById("inputValue");
var inputValue2 = document.getElementById("inputValue2");
var inputValue3 = document.getElementById("inputValue3");
function addRows() {if(inputValue.value === "" || inputValue2.value === "" || inputValue3.value <= 0){
    alert ("Užpildykite visus laukus");}
    else {
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.classList.add("names");
    cell2.classList.add("names");
    cell3.classList.add("names");
    cell1.innerHTML = document.getElementById('inputValue').value;
    cell2.innerHTML = document.getElementById('inputValue2').value;
    cell3.innerHTML = document.getElementById('inputValue3').value;
    inputValue.value = "";
    inputValue2.value = "";
    inputValue3.value = "";}
}
