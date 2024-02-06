const params = new URLSearchParams(location.search)
console.log(params)
const name = params.get("name");
const song1 = params.get("song1");
const song2 = params.get("song2");
const song3 = params.get("song3");
const song4 = params.get("song4");
const song5 = params.get("song5");
const song6 = params.get("song6");
const song7 = params.get("song7");

const songs = [song1,song2,song3,song4,song5,song6,song7]
console.log(songs)
const ol = document.getElementById("list");

for (s of songs) {

    const li = document.createElement("li");
    if (s) {
        li.textContent = s
        ol.appendChild(li)
    }
}

console.log("songs", songs);