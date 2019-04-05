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
  numberSquared = Math.sqrt(number);
  for(var i=1; i <= numberSquared; i++) {
    cols += 1;
    rows += 1;
  }
  if (number % numberSquared !== 0) {
    rows += 1;
  }
  console.log(rows);
  console.log(cols);
}


//user interface
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    var result = convertNumber(number);
    var table = getTable(number);
    $("#result").show();
    $("#result").text(result);
    console.log(result);


  });
});
