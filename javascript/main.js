import {aStar} from './astar.js';
function setGrid() {
  //CREATE THE DIV GRID;
  for (let i = 0; i < 30; i++)
  {
    var div1 = document.createElement("div");
    div1.id = "test3";
    div1.className = "test3";
    document.getElementById("test2").appendChild(div1);
    for (let j = 0; j < 90; j++)
    {
      var div2 = document.createElement("div");
      div2.className = "test4";
      var set = document.querySelectorAll("#test3");
      document.getElementsByClassName("test3")[i].appendChild(div2);

    }
  }
}
setGrid();

//CLEAR GRID
function clearGrid() {
  for (let i = 0; i < 30; i++)
  {
    for (let j = 0; j < 90; j++)
    {
      arr1[i].childNodes[j].style.background = "";
    }
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
var numSet = 1;
function setStart() {
  if (numSet != 0) {
    clearGrid();
    numSet = 1;
  }

  arr1[Math.floor(Math.random() * length1)].childNodes[[Math.floor(Math.random() * length2)]].style.background = "lime";
  arr1[Math.floor(Math.random() * length1)].childNodes[[Math.floor(Math.random() * length2)]].style.background = "red";
};
const buttonStart = document.getElementById('start');
setStart();

buttonStart.addEventListener('click', function() {
  numSet++;
  setStart();
  // console.log(numSet);
});

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

// RANDOMIZE WALL
const randWall = document.getElementById('random');
let randCount = 0;
function randomize() {
  if (randCount != 0)
  {
    clearGrid();
    setStart();
  }
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
}
randWall.addEventListener('click', function() {
  randomize();
  randCount++;
})

const clearNode = document.getElementById('clear')
clearNode.addEventListener('click', function() {
  clearGrid();
  setStart();
});


// OBJECT ARRAY
var startIndex;
var endIndex;
function arraySet() {
  console.log(array.length, length2, length1, arr1, arr2);
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
}

arraySet()
console.log(startIndex, endIndex);
array[0][1]['f'] = 0;
var start = array[startIndex[0]][startIndex[1]];
var end = array[endIndex[0]][endIndex[1]];

const visual = document.getElementById('call');
visual.addEventListener('click', function() {
  arraySet();
  start = array[startIndex[0]][startIndex[1]];
  end = array[endIndex[0]][endIndex[1]]
  console.log(start, end);
  console.log(aStar(start, end))

})

export {arr1, listArr1, arr2, length2, length1, array, start, end};
