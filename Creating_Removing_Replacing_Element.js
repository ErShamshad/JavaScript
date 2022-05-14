console.log("Good Morning India");

let element=document.createElement('li');
let text=document.createTextNode('I am a text Node');
element.appendChild(text);

// Add class name and id to li element
element.className='childul';
element.id='createdLi';
element.setAttribute('title','mytitle');
// element.innerText='Hello this is created by Shamshad';
// element.innerHTML='<b>Hello this is created by Shamshad</b>';
let ul=document.querySelector('ul.this');
ul.appendChild(element);
// console.log(element);
// console.log(ul);

let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode=document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);

let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));

myul.removeChild(document.getElementById('lui'));
let heading= document.createElement('h2');
heading.innerHTML='Go to CodeWithHarry.com';
let a=document.createElement('a');
a.href='//codewithharry.com';

a.appendChild(heading);
ul.appendChild(a);