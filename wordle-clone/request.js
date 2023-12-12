const data = null;
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    var response = JSON.parse(xhr.responseText);
    if (xhr.status === 200) {
      // IF SUCCESS
      console.log(this.responseText);
      console.log('successful');
    } else {
      // IF FAIL
      console.log('failed');
    }
  }
}
xhr.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/masks');
xhr.send(data);
