import {
  App,
  OrderByAgeDescCommand,
  OrderByNameAscCommand,
  OrderCommand,
  User,
} from '.';

describe('App', () => {
  let app: App;
  let users: User[];

  beforeEach(() => {
    users = [
      new User('Juan', 'Perez', 30, 2),
      new User('Ana', 'Gomez', 25, 1),
      new User('Carlos', 'Lopez', 40, 3),
    ];

    app = new App(users);
  });

  it('should sort users by name in ascending order', () => {
    const expectedOrder = [
      new User('Ana', 'Gomez', 25, 1),
      new User('Carlos', 'Lopez', 40, 3),
      new User('Juan', 'Perez', 30, 2),
    ];
    const command: OrderCommand = new OrderByNameAscCommand();

    const sortedUsers = app.sortUsers(command);

    expect(sortedUsers).toEqual(expectedOrder);
  });

  it('should sort users by age in descending order', () => {
    const expectedOrder = [
      new User('Carlos', 'Lopez', 40, 3),
      new User('Juan', 'Perez', 30, 2),
      new User('Ana', 'Gomez', 25, 1),
    ];
    const command: OrderCommand = new OrderByAgeDescCommand();

    const sortedUsers = app.sortUsers(command);

    expect(sortedUsers).toEqual(expectedOrder);
  });
});
