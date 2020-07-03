import {arr1, listArr1, arr2, length2, length1, array, start, end} from './main.js';
import {setNeighbor, heuristic, distG, compareNeighbor, changeColor} from './usefulfunc.js';

// setTimeout(
//   requestAnimationFrame(() => {
// arr1[cameFrom[i]['y']].childNodes[cameFrom[i]['x']].classList.remove("faded-out")
// })
// , 500);
//arr1[cameFrom[i]['y']].childNodes[cameFrom[i]['x']].className += " faded-out";

export function reconstructPath(cameFrom, current)
{
  if (!cameFrom)
    return "NOT DONE!";
  console.log(cameFrom[0]);

  for (let i = cameFrom.length - 1; i >= 1; i--)
  {

    changeColor(cameFrom[i]);

  }
  arr1[current['y']].childNodes[current['x']].style.background = "red";
  arr1[cameFrom[0]['y']].childNodes[cameFrom[0]['x']].style.background = "lime";
  console.log("DONE!");
  return 'DONE!';
}

//REMOVE AN ELEMENT
export function remove(arr, current)
{
  for (let i = arr.length - 1; i >= 0; i--)
  {
    if (i == current)
      arr.splice(i, 1);
      return;
  }
}

// MAIN FUNCTION
export function aStar(start, goal)
{
  //CREATE NEW NODE

  const openList = [];
  const closeSet = [];
  openList.push(start);
  start['f'] = heuristic(goal['x'], goal['y'], start['x'], start['y']);

  while (openList.length > 0)
  {
    // console.log(openList[0], start, goal);
    let currentNodeIndex = 0;
    let currentNode = openList[0];
    for (let i = openList.length - 1; i >= 1; i--)
    {
      // arr1[openList[i]['y']].childNodes[openList[i]['x']].style.background = "#7FDEEC";
      if (openList[i].f < currentNode.f)
      {
        currentNodeIndex = i;
        currentNode = openList[i];
      }
    }
    if (currentNodeIndex != 0)
      arr1[currentNode['y']].childNodes[currentNode['x']].style.background = "cyan";
    if (currentNode.status == "end")
    {
      // console.log(closeSet);
      return reconstructPath(closeSet, currentNode);
    }

    // changeColor(currentNode);

    // console.log(openList, currentNode, currentNodeIndex);
    remove(openList, currentNodeIndex);

    const neighbor = setNeighbor(currentNode);
    console.log(currentNode, neighbor);
    for (let i = 0; i < neighbor.length; i++)
    {
      let tentGScore = currentNode['g']  + distG(currentNode, neighbor[i]);
      let gNeighbor = neighbor[i]['g'] + 1;
      // console.log(tentGScore, gNeighbor);
      if (tentGScore < gNeighbor)
      {
        if (compareNeighbor(currentNode, closeSet))
          closeSet.push(currentNode);
        neighbor[i]['g'] = tentGScore;
        neighbor[i]['f'] = neighbor[i]['g'] + heuristic(goal['x'], goal['y'], neighbor[i]['x'], neighbor[i]['y']);
        // console.log(neighbor[i]['f'], 'heuristic');
        // console.log(neighbor[i], openList[i]);
        // console.log(compareNeighbor(neighbor[i], openList));
        if (compareNeighbor(neighbor[i], openList))
        {
          openList.push(neighbor[i]);
        }

      }
      // console.log(openList[i]);
    }
    // console.log(openList);
  }
  // console.log(closeSet);
  return reconstructPath(false, false);
}
