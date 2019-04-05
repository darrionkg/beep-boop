function convertNumber(number) {
  outputArray = [];
  numberArray = []
  for(var i = 0; i < number; i++) {
    numberArray.push(i.toString());
    if(numberArray[i].includes("1")) {
      outputArray.push("Beep!");
    } else if(numberArray[i].includes("2")) {
      outputArray.push("Boop!")
    } else if(numberArray[i].includes("3")) {
      outputArray.push("I'm sorry Dave, I can't do that!")
    } else {
      outputArray.push(i);
    }
  }
  console.log(numberArray);
  console.log(outputArray);
};


//user interface
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    var result = convertNumber(number);
    $("#result").show();
    $("#result").text(result);


  });
});
