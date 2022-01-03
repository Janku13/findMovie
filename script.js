//the api we use https://www.tvmaze.com/api

//DOM to conect js with html
const form = document.querySelector("#searchForm");
const movieList = document.querySelector("#container");

//preventing the manuel submit of the form
//And conecting to api
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const movieName = form.elements.query.value;
  //conecting to api and getting url and image
  const res = await axios.get(
    " https://api.tvmaze.com/search/shows?q=" + `${movieName}`
  );
  makeImages(res.data);
});

const makeImages = (shows) => {
  removeImages();
  for (let result of shows) {
    if (result.show.image && result.show.officialSite) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;

      const url = result.show.officialSite;
      const block = document.createElement("a");
      block.setAttribute("href", url);
      block.setAttribute("target", "_blank");

      block.appendChild(img);

      movieList.append(block);
    }
  }
};

const removeImages = () => {
  movieList.innerHTML = "";
};
