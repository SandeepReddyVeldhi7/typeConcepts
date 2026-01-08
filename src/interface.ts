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

interface Chai {
    name:string,
    type:string | number
}

function inter(i:Chai){
    console.log(i)
}



