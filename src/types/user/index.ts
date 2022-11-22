export interface User {
    email: string;
    userId: string;
    createdAt: number;
}

export interface NewUser extends Omit<User, "userId" | "createdAt"> {
    password: string;
}
