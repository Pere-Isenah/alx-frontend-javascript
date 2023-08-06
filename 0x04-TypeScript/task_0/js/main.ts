interface Student {
    firstName : string;
    lastName : string;
    age : number;
    location : string;
}

const Student1: Student = { firstName: "Tammie", lastName : "Lawson", age: 22, location: "Califonia" }
const Student2: Student = { firstName: "Mark", lastName : "ken", age: 30, location: "Newyork" }

const studentsList: any[] = [Student1,Student2]

let Table = document.createElement("table");
let tableHeader = document.createElement("thead")
let tableBody = document.createElement("tbody")

studentsList.forEach((data) =>{
    console.log(data)
});

