import {arr1, listArr1, arr2, length2, length1, array, start, end} from './main.js';
//arr1, listArr1, arr2, length2, length1;
let openSet = [];
let closedSet = [];


export function aStar(i, j) {
    this.start = 0;
    this.goal = 0;
    this.h = 0;
};

export function setCons(arr)
{
  for (let i = 0; i < length1; i++)
  {
    for (let j = 0; j < length2; j++)
      array[i][j] = new aStar();
  }
}
