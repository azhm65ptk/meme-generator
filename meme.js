document.addEventListener("DOMContentLoaded", function(){

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const letters = document.querySelectorAll(".letter");
setInterval(function () {
  for (let n of letters) {
    n.style.color = randomColor();
  }
}, 1000);

const memeForm = document.getElementById("memeForm");
memeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const url = document.getElementById("img-url").value;
  const text1 = document.getElementById("top-txt").value;
  const text2 = document.getElementById("bottom-txt").value;

  //create a meme

  const outerDiv = document.createElement("div");
  const memeImage = document.createElement("img");
  const closeBtn = document.createElement("div");
  const topText = document.createElement("p");
  const bottomText = document.createElement("p");

  closeBtn.innerText = "X";
  closeBtn.className = "close-btn";

  topText.innerText = text1;
  topText.className = "top";

  bottomText.innerText = text2;
  bottomText.className = "bottom";

  memeImage.setAttribute("src", url);
  memeImage.className = "meme-Image";

  outerDiv.appendChild(memeImage);
  outerDiv.appendChild(closeBtn);

  outerDiv.appendChild(topText);
  outerDiv.appendChild(bottomText);

  outerDiv.className = "meme-wrapper";

  document.getElementById("memes").appendChild(outerDiv);
  memeForm.reset();
});

document.addEventListener("click", function (event) {
  if (event.target.className === "close-btn") {
    event.target.parentNode.remove();
  }
});
})

// const memeForm = document.getElementById("meme-form");

// memeForm.addEventListener("submit", function (ev) {
//   ev.preventDefault();
//   const url = document.getElementById("txt-url").value;
//   const text1 = document.getElementById("txt-1").value;
//   const text2 = document.getElementById("txt-2").value;

//   //create a meme
//   const outerDiv = document.createElement("div");
//   const memeImage = document.createElement("img");
//   const closeButton = document.createElement("div");
//   const text1Element = document.createElement("p");
//   const text2Element = document.createElement("p");

//   closeButton.className = "close-btn";
//   closeButton.innerText = "X";

//   text1Element.innerText = text1;
//   text1Element.className = "text-top";

//   text2Element.innerText = text2;
//   text2Element.className = "text-bottom";

//   memeImage.setAttribute("src", url);
//   memeImage.className = "meme-image";

//   outerDiv.appendChild(memeImage);
//   outerDiv.appendChild(closeButton);

//   outerDiv.appendChild(text1Element);
//   outerDiv.appendChild(text2Element);

//   outerDiv.className = "meme-wrapper";

//   document.getElementById("memes").appendChild(outerDiv);
// });

// document.addEventListener("click", function (ev) {
//   if (ev.target.className === "close-btn") {
//     ev.target.parentNode.remove();
//   }
// });
