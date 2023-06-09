var wholeDictionary;
// buh is a reference to buh in the enter function
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      wholeDictionary =
        this.responseText.trim().split("\n");

      for (var i = 0; i < wholeDictionary.length; i++) {
        if (wholeDictionary[i].toString().trim() == buh) {
          console.log(wholeDictionary[i].toString().trim());
          console.log(i);
          break;
        }
      }
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt", true);
  xhttp.send();
}
loadXMLDoc();
