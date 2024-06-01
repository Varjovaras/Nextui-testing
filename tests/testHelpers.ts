import type { SudokuGrid } from "@/types/sudokuTypes";

//test helper
export const newCompletedSudokuWithOneMissing = (): SudokuGrid => {
	const sudoku: SudokuGrid = [
		[1, 9, 4, 8, 6, 5, 2, 3, 7],
		[7, 3, 5, 4, 1, 2, 9, 6, 8],
		[8, 6, 2, 3, 9, 7, 1, 4, 5],
		[9, 2, 1, 7, 4, 8, 3, 5, 6],
		[6, 7, 8, 5, 3, 1, 4, 2, 9],
		[4, 5, 3, 9, 2, 6, 8, 7, 1],
		[3, 8, 9, 6, 5, 4, 7, 1, 2],
		[2, 4, 6, 1, 7, 9, 5, 8, 3],
		[5, 1, 7, 2, 8, 3, 6, 9, 4],
	];

	return sudoku;
};
//test helper
export const newCompletedSudokuWithLotMissing = (): SudokuGrid => {
	const sudoku: SudokuGrid = [
		[null, 9, null, null, null, 5, null, null, 7],
		[7, null, null, null, 1, null, 9, null, null],
		[null, null, null, null, 9, null, null, 4, 5],
		[9, null, null, 7, null, null, null, null, null],
		[null, 7, null, null, 3, 1, null, 2, null],
		[null, null, 3, null, 2, null, null, null, 1],
		[3, null, null, null, null, 4, 7, null, null],
		[null, null, 6, 1, null, null, null, null, 3],
		[null, null, null, null, null, null, 6, null, null],
	];
	return sudoku;
};
