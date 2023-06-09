var fe;
var wordwwd = "cum";

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      fe =
        this.responseText.trim().split("\n");

      for (var i = 0; i < fe.length; i++) {
        if (fe[i].toString().trim() == wordwwd) {
          console.log(fe[i].toString().trim());
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
