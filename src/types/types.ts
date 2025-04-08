
interface Logger{
  logCreationDate: (addition:string)=>void;
}

export class Task implements Logger {
  title: string = "Nowe";
  done: boolean = true;
  categorie?: Categorie;
  private createdAt: Date;
  constructor(
    title: string,
    done: boolean,
    categorie: Categorie = Categorie.GENERAL
  ) {
    this.title = title;
    this.done = done;
    this.categorie = categorie;
    this.createdAt = new Date();
  }
  logCreationDate(extra: string) {
    console.log(`Task został stworzony ${this.createdAt} ${extra}`);
  }
}




export enum Categorie {
  GENERAL = "general",
  WORK = "work",
  GYM = "gym",
  HOBBY = "hobby",
  SOCIAL = "social",
}
