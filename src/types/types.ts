export interface Task {
    title: string;
    done: boolean;
    categorie?: Categorie;
}

export type Categorie = "general" | "work" | "gym" | "hobby";
