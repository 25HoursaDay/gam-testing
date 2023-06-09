var fe;

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      fe =
        this.responseText.trim().split("\n");
      console.log(fe[2].toString().trim());
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt", true);
  xhttp.send();
}
loadXMLDoc();
