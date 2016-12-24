//setting the varible for the final results
var final = 0;
// screen state
var screen = 1;

//clearing the last answser and the 0 at the start
function screenSet(element, num) {
  if (screen === 1) {
    $("#" + element).html(num);
    calcArr.push(num);
    screen = 0;
  } else {
    $("#" + element).append(num);
    calcArr.push(num);
  }
}

//deciding how the operator should deal with the final
function operator(op, num, finalnum) {
  var result = finalnum;
  switch (op) {
    case "+":
      result += num;
      return result;
      break;
    case "-":
      result -= num;
      return result;
      break;
    case "*":
      result *= num;
      return result;
      break;
    case "/":
      result /= num;
      return result;
      break;
    case "%":
      result %= num;
      return result;
      break;
  }
}

// setting where the number can go to be manipulated
var calcArr = [];
// previous answer
var lastNum = 0;
$(document).ready(function(){
//All the buttons functions
$("#1").click(function() {
  screenSet("result", "1");
});
$("#2").click(function() {
  screenSet("result", "2");
});
$("#3").click(function() {
  screenSet("result", "3");
});
$("#4").click(function() {
  screenSet("result", "4");
});
$("#5").click(function() {
  screenSet("result", "5");
});
$("#6").click(function() {
  screenSet("result", "6");
});
$("#7").click(function() {
  screenSet("result", "7");
});
$("#8").click(function() {
  screenSet("result", "8");
});
$("#9").click(function() {
  screenSet("result", "9");
});
$("#0").click(function() {
  screenSet("result", "0");
});
$("#decimal").click(function() {
  screenSet("result", ".");
});
$("#modulus").click(function() {
  screenSet("result", "%");
});
$("#divide").click(function() {
  screenSet("result", "/");
});
$("#multiply").click(function() {
  screenSet("result", "*");
});
$("#minus").click(function() {
  screenSet("result", "-");
});
$("#add").click(function() {
  screenSet("result", "+");
});
$("#lastResult").click(function() {
  screenSet("result", lastNum);
});
$("#clear").click(function() {
  $("#result").html("0");
  screen = 1;
  calcArr = [];

});
$("#back").click(function() {
  calcArr.pop();
  var back = calcArr.join("");
  $("#result").html(back);
});

$("#equal").click(function() {

  // setting value for the for statement for the operators.
  var preNaN = 0;
  var currentNaN;
  
  // checking to see if the array entry is a number.
  for (var i = 0; i < calcArr.length; i++) {
    var num1 = parseInt(calcArr[i]);
    var test = isNaN(num1);

    //finding the operators
    if (test) {
      //making sure the decimal isn't considered an operator
      if (calcArr[i] !== ".") {

        //setting the limit on the for loop
        currentNaN = i;
        if (preNaN === 0) {

          var arr = [];
          for (var j = 0; j < currentNaN; j++) {
            //pushing the numbers in to a new array to be put together.
            arr.push(calcArr[j]);

          }
          var str = arr.join("");
          str = parseFloat(str);

          final = str;
          preNaN = i;

        } else {

          var arr = [];
          for (var j = preNaN + 1; j < currentNaN; j++) {
            arr.push(calcArr[j]);

          }

          var str = arr.join("");
          str = parseFloat(str);
          final = operator(calcArr[preNaN], str, final);
          preNaN = i;

        }
      }

    }

  }

  var arr2 = [];
  for (var i = preNaN + 1; i < calcArr.length; i++) {
    arr2.push(calcArr[i]);

  }

  var str2 = arr2.join("");
  str2 = parseFloat(str2);
  final = operator(calcArr[preNaN], str2, final);

  preNaN = 0;

  
  $("#result").html(final);
  //clean up work
  lastNum = final;
  final = 0;
  calcArr = [];
  screen = 1;

});

});