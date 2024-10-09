function createstudent(firstname, lastname, studentID)
{
    return{
        firstname,
        lastname,
        studentID,

        write(){
            console.log(this.firstname, this.lastname, this.studentID)
        } 
    };
    
}

Student1 = createstudent("Mary", "Sue", 12345);
Student1.write();
Student2 = createstudent("John", "Doe", 54321);
Student2.write();
Student3 = createstudent("Bob", "Jones", 55555);
Student3.write();

function createCar(make,model,year)
{
    return{
        make,
        model,
        year,
        write(){
            console.log(this.make, this.model, this.year)
        }
    }
}

car1 = createCar("Ford", "Mustang", 2016);
car1.write();
car2 = createCar("Toyota", "Camry", 2014);
car2.write();
car3 = createCar("Lamborghini", "Gallardo", 2020);
car3.write();
