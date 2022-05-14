
console.log("Good morning India.");

let cont=document.querySelector('.no');
 cont=document.querySelector('.container');
// console.log(cont.childNodes);
// console.log(cont.children);

let nodeName=cont.childNodes[1].nodeName;
let nodeType=cont.childNodes[0].nodeType;
console.log(nodeName);
console.log(nodeType);

let container= document.querySelector('div.container');
console.log(container.children[1].children[0].children);