//Business Logic
function convertNumber(number) {
  outputArray = [];
  numberArray = [];
  for(var i = 0; i <= number; i++) {
    numberArray.push(i.toString());
    if(numberArray[i].includes("3")) {
      outputArray.push(" I'm sorry Dave, I can't do that!");
    } else if(numberArray[i].includes("2")) {
      outputArray.push(" Boop!");
    } else if(numberArray[i].includes("1")) {
      outputArray.push(" Beep!");
    } else {
      outputArray.push(" " + i);
    }
  }
  return outputArray;
};

function getTable(number) {
  rows = 0;
  cols = 0;
  table = [];
  numberSquared = Math.sqrt(number);
  for(var i=1; i <= numberSquared; i++) {
    cols += 1;
    rows += 1;
  }
  if (number % numberSquared !== 0) {
    cols += 1;
    rows += 1;
  }
  table.push(rows);
  table.push(cols);
  return table;
};

function createTable(table, result) {
  var htmlsTable = document.getElementById("myTable");
  var rows = [];
  var cells = [];
  var cellCounter = 0;
  for(var i = 0; i < table[0]; i++) {
    rows[i] = htmlsTable.insertRow(i);
    for(var j = 0; j < table[1]; j++) {
      cells[cellCounter] = rows[i].insertCell(j);
      cellCounter++;
    }
  }
  console.log(cells.length);
  for(var k = 0; k < cells.length; k++) {
    if(result[k] === undefined) {
      cells[k].innerHTML = " ";
    }
    else {
      cells[k].innerHTML = result[k];
    }
  }
};

//User Interface Logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    var table = getTable(number);
    var result = convertNumber(number);
    var makeTable = createTable(table, result);
    $("#result").show();
    $("#result").text(result);
    console.log(result);


  });
});
