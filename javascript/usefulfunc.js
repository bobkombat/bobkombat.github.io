import {length1, length2, array, arr1, arr2} from './main.js'

export function setNeighbor(node) {
  const listOfNeighbor = [];
  let x = length2 - 1;
  let y = length1 - 1;
  // let bool = arr1[Math.floor(Math.random() * length1)].childNodes[[]];
  // console.log(node);
  // console.log(node['wall']);
  if (node.x + 1 <= x) {
    // console.log(!array[node.y][node.x+1]['wall']);
    if (!array[node.y][node.x+1]['wall'])
      listOfNeighbor.push(array[node.y][node.x + 1]);
  }
  if (node.x - 1 >= 0) {
    // console.log(!array[node.y][node.x-1]['wall']);
    if (!array[node.y][node.x-1]['wall'])
      listOfNeighbor.push(array[node.y][node.x - 1]);
  }

  if (node.y + 1 <= y)
  {
    // console.log(!array[node.y + 1][node.x]['wall']);
    if (!array[node.y + 1][node.x]['wall'])
      listOfNeighbor.push(array[node.y + 1][node.x]);
  }
  if (node.y - 1 >= 0)
  {
    // console.log(!array[node.y - 1][node.x]['wall']);
    if (!array[node.y - 1][node.x]['wall'])
      listOfNeighbor.push(array[node.y - 1][node.x]);
  }

  // if (node.y + 1 <= y && node.x + 1 <= x)
  // {
  //   console.log(!array[node.y + 1][node.x+1]['wall']);
  //   if (!array[node.y + 1][node.x + 1]['wall'])
  //     listOfNeighbor.push(array[node.y + 1][node.x + 1]);
  // }
  // if (node.y - 1 >= 0 && node.x + 1 <= x)
  // {
  //   console.log(!array[node.y-1][node.x+1]['wall']);
  //   if (!array[node.y - 1][node.x + 1]['wall'])
  //     listOfNeighbor.push(array[node.y - 1][node.x + 1]);
  // }
  // if (node.y + 1 <= y && node.x - 1 >= 0)
  // {
  //   console.log(!array[node.y + 1][node.x -1]['wall']);
  //   if (!array[node.y + 1][node.x - 1]['wall'])
  //     listOfNeighbor.push(array[node.y + 1][node.x - 1]);
  // }
  // if (node.y - 1 >= 0 && node.x - 1 >= 0)
  // {
  //   console.log(!array[node.y - 1][node.x -1]['wall']);
  //   if (!array[node.y - 1][node.x - 1]['wall'])
  //     listOfNeighbor.push(array[node.y - 1][node.x - 1]);
  // }

  return listOfNeighbor;
};

export function heuristic(x1, y1, x2, y2) {
  // EUCLID
  let x = Math.sqrt((x1 - x2) * (x1 - x2) +  (y1 - y2) * (y1 - y2));

  //MANHATTAN
  // let x = Math.abs(x1 - x2) + Math.abs(y1 - y2);
  return x;
};

export function distG(current, neighbor)
{
  return current['g'] + neighbor['g'];
};

export function compareNeighbor(neighbor, openList)
{
  let x1 = neighbor['x'];
  let y1 = neighbor['y'];
  for (let i = 0; i < openList.length; i++)
  {
    let [x2, y2] = [openList['x'], openList['y']];
    if (x1 == x2 && y1 == y2)
      return false;
  }
  return true;
}


export function changeColor(current)
{
  arr1[current['y']].childNodes[current['x']].style.background = "#7FDEEC";
  return;
}
