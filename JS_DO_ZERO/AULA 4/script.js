
let tarefas = [];

function adicionarTarefa() {

    const mensagem = "Tarefa adicionada com sucesso!";
    const inputTarefa = document.getElementById("inputTarefa")
    const tarefa = inputTarefa.value.trim();

        document.getElementById("mensagem").textContent = mensagem;
        setTimeout(() => {
            document.getElementById("mensagem").textContent = "";
        }, 3000);

        if (tarefa === "") {
            const mensagemElement = document.getElementById("mensagem");
            mensagemElement.textContent = "Por favor, digite uma tarefa!";
            mensagemElement.style.color = "red";
        } else {
            tarefas.push(tarefa);
            exibirTarefas();
    }
}

function exibirTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    let i = 0
    // for (iterator, condition, increment/frequency)
    // i++ = i = i + 1
    for (i; i < tarefas.length; i++) {
        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];

        const botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"

        novaTarefa.appendChild(botaoRemover)
        listaTarefas.appendChild(novaTarefa);
    }
}