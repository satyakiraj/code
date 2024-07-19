class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    display_annual_salary() {
      console.log(`Annual salary is $${this.salary * 12}`);
      return this.salary * 12; 
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    display_annual_salary() {
      let base_salary = super.display_annual_salary(); 
      let bonus = (10 / 100) * base_salary;
      let total_salary = base_salary + bonus;
      console.log(`Your salary is $${total_salary}`);
    }
  }
  
  const manager1 = new Manager("Mukesh", 7500, "Production");
  console.log(manager1.name);
  console.log(manager1.department);
  manager1.display_annual_salary(); 
  