const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  console.log("init!")
  let body = document.querySelector('body')

  body.addEventListener('keydown', onKeyDownHandler(event) )


}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  console.log(key)

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
