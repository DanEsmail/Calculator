var str = ""
var finalArr = []
var lastAns;

function numberTest(num){
  if(isNaN(num) == false || num == "."){
    return num

  }else{
    return "not"

  }
}
function anwser(arr){
  for(var i = 0; i < arr.length; i++){
    if(i == 0){
      num = parseInt(arr[0])
    }else if(isNaN(arr[i])){
      switch(arr[i]) {
        case "+":
          num += parseInt(arr[i+1])
          break;
        case "-":
          num -= parseInt(arr[i+1])
          break;
        case "*":
          num *= parseInt(arr[i+1])
          break;
        case "/":
          num /= parseInt(arr[i+1])
          break;
        case "%":
          num %= parseInt(arr[i+1])
          break;
      }
    }else{
    }
  }
  lastAns = num
  return num
}


function operators(operator){
  switch (operator) {
    case "+":
    case "-":
    case "/":
    case "*":
    case "%":
      writeEquation(finalArr, operator)
      str = ""

      break;
    case "=":
      writeEquation(finalArr)
      str = ""
      $("#answer").html(anwser(finalArr))
      break;
    case "Clear":
      finalArr = []
      $("#equation").html("<br>")
      $("#answer").html("")
      str = ''
    break;
    case "back":
      str = str.slice(0, -1);
      $("#answer").html(str)
      break;
    case "ans":
      if(lastAns != undefined){
        str = lastAns;
        $("#answer").html(lastAns)
      }
      break;
    default:

  }
}

function writeEquation(arr, operator){
  if(operator != undefined){
    finalArr.push(str);
    finalArr.push(operator.trim())
  }else{
    finalArr.push(str);
  }
  var equation = arr.join(" ")
  $("#answer").html("")
  $("#equation").html("")
  $("#equation").html(equation)


}


$(document).ready(function(){
  $(".calcButton").on("click", function(){
    if(numberTest($(this).html()) != "not"){
      str += numberTest($(this).html())
      $("#answer").html(str)
    }else{
      if(str[str.length-1] == "."){
        str += 0;
        operators($(this).html())
      }else{
        operators($(this).html())
      }
    }
  })
})
