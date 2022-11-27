export interface User {
    id: string;
    email: string;
    createdAt: number;
    name: string;
    password: string;
}

export type NewUser = Pick<User, "email" | "name" | "password">
