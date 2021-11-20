// var card = document.querySelector('.card')


// for (const iterator of movies){

//     var item = document.createElement('li')
//     var img = document.createElement('img')
//     var title = document.createElement('h2')
//     var movie_year = document.createElement('p')
//     var imdb_rating = document.createElement('p')

//     img.setAttribute('src', iterator.smallThumbnail)
//     img.classList.add("avanger-image")
//     title.textContent = iterator.title;
//     movie_year.textContent = iterator.year;
//     imdb_rating.textContent = iterator.imdbRating;


//     item.appendChild(img)
//     item.appendChild(title)
//     item.appendChild(movie_year )
//     item.appendChild(imdb_rating)

//    card.appendChild(item)
// }\



let ota = document.querySelector(".father")

for (let i = 0; i < 20; i++) {
    let div = document.createElement("div")
    div.innerHTML = `
    <img src="${pokemons[i].img}" width="310" height="180" class="card-img-top" alt="america">
    <div class="card-body">
    <h5 class="card-title">${pokemons[i].name}</h5>
    <p class="card-text">   ${pokemons[i].type}</p>
    
    </div>
    <div class="father-button">
    <button type="button" class="btn buttons"><i data-uuid="close" class="icon far fa-thumbs-up fa-2x" ></i></button>
    </div>
    </div>
    `
    div.style.width = "18rem"
    div.classList.add("card")
    ota.appendChild(div)
}

let buttonlike = document.querySelectorAll(".buttons")
let cound = 0
let counds = document.querySelector(".cound")
setInterval(function add() {
    counds.textContent = cound
}, 500)

for(let i = 0; i < buttonlike.length; i++){
    buttonlike[i].addEventListener("click", (e) => {
        if(e.target.dataset.uuid == "close"){
            cound += 1
            buttonlike[i].style.transform = " rotate(-180deg)"
            e.target.dataset.uuid = "open"
        }
        else if(e.target.dataset.uuid == "open"){
            cound -= 1
            buttonlike[i].style.transform = " rotate(0deg)"
            console.log("ok")
            e.target.dataset.uuid = "close"
        }

    })
}

// counterbtn = counterbtn.find(t => t.id === Number(id))



// var datalist = document.getElementById("list")
// var headerTag = document.getElementById("header")
// var memory = new Array()

// datalist.addEventListener('click', function (event){
//     if (event.originalTarget.textContent == 'Dislike') {
//         memory.pop()
//         event.orixginalTarget.textContent = 'like'
//     } else {
//         memory.push(event.originalTarget.parentElement.dataset['name'])
//         event.originalTarget.textContent = 'Dislike'
//     }
//     headerTag.textContent = memory.length
// })