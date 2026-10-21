const Gameboard = (() => {
  const board = Array(9).fill("");

  const getBoard = () => [...board];

  const placeMark = (index, mark) => {
    if (index < 0 || index > 8 || board[index] !== "") return false;
    board[index] = mark;
    return true;
  };

  const reset = () => board.fill("");

  return { getBoard, placeMark, reset };
})();

const createPlayer = (name, mark) => ({ name, mark });