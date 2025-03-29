export interface Task {
  title: string;
  done: boolean;
  categorie?: Categorie;
}

export enum Categorie {
  GENERAL = "general",
  WORK = "work",
  GYM = "gym",
  HOBBY = "hobby",
  SOCIAL = "social",
}
