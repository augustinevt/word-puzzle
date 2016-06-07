var word = "stephanie";

var wordPuzzle = function(word){
  wordList = word.split("");
  for(i=0; i<wordList.length; i++){
    if(wordList[i]==="a" || wordList[i]==="o" ||wordList[i]==="i" ||wordList[i]==="e" ||wordList[i]==="u"){
      wordList[i] = "-";
    }
  };
  var result = wordList.join("");
  console.log(result);
};


wordPuzzle(word);
