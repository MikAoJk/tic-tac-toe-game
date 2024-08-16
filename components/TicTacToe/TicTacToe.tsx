import {useEffect, useState} from "react";
import styles from "./TicTacToe.module.css"
import Board from "./Board/Board";
import CellIsTakenModal from "./CellIsTakenModal";
import PlayAgainModal from "./PlayAgainModal";


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


    const playFn = (arrayIndex: number, index: number) => {
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
        return board[arrayIndex][index] === ""
    }


    useEffect(() => {
        if (winner) return;
        if (isCPUNext) {
            cPUPlay();
        }
    },);


    const sleep = (milliseconds: number) => {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    const cPUPlay = () => {
        if (winner) return;
        sleep(100);

        const cPUMove = getCPUTurn();

        board[cPUMove.arrayIndex]
            [cPUMove.index] = players?.CPU?.SYM;

        setBoard((board) => [...board]);
        checkWinner();
        setIsCPUNext(false);
    }

    const getCPUTurn = () => {
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

    const checkWinner = () => {
        // check on same row
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

        // check on same column
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

        // check on same diagonal
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

    const displayWinner = () => {
        if (winner === "draw") {
            return "It's a draw!";
        } else if (winner !== "") {
            return `${winner} won!`;
        }
    }

    const displayTurn = () => {
        if (isCPUNext) {
            return "CPU's turn";
        } else {
            return "Your turn";
        }
    }

    const resetGame = () => {
        setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]);
        setWinner('');
        setIsCPUNext(false);
        setCellAlreadyTaken(false)
    }

    const okHandler = () => {
        setCellAlreadyTaken(false)
    }

    return (
        <div className={styles.main}>
            <Board playFn={playFn} board={board}/>
            {winner && <PlayAgainModal winnerText={displayWinner()!} onPlayAgain={resetGame}/>}
            {!winner && <h2 className={styles.h2_center}> {displayTurn()} </h2>}
            {cellAlreadyTaken && <CellIsTakenModal onOk={okHandler}/>}
        </div>
    )
}


export default TicTacToe
