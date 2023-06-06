import { User } from "../index";

export interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export class UserAgeIterator implements Iterator<User> {
  private collection: UserCollection = new UserCollection();
  private position: number = 0;
  private reverse: boolean = false;

  constructor(collection: UserCollection, reverse: boolean = false) {
    const sortedUsers = collection.getUsers().sort((a, b) => a.age - b.age);
    sortedUsers.forEach(user => this.collection.addUser(user));

    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public next(): User {
    const item = this.collection.getUsers()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  public hasNext(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }
}

export class UserNameIterator implements Iterator<User> {
  private collection: UserCollection = new UserCollection();
  private position: number = 0;
  private reverse: boolean = false;

  constructor(collection: UserCollection, reverse: boolean = false) {
    const sortedUsers = collection
      .getUsers()
      .sort((a, b) => a.name.localeCompare(b.name));
    sortedUsers.forEach(user => this.collection.addUser(user));

    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public next(): User {
    const item = this.collection.getUsers()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  public hasNext(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }
}

interface Aggregator {
  getAgeIterator(): Iterator<User>;
}

export class UserCollection implements Aggregator {
  private users: User[] = [];

  public getUsers(): User[] {
    return this.users;
  }

  public getCount(): number {
    return this.users.length;
  }

  public addUser(user: User): void {
    this.users.push(user);
  }

  public getAgeIterator(): Iterator<User> {
    return new UserAgeIterator(this);
  }

  public getNameIterator(): Iterator<User> {
    return new UserAgeIterator(this);
  }

  public getReverseAgeIterator(): Iterator<User> {
    return new UserAgeIterator(this, true);
  }

  public getReverseNameIterator(): Iterator<User> {
    return new UserNameIterator(this, true);
  }
}
