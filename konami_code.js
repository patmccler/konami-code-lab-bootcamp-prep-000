const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  var body = document.querySelector('body')

  body.addEventListener('keydown', onKeyDownHandler(e) )


}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
 
  if (key === code[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}