import {FormEvent} from "react";
import styles from "./CellIsTakenModal.module.css"


interface CellIsTakenModalProps {
    onOk: () => void;
}

const CellIsTakenModal = (cellIsTakenModalProps: CellIsTakenModalProps) => {


    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        cellIsTakenModalProps.onOk()
    }

    return (
        <form onSubmit={submitHandler}>
            <dialog className={styles.dialog}>
                <div className={styles.modal_content}>
                    <p className={styles.h2_center}>Cell is taken, choose another one</p>
                    <div className={styles.center}>
                        <button type="submit" className={styles.button}>OK</button>
                    </div>
                </div>
            </dialog>
        </form>
    )
}
export default CellIsTakenModal

