function itemDesejo(value, index){
    return `
    <li class="listItem">
        <p>${value}</p><button class="deleteBtn" data-index="${index}">Deletar</button>
    </li>`
}

function voidList(){
    return `
        <p>Sua lista está vazia</p>
    `
}