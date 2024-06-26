import type { SudokuGrid } from "@/types/sudokuTypes";
import { isSudokuNumber } from "./sudokuHelpers";

export const returnCorrectSudoku = (grid: SudokuGrid): SudokuGrid => {
	if (!solveSudoku(grid)) {
		throw new Error("not solvable");
	}
	return grid;
};

export const solveSudoku = (grid: SudokuGrid): boolean => {
	const firstEmptyCoordinates = findFirstEmptyCoordinates(grid);
	if (!firstEmptyCoordinates) return true;
	const [row, col] = firstEmptyCoordinates;

	for (let i = 1; i < 10; i++) {
		if (isAssignable(grid, row, col, i) && isSudokuNumber(i)) {
			grid[row][col].value = i;
			if (solveSudoku(grid)) {
				return true;
			}
			grid[row][col].value = null;
		}
	}
	return false;
};

const findFirstEmptyCoordinates = (
	grid: SudokuGrid,
): [number, number] | null => {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j].value === null) {
				return [i, j];
			}
		}
	}
	return null; // return null if no empty cell is found
};

const isAssignable = (
	grid: SudokuGrid,
	row: number,
	col: number,
	num: number,
): boolean => {
	for (let x = 0; x < 9; x++) {
		if (grid[row][x].value === num || grid[x][col].value === num) {
			return false;
		}
	}

	const startRow = row - (row % 3);
	const startCol = col - (col % 3);
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (grid[i + startRow][j + startCol].value === num) {
				return false;
			}
		}
	}

	return true;
};
