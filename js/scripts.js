function convertNumber(number) {
  outputArray = [];
  for(var i = 0; i < number; i++) {
    if(i === 1) {
      outputArray.push("Beep!");
    } else if(i === 2) {
      outputArray.push("Boop!")
    } else if(i === 3) {
      outputArray.push("I'm sorry Dave, I can't do that!")
    } else {
      outputArray.push(i);
    }
  }
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
