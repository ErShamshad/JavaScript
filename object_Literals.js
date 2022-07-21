console.log("This is a tutorial for object Literals");

let car={
    name:"MAruti 800",
    topSpeed:89,
    run:function(){
        console.log("CAr is running");
    }
}

console.log(car);

function GeneralCar(givenName, givenSpeed){
    this.name=givenName;
    this.topSpeed=givenSpeed;
    this.run=function(){
        console.log('${this.name} is running')
    }
}

car1= new GeneralCar('Nissan', 180);
 console.log(car1);