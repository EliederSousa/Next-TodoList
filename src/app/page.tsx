"use client"
import styles from "./page.module.css";
import { useState, useEffect, Key } from "react";
import { getTarefas, createTarefas } from "@/app/utils/api";
import Tarefa from "./components/Tarefa/Tarefa"

export default function Home() {
  const [tarefas, setTarefas] = useState([]);
  const [tituloDaTarefa, setTituloDaTarefa] = useState("");

  const fetchData = async () => {
    let tarefas = await getTarefas();
    setTarefas(tarefas);
  }

  const createData = async () => {
    if ( tituloDaTarefa.length > 0 ) {
      let response = await createTarefas(tituloDaTarefa);
      fetchData();
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {/* Container principal */}
      <section className={styles.container}>

        {/* Título */}
        <h1 className={styles.h1}>TODO List</h1>

        {/* Container que abriga o input de texto, e o botao de + */}
        <div className={styles.inputContainer}>
          <input className={styles.inputAdd} 
            type="text"
            name="naosei"
            value={tituloDaTarefa}
            onChange={(e) => setTituloDaTarefa(e.target.value)}
          />

          <div className={styles.buttonAdd} onClick={createData}>
            <img className={styles.buttonAddImage} src="https://super.so/icon/dark/plus.svg"></img> 
          </div>
        </div>

        {/* Tarefas */}
        {
          (tarefas && tarefas.length > 0) ? (tarefas.map((tarefa) => <Tarefa key={tarefa.id} {...tarefa} fetchData={fetchData}/> )) : (<p>Sem tarefas!</p>)
        }
      </section>
    </>
  );
}
