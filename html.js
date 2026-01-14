function itemDesejo(tarefa, index) {
    const textoStatus = tarefa.status ? "Concluído" : "Pendente";
    const textoBtn = tarefa.status ? "Retomar Tarefa" : "Concluir Tarefa";
    const classeStatus = tarefa.status ? "status-concluido" : "status-pendente";
    const classeBotao = tarefa.status ? "btn-concluir btn-retomar" : "btn-concluir";

    return `
    <li class="listItem">
        <div>
            <p class="${tarefa.status ? 'riscado' : ''}">${tarefa.texto}</p>
            <span class="badge ${classeStatus}">${textoStatus}</span>
        </div>
        <button class="${classeBotao}" data-id="${tarefa.id}">${textoBtn}</button>
        <button class="deleteBtn" data-id="${tarefa.id}">Deletar</button>
    </li>
    `;
}

function voidList(){
    return `
        <p class="textType">Aviso: Sua lista está vazia! Deseja adicionar algum item a sua lista, digite no campo acima.</p>
    `
}

function lostItem(){
    return `
        <p class="textType">Tarefa não encontrado.</p>
    `
}

function mostrarPopupErro() {
    const popup = document.createElement('div');
    popup.className = 'popup-erro';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="icon">⚠️</span>
            <h3>Memória Cheia!</h3>
            <p>Delete tarefas antigas para continuar salvando.</p>
            <button onclick="this.parentElement.parentElement.remove()">Entendi</button>
        </div>
    `;
    document.body.appendChild(popup);
    
    setTimeout(() => { if(popup) popup.remove() }, 4000);
}