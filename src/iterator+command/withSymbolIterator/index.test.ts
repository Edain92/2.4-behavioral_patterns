import { App, User, OrderCommand, OrderByAgeAscCommand } from "./index";

describe('App', () => {
  let app: App;
  let users: User[];

  beforeEach(() => {
    users = [
      new User('Juan', 'Perez', 30, 2),
      new User('Carlos', 'Lopez', 40, 3),
      new User('Ana', 'Gomez', 25, 1),
    ];

    app = new App(users);
  });

  it('should sort users by age in ascending order', () => {
    const expectedOrder = [
      new User('Ana', 'Gomez', 25, 1),
      new User('Juan', 'Perez', 30, 2),
      new User('Carlos', 'Lopez', 40, 3),
    ];

    const command: OrderCommand = new OrderByAgeAscCommand();
    const sortedUsers = app.sortUsers(command);

    expect(sortedUsers).toEqual(expectedOrder);
  });
});
