export class User {
  name: string;
  surname: string;
  age: number;
  children: number;

  constructor(name: string, surname: string, age: number, children: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.children = children;
  }
}

export interface OrderCommand {
  execute(people: User[]): User[];
}

export class OrderByNameAscCommand implements OrderCommand {
  execute(people: User[]): User[] {
    return people.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
}

export class OrderByNameDescCommand implements OrderCommand {
  execute(users: User[]): User[] {
    return users.slice().sort((a, b) => b.name.localeCompare(a.name));
  }
}

export class OrderByAgeAscCommand implements OrderCommand {
  execute(users: User[]): User[] {
    return users.slice().sort((a, b) => a.age - b.age);
  }
}

export class OrderByAgeDescCommand implements OrderCommand {
  execute(users: User[]): User[] {
    return users.slice().sort((a, b) => b.age - a.age);
  }
}

export class OrderByChildrenAscCommand implements OrderCommand {
  execute(users: User[]): User[] {
    return users.slice().sort((a, b) => a.children - b.children);
  }
}

export class OrderByChildrenDescCommand implements OrderCommand {
  execute(users: User[]): User[] {
    return users.slice().sort((a, b) => b.children - a.children);
  }
}

export class App {
  users: User[];

  constructor(users: User[]) {
    this.users = users;
  }

  sortUsers(command: OrderCommand): User[] {
    this.users = command.execute(this.users);

    return this.users;
  }
}
