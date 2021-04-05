var number1=5;
var number2 =4;
var estimatedAnswer  =8;

calculator(number1,number2,estimatedAnswer);

function calculator(entry1,entry2,userAnswer){
  if ((entry1+entry2)==userAnswer){
    alert("Correct, "+entry1+"+"+entry2+"="+userAnswer);
  }
  else {
    alert("False, "+entry1+"+"+entry2+" does not = "+userAnswer);
  }
}
