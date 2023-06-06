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

export class OrderByAgeAscCommand implements OrderCommand {
  execute(people: User[]): User[] {
    const result = [];
    const gen = iterateByAge(people);
    let current = gen.next().value;

    while (current) {
      result.push(current);
      current = gen.next().value;
    }

    return result;
  }
}

export function* iterateByAge(collection: User[]) {
  let index = 0;
  const sortedCollection = collection.sort((a, b) => a.age - b.age);

  while (sortedCollection[index]) {
    yield sortedCollection[index];
    index++;
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
