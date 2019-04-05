function convertNumber(number) {

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
