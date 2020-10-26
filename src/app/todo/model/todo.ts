export class Todo {

  id: number;
  name: string;
  description: string;
  constructor(
    id = 0, name = '', description = ''
  ) {
    this.name = name;
    this.description = description;
  }

}
