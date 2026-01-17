type Tea ={
    name:string;
    age:number;
}

const tea:Tea={
    name:"sandeep",
    age:22
}

function displayTea(all:Tea){
    console.log(all)
}

displayTea(tea)

interface Chai {
    name:string,
    type:string | number
}

function inter(i:Chai):void{
    console.log(i,"i")
}


inter({name: "hello", type: "tea"})
