// write your code here!
let currDuck; 

fetch('http://localhost:3000/ducks')
.then((resp) => resp.json())
.then(data=>{
    populateDucks(data);
})

//variable for displaying all ducks at top of page 
const duckNav = document.querySelector('#duck-nav');
//variables for displaying a single duck in the duck-display
const duckDisplay = document.querySelector('#duck-display');
let duckDisplayName = document.querySelector('#duck-display-name');
let duckDisplayImage = document.querySelector('#duck-display-image');
//variables for accessing like button 
let duckDisplayLikes = document.querySelector('#duck-display-likes');
//variables for accessing newDuckForm 
const newDuckForm = document.querySelector('#new-duck-form');


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
    currDuck = singleDuck
    
    duckDisplayName.innerText = currDuck.name;
    duckDisplayImage.src = currDuck.img_url;
    duckDisplayLikes.innerText = `${currDuck.likes} likes`;
    debugger
}

duckDisplayLikes.addEventListener('click', ()=>{
    //when user clicks, increments the ducksDisplayLikes by 1
    // function currLikes(){
    duckDisplayLikes.innerText = `${currDuck.likes++} likes`; 
    // }
     
    // currDuck.likes = currLikes

    // displaySingleDuck(currDuck)
})

newDuckForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    debugger
    const newDuck = {
        name : e.target['duck-name-input'].value,
        img_url : e.target['duck-image-input'].value,
        likes :  0
    }
    function appendNewDuck(ele){
        const img = document.createElement('img');
        img.src = ele.img_url;
        duckNav.append(img);

        img.addEventListener('click', () => {
            displaySingleDuck(ele)
        })
    }
    appendNewDuck(newDuck)
})



