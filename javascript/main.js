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
console.log(length1, length2);


//ARRAY
var array = new Array(length1);
for (let i = 0; i < length1; i++)
{
  array[i] = new Array(length2);
}


//start and end color;
arr1[Math.floor(Math.random() * length1)].childNodes[[Math.floor(Math.random() * length2)]].style.background = "lime";
arr1[Math.floor(Math.random() * length1)].childNodes[[Math.floor(Math.random() * length2)]].style.background = "red";

//NO WALL
for (let i = 0; i < length1; i++)
{
  for (let j = 0; j < length2; j++)
  {
    const x = arr1[i].childNodes[j].style.background.split(' ');
    let z = Math.floor(Math.random() * 0);
    if (z && x[0] !== "red" && x[0] !== "lime")
      arr1[i].childNodes[j].style.background = "#000B34";
  }
}

//RANDOMIZE WALL
for (let i = 0; i < length1; i++)
{
  for (let j = 0; j < length2; j++)
  {
    const x = arr1[i].childNodes[j].style.background.split(' ');
    let z = Math.floor(Math.random() * 2);
    if (z && x[0] !== "red" && x[0] !== "lime")
      arr1[i].childNodes[j].style.background = "#000B34";
  }
}

// OBJECT ARRAY
var startIndex;
var endIndex;
for (let i = 0; i < array.length; i++)
{
  for (let j = 0; j < length2; j++)
  {
    const obj = (x, y, status="", wall=false, f=0, g=0, h=0) => ({x, y, status, wall, f, g, h});
    const x = arr1[i].childNodes[j].style.background.split(' ');
    // console.log(x);
    if (x[0] == "lime")
    {
      startIndex = [i, j];
      array[i][j] = obj(j, i, "start", undefined, undefined, undefined, undefined);
    }
    else if (x[0] == "red")
    {
      endIndex = [i, j];
      array[i][j] = obj(j, i, "end", undefined, undefined, undefined, undefined);
    }
    else if (x.length == 8)
    {
      array[i][j] = obj(j, i, undefined, true, undefined, 0, undefined);
    }
    else
    {
      array[i][j] = obj(j, i, "", false, 0, 0, 0);
    }
  }
}

array[0][1]['f'] = 0;

var start = array[startIndex[0]][startIndex[1]];
var end = array[endIndex[0]][endIndex[1]];
console.log(start, end);
console.log(aStar(start, end))

export {arr1, listArr1, arr2, length2, length1, array, start, end};
