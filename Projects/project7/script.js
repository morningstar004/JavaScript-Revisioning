const catUrl = "https://api.thecatapi.com/v1/images/search";

const catButton = document.querySelector(".btn");
const catBox = document.querySelector(".container");
const image = document.createElement("img");

catButton.addEventListener("click", () => {
  const catGallery = new XMLHttpRequest();
  catGallery.open("GET", catUrl);
  catGallery.send();
  
  catGallery.onreadystatechange = function () {
    if (catGallery.readyState === 3) {
      const data = JSON.parse(this.responseText);
      image.setAttribute("src", data[0].url);
      catBox.appendChild(image);
      console.log(data[0].url);
    }
  };
});
