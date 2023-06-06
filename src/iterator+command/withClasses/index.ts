import { OrderCommand } from './command';
import { UserCollection } from './iterator';

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

export class App {
  users: UserCollection;

  constructor(users: UserCollection) {
    this.users = users;
  }

  sortUsers(command: OrderCommand): UserCollection {
    this.users = command.execute(this.users);

    return this.users;
  }
}
