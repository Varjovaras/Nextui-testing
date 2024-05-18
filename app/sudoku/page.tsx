"use client";
import { title } from "@/components/primitives";
import { useState } from "react";
import { newCompletedSudoku, newSudoku as _newSudoku } from "./sudokuHelpers";

export default function DocsPage() {
  const [sudoku, _setSudoku] = useState(newCompletedSudoku());
  return (
    <section>
      <h1 className={title()}>Sudoku</h1>
      <div className="grid grid-cols-9">
        {sudoku.map((row, i) => {
          return (
            <div key={`${i.toString()}row`}>
              {row.map((cell, j) => {
                return (
                  <button className="border p-4" key={`${j.toString()}${j}`}>
                    {cell.value}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
