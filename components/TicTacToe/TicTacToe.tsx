import {useEffect, useState} from "react";
import styles from "./TicTacToe.module.css"
import Board from "./Board/Board";


const TicTacToe = () => {

    const [isCPUNext, setIsCPUNext] = useState(false);
    const [winner, setWinner] = useState("");
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

    const [cellAlreadyTaken, setCellAlreadyTaken] = useState(false);

    const players = {
        CPU: {
            SYM: "O",
            NAME: "CPU",
        },
        HUMAN: {
            SYM: "X",
            NAME: "You",
        },
    };


    function playFn(arrayIndex: number, index: number) {
        if (isCPUNext) return;
        if (winner) return;
        if (!cellIsEmpty(arrayIndex, index)) {
            setCellAlreadyTaken(true)
        } else {
            setCellAlreadyTaken(false)
            board[arrayIndex][index] = players?.HUMAN?.SYM;
            setBoard((board) => [...board]);
            checkWinner();
            setIsCPUNext(true);
        }
    }


    const cellIsEmpty = (arrayIndex: number, index: number) => {
        return board[arrayIndex][index] === "";
    }


    useEffect(() => {
        if (winner) return;
        if (isCPUNext) {
            cPUPlay();
        }
    },);


    function sleep(milliseconds: number) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    function cPUPlay() {
        if (winner) return;
        sleep(100);

        const cPUMove = getCPUTurn();

        board[cPUMove.arrayIndex]
            [cPUMove.index] = players?.CPU?.SYM;

        setBoard((board) => [...board]);
        checkWinner();
        setIsCPUNext(false);
    }

    function getCPUTurn() {
        const emptyIndexes: any[] = [];
        board.forEach((row, arrayIndex) => {
            row.forEach((cell, index) => {
                if (cell === "") {
                    emptyIndexes.push({arrayIndex, index});
                }
            });
        });
        const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
        return emptyIndexes[randomIndex];
    }

    function checkWinner() {
        // check same row
        for (let index = 0; index < board.length; index++) {
            const row = board[index];
            if (row.every((cell) => cell === players?.CPU?.SYM)) {
                setWinner(players?.CPU?.NAME);
                return;
            } else if (row.every((cell) => cell === players?.HUMAN?.SYM)) {
                setWinner(players?.HUMAN?.NAME);
                return;
            }
        }

        // check same column
        for (let i = 0; i < 3; i++) {
            const column = board.map((row) => row[i]);
            if (column.every((cell) => cell === players?.CPU?.SYM)) {
                setWinner(players?.CPU?.NAME);
                return;
            } else if (column.every((cell) => cell === players?.HUMAN?.SYM)) {
                setWinner(players?.HUMAN?.NAME);
                return;
            }
        }

        // check same diagonal
        const diagonal1 = [board[0]
            [0], board[1]
            [1], board[2]
            [2]]
        ;
        const diagonal2 = [board[0]
            [2], board[1]
            [1], board[2]
            [0]]
        ;
        if (diagonal1.every((cell) => cell === players?.CPU?.SYM)) {
            setWinner(players?.CPU?.NAME);
            return;
        } else if (diagonal1.every((cell) => cell === players?.HUMAN?.SYM)) {
            setWinner(players?.HUMAN?.NAME);
            return;
        } else if (diagonal2.every((cell) => cell === players?.CPU?.SYM)) {
            setWinner(players?.CPU?.NAME);
            return;
        } else if (diagonal2.every((cell) => cell === players?.HUMAN?.SYM)) {
            setWinner(players?.HUMAN?.NAME);
            return;
        } else if (board.flat().every((cell) => cell !== "")) {
            setWinner("draw");
            return;
        } else {
            setWinner("");
            return;

        }
    }

    function displayWinner() {
        if (winner === "draw") {
            return "It's a draw!";
        } else if (winner !== "") {
            return `${winner} won!`;
        }
    }

    function displayTurn() {
        if (isCPUNext) {
            return "CPU's turn";
        } else {
            return "Your turn";
        }
    }

    function resetGame() {
        setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]);
        setWinner('');
        setIsCPUNext(false);
        setCellAlreadyTaken(false)
    }

    return (
        <div>
            {cellAlreadyTaken && <h2 className={styles.h2_center}> Cell is already taken, choosen a different one</h2>}
            {winner && <h2 className={styles.h2_center}> {displayWinner()} </h2>}
            {!winner && <h2 className={styles.h2_center}> {displayTurn()} </h2>}
            <Board playFn={playFn} board={board}/>
            {winner && (
                <button className={styles.video_game_button} onClick={resetGame}>
                    Play Again
                </button>
            )}
        </div>
    )
}


export default TicTacToe