type hero ={
    name: string;
    aka:string;
};


function printObject(person:hero) {
    console.log(person);
}

printObject({
name:"Bruce Wayne",
aka: "Batman",

});