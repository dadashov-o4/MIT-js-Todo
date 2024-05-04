{/*  <ul>
    <div class="todo">
<li>
    Tapsiriq 1
</li>
<div class="butonlar">
    <button><i class="fa-solid fa-check-double"></i></button>
    <button><i class="fa-solid fa-trash-can"></i></button>
</div>
</div>
 </ul>*/}

const form = document.querySelector("form")
const inputElementi = document.querySelector("input")
const plusIcon = document.querySelector(".addbtn")
const todolar = document.querySelector("#todolar")


form.addEventListener("submit", addTodo)
todolar.addEventListener("click", editOrDelete)

function addTodo(e) {
    e.preventDefault()

    const ulElementi = document.createElement("ul")
    todolar.appendChild(ulElementi)

    const todoDivi = document.createElement("div")
    todoDivi.classList.add("todo")

    ulElementi.appendChild(todoDivi)

    const liElementi = document.createElement("li")
    liElementi.innerText = inputElementi.value

    todoDivi.appendChild(liElementi)

    const butonlarinDivi = document.createElement("div")
    butonlarinDivi.classList.add("butonlar")

    todoDivi.appendChild(butonlarinDivi)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-btn")
    editBtn.innerHTML = `<i class="fa-solid fa-check-double"></i>`

    butonlarinDivi.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`

    butonlarinDivi.appendChild(deleteBtn)

    inputElementi.value = " "
    
}


function  editOrDelete(e){
    const kliklenenElement = e.target

    if(kliklenenElement.classList.contains("edit-btn")){
        kliklenenElement.parentElement.parentElement.classList.toggle("done")
    }
    if(kliklenenElement.classList.contains("delete-btn")){
        kliklenenElement.parentElement.parentElement.classList.add("delete")
    }
}
