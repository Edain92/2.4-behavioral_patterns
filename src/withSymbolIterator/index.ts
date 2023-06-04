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
    return [...people].sort((a, b) => a.age - b.age);
  }
}

export class UserCollection implements Iterable<User> {
  users: User[];

  constructor(users: User[]) {
    this.users = users;
  }

  [Symbol.iterator](): Iterator<User> {
    let index = 0;
    const sortedUsers = [...this.users].sort((a, b) => a.age - b.age);

    return {
      next: () => {
        if (index < sortedUsers.length) {
          return { value: sortedUsers[index++], done: false };
        } else {
          return { value: null, done: true };
        }
      }
    };
  }
}

export class App {
  users: UserCollection;

  constructor(users: User[]) {
    this.users = new UserCollection(users);
  }

  sortUsers(command: OrderCommand): User[] {
    this.users.users = command.execute(this.users.users);

    return this.users.users;
  }
}
