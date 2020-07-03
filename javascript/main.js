import {aStar} from './astar.js';
// console.log(x);

let test = document.getElementById("test2");

//CREATE THE DIV GRID;
// function setGrid(x, y) {};
for (let i = 0; i < 30; i++)
{
  let div1 = document.createElement("div");
  div1.id = "test3";
  div1.className = "test3";
  document.getElementById("test2").appendChild(div1);
  for (let j = 0; j < 90; j++)
  {
    let div2 = document.createElement("div");
    div2.className = "test4";
    let set = document.querySelectorAll("#test3");
    document.getElementsByClassName("test3")[i].appendChild(div2);
  }
}

// VAR FOR IMPORT
//array of row divs
const arr1 = document.querySelectorAll(".test3");
const listArr1 = new Array(...arr1);

//array of column divs
const arr2 = arr1[0].childNodes;

//length of each array
const length1 = arr1.length;
const length2 = arr2.length;

// // SET THE BACKGROUND COLOR
// for (let i = 0; i < length1; i++)
// {
//   for (let j = 0; j < length2; j++)
//   {
//     //if (j % 2)
//       //arr1[i].childNodes[j].style.background = "#d0d0d0";
//   }
// }


//ARRAY
var array = new Array(length1);
for (let i = 0; i < length1; i++)
{
  array[i] = new Array(length2);
}
// console.log(array[0]);

//start and end color;
arr2[0].style.background = "lime";
arr1[length1 - 1].childNodes[length2 - 1].style.background = "red";

//START, END VALUE
  //start
var startIndex;
for (let i = 0; i < length1; i++)
{
  for (let j = 0; j < length2; j++) {
    const x = arr1[i].childNodes[j].style.background.split(' ');
    if (x[0] == "lime") {
      startIndex = [i, j];
      break;
    }
  }
}
  //end
var endIndex;
for (let i = length1 - 1; i >= 0; i--)
{
  for (let j = length2 - 1; j >= 0; j--) {
    const x = arr1[i].childNodes[j].style.background.split(' ');
    if (x[0] == "red") {
      endIndex = [i, j];
      break;
    }
  }
}

// OBJECT ARRAY
for (let i = 0; i < array.length; i++)
{
  for (let j = 0; j < length2; j++)
  {
    const obj = (x, y, status="", wall=false, f=0, g=0, h=0) => ({x, y, status, wall, f, g, h});
    const x = arr1[i].childNodes[j].style.background.split(' ');
    if (x[0] == "lime")
    {
      array[i][j] = obj(j, i, "start", undefined, undefined, undefined, undefined);
    }
    else if (x[0] == "red")
    {
      array[i][j] = obj(j, i, "end", undefined, undefined, undefined, undefined);
    }
    else if (x[0] == "black")
    {
      array[i][j] = obj(j, i, undefined, true, undefined, undefined, undefined);
    }
    else
    {
      array[i][j] = obj(j, i, "", false, 0, 0, 0);
    }
  }
}
console.log(array[1][1], array[1][0]);
array[0][1]['f'] = 0;
console.log(array[0][1]);
console.log(array[startIndex[0]][startIndex[1]]);
var start = array[startIndex[0]][startIndex[1]];
var end = array[endIndex[0]][endIndex[1]];
console.log(start, end);
console.log(aStar(start, end))

export {arr1, listArr1, arr2, length2, length1, array, start, end};
