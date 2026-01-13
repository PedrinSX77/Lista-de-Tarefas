let desejo = document.querySelector(".texto");
const enviar = document.querySelector(".enviar");
const listBody = document.querySelector(".listbody");
const search = document.querySelector(".search");


let listaDesejos = JSON.parse(localStorage.getItem("tarefas")) || [];

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

enviar.addEventListener('click', ()=>{
    if (desejo.value.length > 0){
        listaDesejos.push({
            texto: desejo.value,
            status: false,
            id: Date.now()
        })
        localStorage.setItem("tarefas", JSON.stringify(listaDesejos));

        renderList()
        desejo.value = ""
        desejo.focus();
    }
})

listBody.addEventListener('click', (event)=>{
    if (event.target.classList.contains("deleteBtn")){
        const index = event.target.getAttribute("data-index");

        listaDesejos.splice(index, 1)
        localStorage.setItem("tarefas", JSON.stringify(listaDesejos));
        renderList()
    }
});

listBody.addEventListener('click', (event)=>{
    const elemento = event.target;
    const index = elemento.getAttribute("data-index");

    if (elemento.classList.contains("btn-concluir")) {
        listaDesejos[index].status = !listaDesejos[index].status;
        
        localStorage.setItem("tarefas", JSON.stringify(listaDesejos));
        
        renderList();
    }
    
});
