const jokes = document.querySelector("#jokes");
const btn = document.querySelector("#btn");

const generatesJokes = () =>{
    const setHeader = {
        headers : {
            Accept : "application/json"
        }
    }
    
    fetch('https://icanhazdadjoke.com',setHeader)// console.log(res.json());
    .then(res=> res.json())
    .then((data)=>{
        jokes.innerHTML = data.joke
    }).catch((error)=>{
        console.log(error);
    })
}

btn.addEventListener('click',generatesJokes);
generatesJokes();