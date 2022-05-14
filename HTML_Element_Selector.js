console.log("Welcome to tutorial on HTML Element Selector.");
let element=document.getElementById('myfirst');

// SINGLE ELEMENT SELECTOR


// element=element.className;
// element=element.childNodes;
// element.element.parentNode;
element.style.color='red';
element.innerText='Shamshad is a classy boy';
element.innerHTML='<b>Shamshad is a classy boy</b>';
// console.log(element.innerText);

let sel=document.querySelector('#myfirst');
sel=document.querySelector('.child');
sel=document.querySelector('div');
sel.style.color='green';
console.log(sel);

//MULTIPLE ELEMENT SELECTOR;

let elems=document.getElementsByClassName('child');
elems=document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'));

elems=document.getElementsByTagName('div');
Array.from(elems).forEach(function(element){
    console.log(element);
    element.style.color='blue';
})
console.log(elems);