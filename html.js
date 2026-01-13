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
          <button class="${classeBotao}" data-index="${index}">${textoBtn}</button>
          <button class="deleteBtn" data-index="${index}">Deletar</button>
      </li>
    `;
}

function voidList(){
    return `
        <p class="textType">Aviso: Sua lista está vazia! Deseja adicionar algum item a sua lista, digite no campo acima.</p>
    `
}