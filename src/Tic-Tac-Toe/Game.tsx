import "./styles.css";
import { useGame } from "./useGame";
import { Board } from "./Board"



export const Game = () => {
    const { xIsNext,status,currentSquares,handlePlay,handleClick,moves} = useGame();
    
    return (
        <div>

            <div className="Game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                    onClickSquare={handleClick}
                    status={status}
                />
            </div>
            <div className="Game-infi"><p>{moves}</p></div>


        </div>
    )
}