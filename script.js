document.querySelector('#adicionar').onclick = function () {
  //Adicionando validação para input vazio
  if (document.querySelector('#nova-tarefa input').value.length == 0) {
    alert('Coloque uma Nova Tarefa')
  } else {
    document.querySelector("#tarefas").innerHTML += `
           <div class="tarefas">
           <span id="tarefa">
              ${document.querySelector("#nova-tarefa input").value}
           </span>
           <button class="delete">
              <ion-icon name="close-circle-outline"></ion-icon>
           </delete>
          </div>
      `;
            // Deletando uma tarefa atual
    let tarefa_atual = document.querySelectorAll(".delete");
    for (let item = 0; item < tarefa_atual.length; item++) {
      tarefa_atual[item].onclick = function () {
        this.parentNode.remove();
      }

    }
          // Riscando as tarefas
    let tarefas = document.querySelectorAll(".tarefas");
    for (let riscado = 0; riscado < tarefas.length; riscado++) {
      tarefas[riscado].onclick = function () {
        this.classList.toggle('completado');
      }
    }

    // Limpando o input após inserir
    document.querySelector("#nova-tarefa input").value = "";
    
  }



}

