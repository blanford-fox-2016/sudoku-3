"use strict"

var fs = require('fs')
var SudokuSolver = require('sudoku-solver')

var sudoku_problem = fs.readFileSync('set-04_peter-norvig_11-hardest-puzzles.txt','utf-8')
.split('\n')[0]

SudokuSolver.solve({
    problem: sudoku_problem
  , style: true
  , initial: true
}).printSolution();
