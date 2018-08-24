export function decorator() {
  const alex = new Developer({position: 'front-end', name: 'Alex'});
  console.log(alex.employeeInfo());
}

function department(obj: any) {
  return <T extends { new(...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      department = obj.department;
    };
  };
}

type Employee = { position: string, name: string };

@department({department: 'Front-end'})
class Developer {
  private employee: Employee;
  private department: string;

  constructor(employee: Employee) {
    this.employee = employee;
  }

  public employeeInfo(): string {
    return `Name: ${this.employee.name}, position: ${this.employee.position}, department: ${this.department}`;
  }
}

