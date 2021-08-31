function onClickGetMeme() {
  const memeImage = document.getElementById("meme-image");
  const memeError = document.getElementById("meme-error");
  memeError.innerText = "";

  let request = new XMLHttpRequest();
  request.open("GET", "https://meme-api.herokuapp.com/gimme/memes");
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      memeImage.src = JSON.parse(request.response).url;
      memeImage.onload = function () {
        if (this.width >= window.innerWidth / 2) {
          memeImage.style.width = window.innerWidth / 2 + "px";
          memeImage.style.height = "auto";
        }
      };
    } else {
      memeError = request.statusText;
    }
  };
}
