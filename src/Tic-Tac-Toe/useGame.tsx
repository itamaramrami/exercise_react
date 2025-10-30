import { useState } from "react";



export const useGame = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const handlePlay = (nextSquares: (string | null)[]) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
        
    }
    const handleClick = (i: number, currentSquares: (string | null)[], onPlay: (nextSquares: (string | null)[]) => void) => {
        if (currentSquares[i] || calculateWinner(currentSquares)) {
            return;
        }
        const nextSquares = currentSquares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares)
    }



    const calculateWinner = (squares: (string | null)[]): string | null => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const moves = history.map((squares, move) => {
            let description;
            if (move > 0) {
                description = 'Go to move ' + move;
            } else {
                description = 'Go to game start';
            }
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{description}</button>
                </li>
            );
        });


    const winner = calculateWinner(currentSquares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    }
    else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }


    const jumpTo = (nextMove: number) => {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }
    return {
        xIsNext,
        status,
        moves,
        currentSquares,
        handlePlay,
        handleClick,
        
    };






}

