export function department(obj: any) {
  return <T extends { new(...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      department = obj.department;
    };
  };
}

type Employee = { position: string, name: string };

@department({department: 'Front-end'})
export class Developer {
  private employee: Employee;
  private department: string;

  constructor(employee: Employee) {
    this.employee = employee;
  }

  employeeInfo() {
    return `Name: ${this.employee.name}, position: ${this.employee.position}, department: ${this.department}`;
  }
}

