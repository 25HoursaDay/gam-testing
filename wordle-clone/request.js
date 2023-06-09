function notaword() {
  console.log("not a valid word");
}
var wholeDictionary = "";
var inword = "";
// var buh = "zimbabwe";
// buh is a reference to the buh variable in the enter function
// var word = "peepeepoopoo";
// word is a reference to the word variable
function loadXMLDoc() {
  var inword = "";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      wholeDictionary =
        this.responseText.trim().split("\n");

      for (var i = 0; i < wholeDictionary.length; i++) {
        if (wholeDictionary[i].toString().trim() == buh) {
          console.log(wholeDictionary[i].toString().trim());
          console.log(i);
          inword = true;
          break;
        } else {
          if (word == buh) {
            // word is a reference to the word variable
            inword = true;
            break;
          } else {
            inword = false;
          }
        }
      }
      console.log("inword: " + inword);
      if (inword = false) {
        notaword();
        // add a "break" set to break the enter function
      }
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt", true);
  xhttp.send();
}
// put the function call in the enter function
loadXMLDoc();
