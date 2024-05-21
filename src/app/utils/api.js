const LOCALHOST_URL = "http://localhost:8000/tarefas";

export async function getTarefas() {
    try {
        let response = await fetch(LOCALHOST_URL);
        let data = await response.json();
        return data;
    } catch(e) {
        console.log("Erro na função getTarefas");
    }
}

export async function createTarefas( titulo ) {
    try {
        const tarefa = JSON.stringify({ selected: false, titulo: titulo });
        let response = await fetch(LOCALHOST_URL, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: tarefa
        });
        let data = await response.json();
        return data;
    } catch (e) {
        console.log("Erro na função createTarefas");
    }
}

export async function updateTarefa(selected, id) {
    try {
        let tarefa = JSON.stringify({ selected: selected })
        let options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: tarefa
        }
        let response = await fetch(LOCALHOST_URL + "/" + id, options);
        let data = await response.json();
        return data;
    } catch (e) {
        console.log("Erro na função updateTarefa");
    }
}

export async function deleteTarefa(id) {
    try {
        let options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let response = await fetch(LOCALHOST_URL + "/" + id, options);
        let data = await response.json();
        return data;
    } catch (e) {
        console.log("Erro na função deleteTarefa");
    }
}