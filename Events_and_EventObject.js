console.log("Good Morning India");

document.getElementById('heading').addEventListener('click',function(e){
    console.log("You have clicked the heading");
    // location.href='//codewithharry.com';
    let variable;
    variable=e.target;
    variable=e.target.className;
    variable=e.target.classList;
    variable=e.target.id;
    variable=e.offsetX;
    variable=e.offsetY;
    console.log(variable);
});