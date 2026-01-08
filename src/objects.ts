type Biscuit={
    name:string,
    type:string | number
}
type Biscuit2={
    name:string,
    age:number
}

type Biscuit3=Biscuit & Biscuit2

const biscuit:Biscuit3={
  age:22,
  name:"sandeep",
  type:"chocolate"
}

// duck type
// if it looks like duck and quacks like duck then it is duck

type Cup={name:string}
let cup :Cup={name:"cup"}


let cups={
    name:"cup",
    age:22
}
cup=cups





//divide ing data type
type user={
    name:string,
    age:number}

    type Address ={
        city:string,
        state:string
    }

    type Orders={
        id:number,
        user:user,
        address:Address[]
    }