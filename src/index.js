// write your code here!
fetch('http://localhost:3000/ducks')
.then((resp) => resp.json())
.then(data=>{
    populateDucks(data);

})
//variable for displaying all ducks at top of page 
const duckNav = document.querySelector('#duck-nav');
//variables for displaying a single duck in the duck-display
const duckDisplay = document.querySelector('#duck-display');
const duckDisplayName = document.querySelector('#duck-display-name');
const duckDisplayImage = document.querySelector('#duck-display-image');
//variables for accessing like button 
let duckDisplayLikes = document.querySelector('#duck-display-likes');



function populateDucks(ducks){
    ducks.forEach(duck =>{
        const img = document.createElement('img');
        img.src = duck.img_url;
        img.id = duck.id;

        duckNav.append(img);

        img.addEventListener('click', () => {
            displaySingleDuck(duck)
        })
    })
}

function displaySingleDuck(singleDuck){
    duckDisplayName.innerText = singleDuck.name;
    duckDisplayImage.src = singleDuck.img_url;
    duckDisplayLikes.innerText = singleDuck.likes;
}

duckDisplayLikes.addEventListener('click', ()=>{
    //when user clicks, increments the ducksDisplayLikes by 1
    duckDisplayLikes.innerText++
})

