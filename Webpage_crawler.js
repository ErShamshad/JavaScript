// you have to create a variable which is a string containing the text which is a link you are interested in

// you have to fetch all the links from a given page which contain this text



let links= document.links;
let text= 'JavaScript';

Array.from(links).forEach(function(element){
    if(element.include(text)){
        console.log(element);
    }
});