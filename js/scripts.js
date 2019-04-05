function convertNumber(number) {
  outputArray = [];
  for(var i = 0; i < number; i++) {
    outputArray.push(i);
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
