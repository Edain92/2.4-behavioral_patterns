import { App, User } from '.';
import {
  OrderByAgeAscCommand,
  OrderByNameAscCommand,
  OrderCommand,
} from './command';
import { UserCollection } from './iterator';

describe('App', () => {
  let app: App;
  let userCollection: UserCollection;
  let John;
  let Jane;
  let Adam;

  beforeEach(() => {
    userCollection = new UserCollection();
    John = new User('John', 'Doe', 30, 0);
    Jane = new User('Jane', 'Smith', 25, 1);
    Adam = new User('Adam', 'Johnson', 18, 2);
    userCollection.addUser(John);
    userCollection.addUser(Jane);
    userCollection.addUser(Adam);

    app = new App(userCollection);
  });

  it('should sort users by age in ascending order', () => {
    const command: OrderCommand = new OrderByAgeAscCommand();

    const sortedUsers = app.sortUsers(command);
    const iterator = sortedUsers.getAgeIterator();

    expect(iterator.next()).toBe(Adam);
    expect(iterator.next()).toBe(Jane);
    expect(iterator.next()).toBe(John);
    expect(iterator.next()).toBe(undefined);
    expect(iterator.hasNext()).toBe(false);
  });

  it('should sort users by age in ascending order', () => {
    const command: OrderCommand = new OrderByNameAscCommand();

    const sortedUsers = app.sortUsers(command);
    const iterator = sortedUsers.getNameIterator();

    expect(iterator.next()).toBe(Adam);
    expect(iterator.next()).toBe(Jane);
    expect(iterator.next()).toBe(John);
    expect(iterator.next()).toBe(undefined);
    expect(iterator.hasNext()).toBe(false);
  });
});
