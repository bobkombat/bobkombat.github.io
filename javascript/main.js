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
