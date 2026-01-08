const ratings :string[]=["1","2","3","4","5"]

const Names:string[]=["sandeep","reddy","sandeep","reddy"]

const Area:Array<string>=["sandeep","reddy","sandeep","reddy"]

type User={name:string,age:number}

const users:User[]=[
{name:"sandeep",age:22},{name:"reddy",age:22},
{name:"sandeep",age:22},{name:"reddy",age:22}
]



const double :number[][]=[
    [1,2,3],
    [1,2,3],
 
]

//tuples

const person:[string,number,string]=[ "sandeep",22,"reddy"]
const user: readonly [string,number,string?]=[ "sandeep",22]


//named tuples
const item:[name:string,price:number]=[ "sandeep",22]



// enum


enum Status{
    Pending,
    Rejected,
    Fulfilled
}

let moveMoment=Status.Pending