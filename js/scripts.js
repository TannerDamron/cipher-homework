$(function() {
  var sentence=prompt('Enter a sentence:');
  console.log(sentence);
  var sFirst=sentence.charAt(0);
  var sLast=sentence.charAt(sentence.length-1);
  console.log(uppercaseFirstAndLast(sFirst,sLast));
  console.log(changeSentence(sFirst,sLast,sentence));
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
  var middleIndex = int(sentence.length/2);

}
