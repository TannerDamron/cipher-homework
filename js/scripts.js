$(function() {
  var sentence=prompt('Enter a sentence:');
  console.log(sentence);
  var sFirst=sentence.charAt(0);
  var sLast=sentence.charAt(sentence.length-1);
  var uppercaseFirstAndLast = function(sFirst,sLast){
    sFirst= sFirst.toUpperCase();
    sLast= sLast.toUpperCase();
    return (sFirst+sLast);
  }
  var reverseFirstAndLast = function(str){
    return (str.charAt(1)+str.charAt(0));
  }
  var changeSentence = function(sFirst,sLast,sentence) {
    return (sentence+reverseFirstAndLast(uppercaseFirstAndLast(sFirst,sLast)));
  }
  var fourth = function(sFirst,sLast,sentence) {
    var middleIndex = (sentence.length/2-(sentence.length%2)/2);
    return  (sentence.charAt(middleIndex)+changeSentence(sFirst,sLast,sentence));
  }
  var reverseAll = function(sentence) {
  var str = sentence.split(""); //convert 'jQuery' to array
  str = str.reverse(); //reverse 'jQuery' order
  str = str.join(""); //then join the reverse order values together
  return str;
  }
  $(".img1").click(function() {
  alert(sentence);});
  $(".img2").click(function() {
  alert(reverseAll(fourth(sFirst,sLast,sentence)))});
});
