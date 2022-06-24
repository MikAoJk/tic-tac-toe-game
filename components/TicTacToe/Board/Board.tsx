import styles from "./Board.module.css";

interface BoardProps {
    board: (string[][])
    playFn: (arrayIndex: number, index: number) => void;
}


const Board = (boardProps: BoardProps) => {

    return (
            <div className={styles.container}>
                <div className={styles.col}>
                    <span onClick={() => boardProps.playFn(0, 0)}
                          className={styles.cell}>{boardProps.board[0][0]}</span>
                    <span onClick={() => boardProps.playFn(0, 1)}
                          className={styles.cell}> {boardProps.board[0][1]}</span>
                    <span onClick={() => boardProps.playFn(0, 2)}
                          className={styles.cell}>{boardProps.board[0][2]}</span>
                </div>
                <div className={styles.col}>
                    <span onClick={() => boardProps.playFn(1, 0)}
                          className={styles.cell}>{boardProps.board[1][0]}</span>
                    <span onClick={() => boardProps.playFn(1, 1)}
                          className={styles.cell}>{boardProps.board[1][1]}</span>
                    <span onClick={() => boardProps.playFn(1, 2)}
                          className={styles.cell}>{boardProps.board[1][2]}</span>
                </div>
                <div className={styles.col}>
                    <span onClick={() => boardProps.playFn(2, 0)}
                          className={styles.cell}>{boardProps.board[2][0]}</span>
                    <span onClick={() => boardProps.playFn(2, 1)}
                          className={styles.cell}>{boardProps.board[2][1]}</span>
                    <span onClick={() => boardProps.playFn(2, 2)}
                          className={styles.cell}>{boardProps.board[2][2]}</span>
                </div>
            </div>
    )
}

export default Board