interface GlobalState {
  user: IUser;
  menu: IMenu;
}

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

interface IMenu {
  route: string;
  selected: string;
}
