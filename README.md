# 📝 Lista de Tarefas (v1.3) — Developer PedrinSx777

Uma aplicação de gerenciamento de tarefas moderna, focada em **estabilidade**, **performance** e **resiliência**. Esta versão 1.3 marca a transição para uma arquitetura modular e segura, tratando exceções de armazenamento e otimizando a manipulação do DOM.

## 🚀 O que há de novo na v1.3
* **Tratamento de Erros Profissional**: Implementação de blocos `try...catch` na persistência de dados.
* **Sistema de Popup de Alerta**: Notificação visual customizada para o usuário em caso de erro de cota (`QuotaExceededError`) no LocalStorage.
* **Refatoração Global**: Centralização da lógica de salvamento na função `atualizarStorage()`, eliminando redundâncias.
* **Modularização de Componentes**: Separação das funções de template HTML no arquivo `html.js` para facilitar a manutenção.

## ✨ Funcionalidades Principais
* **Persistência de Dados**: Integração com a LocalStorage API para manter suas tarefas após fechar o navegador.
* **Busca em Tempo Real**: Filtro dinâmico que permite encontrar tarefas instantaneamente.
* **Gestão por ID Único**: Uso de `Date.now()` para evitar conflitos de exclusão ou edição, independentemente da ordem da lista.
* **Interface Moderna**: Design inspirado em *Glassmorphism* com paleta Dark Mode e animações suaves.
* **Event Delegation**: Otimização de performance ao gerenciar eventos de clique a partir do elemento pai.

## 🛠️ Tecnologias Utilizadas
* **HTML5**: Estrutura semântica e acessível.
* **CSS3**: Variáveis globais, animações de entrada e layout responsivo.
* **Vanilla JavaScript**: Lógica pura sem dependências externas, utilizando ES6+.

## 🏗️ Estrutura do Projeto
* `index.html`: Casca estrutural da aplicação.
* `styles.css`: Estilização completa e definições visuais.
* `main.js`: Controlador principal e gerenciamento de estado.
* `html.js`: Motor de renderização e componentes de interface.

## 🚦 Como Rodar o Projeto
1. Clone o repositório:
   ```bash
   git clone [https://github.com/PedrinSX77/Lista-de-Tarefas](https://github.com/PedrinSX77/Lista-de-Tarefas)

2. Abra o arquivo index.html em qualquer navegador moderno.

2.1 Teste de Estresse (Debug)
Para validar o sistema de segurança da v1.3, você pode forçar um erro de memória no console (F12):

try {
    const lixo = 'X'.repeat(10 * 1024 * 1024); 
    localStorage.setItem('teste', lixo);
} catch (e) {
    mostrarPopupErro(); // O popup da v1.3 aparecerá na tela!
}

Desenvolvido com 💜 por PedrinSx777
