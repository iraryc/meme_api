"use strict"

const myHeaders = new Headers();

myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

myHeaders.append("Cookie", "claim_key=WskPSYeTefnZF1tmNbHD957W1rMVCUiw");

const urlencoded = new URLSearchParams();

urlencoded.append("template_id", "247375501");
urlencoded.append("username", "MemeChampion");
urlencoded.append("password", "PVTHm3gF$*45RBK");
urlencoded.append("text1", "Listening to the new Billie Eilish album");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow"
};


fetch("https://api.imgflip.com/caption_image", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));