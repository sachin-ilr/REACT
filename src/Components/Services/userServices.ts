import create from "./httpServices";

export interface User {
    id: number;
    name: string;
  }

export default create('/users');