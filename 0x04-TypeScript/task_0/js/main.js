var Student1 = { firstName: "Tammie", lastName: "Lawson", age: 22, location: "Califonia" };
var Student2 = { firstName: "Mark", lastName: "ken", age: 30, location: "Newyork" };
var studentsList = [Student1, Student2];
// let Table = document.createElement("table");
// let tableHeader = document.createElement("thead")
// let tableBody = document.createElement("tbody")
studentsList.forEach(function (data) {
    console.log(data.firstName);
});
