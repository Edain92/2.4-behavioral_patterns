import { UserCollection } from '../iterator';

export interface OrderCommand {
  execute(users: UserCollection): UserCollection;
}

export class OrderByAgeAscCommand implements OrderCommand {
  execute(users: UserCollection): UserCollection {
    const sortedUserCollection: UserCollection = new UserCollection();
    const iterator = users.getAgeIterator();

    while (iterator.hasNext()) {
      sortedUserCollection.addUser(iterator.next());
    }

    return sortedUserCollection;
  }
}

export class OrderByNameAscCommand implements OrderCommand {
  execute(users: UserCollection): UserCollection {
    const sortedUserCollection: UserCollection = new UserCollection();
    const iterator = users.getNameIterator();

    while (iterator.hasNext()) {
      sortedUserCollection.addUser(iterator.next());
    }

    return sortedUserCollection;
  }
}
