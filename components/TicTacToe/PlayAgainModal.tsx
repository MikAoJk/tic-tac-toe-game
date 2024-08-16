import {FormEvent} from "react";
import styles from "./PlayAgainModal.module.css"


interface PlayAgainModalProps {
    winnerText: string;
    onPlayAgain: () => void;
}

const PlayAgainModal = (playAgainModalProps: PlayAgainModalProps) => {


    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        playAgainModalProps.onPlayAgain()
    }

    return (
        <form onSubmit={submitHandler}>
            <dialog className={styles.dialog}>
                <div className={styles.modal_content}>
                    <p className={styles.h2_center}>{playAgainModalProps.winnerText}</p>
                    <div className={styles.center}>
                        <button type="submit" className={styles.button}>Play Again</button>
                    </div>
                </div>
            </dialog>
        </form>
    )
}
export default PlayAgainModal

