let desejo = document.querySelector(".texto");
const enviar = document.querySelector(".enviar");
const listBody = document.querySelector(".listbody");
const search = document.querySelector("#search");

let listaDesejos = JSON.parse(localStorage.getItem("tarefas")) || [];

function atualizarStorage() {
    try {
        localStorage.setItem("tarefas", JSON.stringify(listaDesejos));
    } catch (e) {
        if (e.name === 'QuotaExceededError' || e.code === 22) {
            mostrarPopupErro();
        } else {
            console.error("Erro desconhecido:", e);
        }
    }
}

function renderList(){
    listBody.innerHTML = ""
    listaDesejos.forEach((value, index) =>{
        listBody.insertAdjacentHTML("beforeend", itemDesejo(value, index))
    })

    if(listaDesejos.length === 0){
        listBody.insertAdjacentHTML("beforeend", voidList())
    }

    search.value = ""
}

renderList();

enviar.addEventListener('click', ()=>{
    if (desejo.value.length > 0){
        listaDesejos.push({
            texto: desejo.value,
            status: false,
            id: Date.now()
        })
        
        atualizarStorage()
        renderList()
        desejo.value = ""
        desejo.focus();
    }
})

listBody.addEventListener('click', (event) => {
    const elemento = event.target;

    const idClicado = Number(elemento.getAttribute("data-id"));

    if (!idClicado) return;

    const indexReal = listaDesejos.findIndex(tarefa => tarefa.id === idClicado);

    if (elemento.classList.contains("deleteBtn")) {
        listaDesejos.splice(indexReal, 1);
    } 
    
    if (elemento.classList.contains("btn-concluir")) {
        listaDesejos[indexReal].status = !listaDesejos[indexReal].status;
    }

    atualizarStorage()
    renderList(); 
});

search.addEventListener('input', ()=>{
    let searchText = search.value.toLowerCase();
    let desejoDownload = localStorage.getItem("tarefas");
    let searchedText = JSON.parse(desejoDownload).filter(tarefa => tarefa.texto.toLowerCase().includes(searchText))
    listBody.innerHTML = ""

    searchedText.forEach((value, index) =>{
        listBody.insertAdjacentHTML("beforeend", itemDesejo(value, index))
    })

    if(searchedText.length === 0){
        listBody.insertAdjacentHTML("beforeend", lostItem())
    }

    
});
