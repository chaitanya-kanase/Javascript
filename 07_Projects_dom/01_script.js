const container = document.querySelectorAll(".color-box")
console.log(container);
const body = document.querySelector("body");

container.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        switch(e.target.id){
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;  
        }
    })
})

//We can also do it with if else.
//insted of id we can also use className.