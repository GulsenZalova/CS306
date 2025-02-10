let form=document.querySelector(".todo")
let inptodo=document.querySelector(".inptodo")
let list=document.querySelector(".list")


form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let newToDo=inptodo.value

    // list.innerHTML+=`<li>${newToDo.trim()}</li>`


    if(inptodo.value.trim()==""){
      return  alert("input dolu olmalidir")
    }
    let li = document.createElement("li")
    let button=document.createElement("button")
    button.textContent="Delete"
    button.className="btn"
    li.textContent=newToDo
    li.appendChild(button)
    list.appendChild(li)
    inptodo.value=""

   let btns= document.querySelectorAll(".btn")

   for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
       this.parentElement.remove()
    })
   }

})