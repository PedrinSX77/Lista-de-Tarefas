let desejo = document.querySelector(".texto");
const enviar = document.querySelector(".enviar");
const listBody = document.querySelector(".listbody");

let listaDesejos = JSON.parse(localStorage.getItem("tarefas"));

function renderList(){
    listBody.innerHTML = ""
    listaDesejos.forEach((value, index) =>{
        listBody.insertAdjacentHTML("beforeend", itemDesejo(value, index))
    })

    if(listaDesejos.length === 0){
        listBody.insertAdjacentHTML("beforeend", voidList())
    }
}

renderList();

enviar.addEventListener('click', function (){
    if (desejo.value.length > 0){
        listaDesejos.push(desejo.value)
        localStorage.setItem("tarefas", JSON.stringify(listaDesejos));

        renderList()
        desejo.value = ""
        desejo.focus();
    }
})


listBody.addEventListener('click', function (event){
    if (event.target.classList.contains("deleteBtn")){
        const index = event.target.getAttribute("data-index");

        listaDesejos.splice(index, 1)
        localStorage.setItem("tarefas", JSON.stringify(listaDesejos));
        renderList()
    }
});