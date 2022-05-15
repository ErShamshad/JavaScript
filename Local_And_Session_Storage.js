console.log("Good Morning India");

let impArray=['Adrak','Pyaz','Bhindi'];
localStorage.setItem('Name','Shamshad');
localStorage.setItem('Name2','Shreya');
localStorage.setItem('Sabzi',JSON.stringify(impArray));

let name=localStorage.getItem('Name');
let name2=localStorage.getItem('Name2');
let sabzi=JSON.parse(localStorage.getItem('Sabzi'));
console.log(name);
console.log(name2);
console.log(sabzi);

sessionStorage.setItem('sessionName','sShamshad');
sessionStorage.setItem('sessionName2','sShreya');
sessionStorage.setItem('sessionSabzi',JSON.stringify(impArray));

