export type User = {
  id: string;
  username: string;
  password: string;

}

export type Recipe = {
  id: string;
  name: string;
  liquors: string[];
  ingredients: string[];
  garnish?:  string;
  directions:  string[];
  users:  User[];
}