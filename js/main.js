function onClickGetMeme() {
  const memeImage = document.getElementById("meme-image");
  const memeError = document.getElementById("meme-error");
  memeError.innerText = "";

  let request = new XMLHttpRequest();
  request.open("GET", "https://meme-api.herokuapp.com/gimme/memes");
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      memeImage.style.width = innerWidth / 2;
      memeImage.style.height = "auto";
      memeImage.src = JSON.parse(request.response).url;
    } else {
      memeError = request.statusText;
    }
  };
}
