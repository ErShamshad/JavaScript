console.log('Good Morning India');

/*You have to create a div and inject it into the page which contain a heading.
Whenever someone clicks on the div, it should be converted into an editable item.
Whenever user clicks away save(blur). Save the note into the local storage.  */
let heading=document.createElement("h1");
heading.className='heading';
heading.id='heading';
heading.innerHTML='This is the main heading.';
let body=document.body;
body.append(heading);
let div=document.createElement('div');
div.className='createdClass';
div.id='createdId';
div.innerHTML='This is an editable div.';
body.append(div);
console.log(body);

let listen=document.getElementById('createdId');
listen.addEventListener('click',function(element){
    element.target.contentEditable="true";
});

listen.addEventListener('blur', function(element){
    localStorage.setItem('edited',document.getElementById('createdId').innerHTML);
})
