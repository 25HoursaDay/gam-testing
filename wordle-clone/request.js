function notaword() {
  console.log("not a valid word");
}



var buh = "zimbabwe";
// buh is a reference to the buh variable in the enter function
var word = "peepeepoopoo";
// word is a reference to the word variable



var wholeDictionary = "";
var dictLoad = "";
var isaword = "";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    wholeDictionary =
      this.responseText.trim().split("\n");
    var dictLoad = true;
    enterRequest();
  }
};
xhttp.open("GET", "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt", true);
xhttp.send();



function enterRequest() {
  for (var i = 0; i < wholeDictionary.length; i++) {
    if (wholeDictionary[i].toString().trim() == buh) {
      console.log(wholeDictionary[i].toString().trim());
      console.log(i);
      isaword = true;
      break;
    } else {
      isaword = false;
    }
  }
  console.log("isaword: " + isaword);
  if (isaword == false) {
    notaword();
    // add a "break" set to break the enter function
  }
}
