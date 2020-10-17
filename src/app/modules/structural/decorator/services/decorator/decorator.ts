export function decorator() {
  const alex = new Developer({position: 'front-end', name: 'Alex'});
  const str = alex.htmlElem('some string');
  console.log(alex.employeeInfo());
  console.log(str);
}

function department(obj: any) {
  return <T extends { new(...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      department = obj.department;
    };
  };
}

function tag(t: string): any {
  return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    const oldV = descriptor.value;
    descriptor.value = (txt: string) => {
      return `<${t}>${oldV(txt)}</${t}>`;
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

  @tag('p')
  htmlElem(innerTxt: string) {
    return innerTxt;
  }
}
