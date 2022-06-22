import type {NextPage} from 'next'
import Head from 'next/head'
import styles from "../styles/Home.module.css"
import TicTacToe from "./components/TicTacToe/TicTacToe";

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Tic Tac Toe game</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
                <style>
                    @import url(https://fonts.googleapis.com/css2?family=Indie+Flower);
                </style>
            </Head>

            <main className={styles.main}>
                <TicTacToe/>
            </main>
        </div>
    )
}

export default Home
