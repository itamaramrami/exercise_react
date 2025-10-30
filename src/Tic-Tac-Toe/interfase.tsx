



export interface SquareProps {
  val: string | number | null;
  onSquareClick: () => void;
}

export interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (squares: (string | null)[]) => void;
  onClickSquare: (i: number, squares: (string | null)[], onPlay: (squares: (string | null)[]) => void) => void;
  status: string;
}