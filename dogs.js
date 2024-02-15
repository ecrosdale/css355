var breeds=[];

//fetch from ceo and add all the data in
fetch (
    'https://dog.ceo/api/breeds/list/all'
).then(
    res => res.json()
).then(
    data => {
        breeds= Object.keys(data.message);
        breeds.forEach(breed=>{
            document.getElementById('dogList').appendChild(
                document.createElement('option')
            ).innerText= breed;
        })
    }
).catch(
    err => console.log('ERR:', err)
);

// when searchbtn is clicked show image of animal
document.getElementById('searchBtn').addEventListener('click',()=>{
    breed = document.getElementById('searchInput').value;
    if(! breeds.includes (breed)){
        document.getElementById('message').innerText='Breed does not exist'
    } else {
        getRandImg()
    }
})

var breed;
function getRandImg(){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(res=> res.json())
    .then(data=>{
        document.getElementById('dogImg').src=data.message;
    })
}
let nIntervId;

function changeImage() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(fetch(`https://dog.ceo/api/breed/${breed}/images/random`), 5);
  }
}