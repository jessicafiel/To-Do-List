var itemLista = document.getElementById("ul");

function addItem() {
    if (document.getElementById("itemLista").value !== "") {
        var tarefa = document.createElement("li");
        tarefa.classList.add("li");
        tarefa.innerHTML = document.getElementById("itemLista").value;
        itemLista.appendChild(tarefa);
        
        var remover = document.createElement("button");
        remover.innerHTML = "Remover";
        remover.classList.add("button_remove");
        
        remover.onclick = function() {
            itemLista.removeChild(tarefa);
            itemLista.removeChild(remover);
        }
        itemLista.appendChild(remover);
        
        document.getElementById("itemLista").value = "";
    }
}
