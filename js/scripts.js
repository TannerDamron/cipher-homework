$(function() {
  var sentence=prompt('Enter a sentence:');
  console.log(sentence);
  var sFirst=sentence.charAt(0);
  var sLast=sentence.charAt(sentence.length-1);
  $(".img1").click(function() {
  alert(sentence);});
  $(".img2").click(function() {
  alert(reverseAll(fourth(sFirst,sLast,sentence)))});
  console.log(uppercaseFirstAndLast(sFirst,sLast));
  console.log(changeSentence(sFirst,sLast,sentence));
  console.log(fourth(sFirst,sLast,sentence));
  console.log(reverseAll(fourth(sFirst,sLast,sentence)));
});
function uppercaseFirstAndLast(sFirst,sLast){
  sFirst= sFirst.toUpperCase();
  sLast= sLast.toUpperCase();
  return (sFirst+sLast);
}
function reverseFirstAndLast(str){
  return (str.charAt(1)+str.charAt(0));
}
function changeSentence(sFirst,sLast,sentence) {
  return (sentence+reverseFirstAndLast(uppercaseFirstAndLast(sFirst,sLast)));
}
function fourth(sFirst,sLast,sentence) {
  var middleIndex = (sentence.length/2-(sentence.length%2)/2);
  return  (sentence.charAt(middleIndex)+changeSentence(sFirst,sLast,sentence));

}
function reverseAll(sentence) {
var str = sentence.split(""); //convert 'jQuery' to array
str = str.reverse(); //reverse 'jQuery' order
str = str.join(""); //then join the reverse order values together
return str;
}
