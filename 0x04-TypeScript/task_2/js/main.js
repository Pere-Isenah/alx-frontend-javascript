var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (employee instanceof Director) {
        console.log(employee.workDirectorTasks());
    }
    else if (employee instanceof Teacher) {
        console.log(employee.workTeacherTasks());
    }
}
function teachClass(todayClass) {
    if (todayClass === "Math") {
        console.log("Teaching Math");
    }
    else if (todayClass === "History") {
        console.log("Teaching History");
    }
}
teachClass('Math');
var r = teachClass('History');
console.log(r);
