interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak() : string
    workDirectorTasks() : string;
}

interface TeacherInterface{
    workFromHome() : string
    getCoffeeBreak() : string
    workTeacherTasks() : string
}

class Director implements DirectorInterface {

    workFromHome() {
        return "Working from home"
    }

    getCoffeeBreak(){
        return "Getting a coffee break"
    }

    workDirectorTasks(){
        return "Getting to director tasks"
    }
}


class Teacher implements TeacherInterface{
    workFromHome(){
        return "Cannot work from home"
    }

    getCoffeeBreak(){
        return "Cannot have a break"
    }

    workTeacherTasks(){
        return "Getting to work"
    }
}

function createEmployee(salary: string | number){
    if (typeof salary === "number" && salary < 500){
        return new Teacher();
    } else{
        return new Director();
    }
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Teacher | Director){
	if(employee instanceof Director) {
		console.log(employee.workDirectorTasks())} else if (employee instanceof Teacher) {
	console.log(employee.workTeacherTasks());
}}

type Subjects = "Math" | "History" ;

function teachClass(todayClass: Subjects){
	if(todayClass === "Math"){
		console.log("Teaching Math")
	} else if (todayClass ==="History"){
		 console.log("Teaching History")
	}
}


