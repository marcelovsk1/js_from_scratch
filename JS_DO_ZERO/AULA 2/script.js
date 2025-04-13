function adicionarTarefa() {
    const mensagem = "Tarefa adicionada com sucesso!";

    const inputTarefa = document.getElementById("inputTarefa")
    const tarefa = inputTarefa.value.trim();

        document.getElementById("mensagem").textContent = mensagem;
        setTimeout(() => {
            document.getElementById("mensagem").textContent = "";
        }, 3000);

    const listaTarefas = document.getElementById("listaTarefas");
    const novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;
        if (tarefa === "") {
            document.getElementById("mensagem").textContent = "Por favor, digite uma tarefa!";
        } else {
            listaTarefas.appendChild(novaTarefa);
            inputTarefa.value = "";
        }
  }