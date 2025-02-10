// Selecting Elements


// let head=document.getElementById("head")
// let parags=document.getElementsByClassName("parag")
// let a= document.getElementsByTagName("a")
// console.log(a)



// let head= document.querySelector("#head")
// let parags=document.querySelectorAll(".parag")
// let a= document.querySelector("a")
// console.log(a)




// Traversing Elements



// let li=document.querySelector(".link")

// let parent= li.parentElement
// let prev=li.previousElementSibling
// let next=li.nextElementSibling
// console.log(next)

// console.log(document)




// Event
// click,submit

let btn=document.querySelector(".btn")

btn.addEventListener("click",function(){
   let div=document.createElement("div")
   div.style.width="300px"
   div.style.height="300px"
   div.style.backgroundColor="yellow"
   document.body.appendChild(div)
})


















// let form =document.querySelector("form")
// let inp=document.querySelector(".name")
// let message=document.querySelector(".message")

// form.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     // message.textContent=inp.value
//     // message.innerText="<button class='btn'>Click</button>"
//     // message.innerHTML="<button class='btn'>Click</button>"
//     // let btn=document.createElement("button")
//     // btn.textContent="Click"
//     // console.log(btn)
//     // message.appendChild(btn)
//     message.style.color=inp.value
// })


// html-de bir button. Ona click eden asagida bir div yaransin. eni ve hundurluyu 300px, backgroundu yellow olsun.


