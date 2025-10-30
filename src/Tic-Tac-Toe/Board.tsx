import "./styles.css"
import type { SquareProps, BoardProps } from "./interfase"



const Square = ({ val, onSquareClick }: SquareProps) => {
  return <button className="square" onClick={onSquareClick} >{val}</button>
}

export const Board = ({ xIsNext, squares, onPlay, onClickSquare, status }: BoardProps) => {
  
  
  return (
    <>
      <h1>{status}</h1>
      <div className="board-row">
        <Square val={squares[0]} onSquareClick={() => onClickSquare(0,squares,onPlay)} />
        <Square val={squares[1]} onSquareClick={() => onClickSquare(1,squares,onPlay)} />
        <Square val={squares[2]} onSquareClick={() => onClickSquare(2,squares,onPlay)} />

      </div>
      <div className="board-row">
        <Square val={squares[3]} onSquareClick={() => onClickSquare(3,squares,onPlay)} />
        <Square val={squares[4]} onSquareClick={() => onClickSquare(4,squares,onPlay)} />
        <Square val={squares[5]} onSquareClick={() => onClickSquare(5,squares,onPlay)} />

      </div>
      <div className="board-row">
        <Square val={squares[6]} onSquareClick={() => onClickSquare(6,squares,onPlay)} />
        <Square val={squares[7]} onSquareClick={() => onClickSquare(7,squares,onPlay)} />
        <Square val={squares[8]} onSquareClick={() => onClickSquare(8,squares,onPlay)} />
      </div>
    </>
  );
}

