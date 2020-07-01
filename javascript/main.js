console.log("hello World");
console.log(`____________`)
console.log('woidbiowd')
document.body.id = "#wakwaw";
console.log(document.body.id);

console.log(document.scripts[0]);

var x = document.getElementById("#wakwaw")
console.log(x);
var para = document.createElement("P");
para.innerText = "lmao";
document.body.appendChild(para);

var list = [...Array(5).keys()];

for (let i = 0; i < list.length; i++)
{
  var para = document.createElement("P");
  para.innerText = list[i];
  document.body.appendChild(para);
}

var z = document.querySelector('body');
console.log(z);


var div = document.getElementsByTagName('p')
console.log(div);

console.log(div.length);
console.log(typeof div);
div[1].style.background = 'blue';
//console.log(div[0].textContent);

for (let i = 0; i < 10; i++)
{
  let div1 = document.createElement("div");
  div1.className = "test3";
  let x = document.getElementsByClassName('test2');
  document.body.appendChild(div1);
  for (let j = 0; j < 20; j++)
  {
    let div2 = document.createElement("div");
    div2.className = "test4";
    let z = document.getElementsByClassName('test3');
    document.body.appendChild(div2);
  }
}

var flex = document.getElementsByClassName('test4')
console.log(flex);
