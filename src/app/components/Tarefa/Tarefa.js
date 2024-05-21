import styles from "./tarefa.module.css"
import { useState } from "react";
import { deleteTarefa, updateTarefa } from "@/app/utils/api"


export default function Tarefa({id, titulo, selected, fetchData}) {
    const [selectedState, setSelectedState] = useState(selected);

    const changeState = async () => {
        setSelectedState(!selectedState)
        await updateTarefa(!selectedState, id);
    }

    const deleteHandler = async () => {
        await deleteTarefa(id);
        fetchData();
    }

    return (
        <section className={styles.tarefaContainer} key={id}>
            <div className={styles.tarefaInfo}>
                <input type="checkbox" checked={selectedState} onChange={(e) => changeState()}/>
                <p>{titulo}</p>
            </div>
            <div className={styles.tarefaButton} onClick={deleteHandler}>
                <img className={styles.tarefaButtonImg} src="https://super.so/icon/dark/trash-2.svg"/>
            </div>
        </section>
    );
}