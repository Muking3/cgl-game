export interface Auth {
    email: string;
    password: string
}

export type ObjectProfile = {
    id: number | string,
    lastName: string,
    name: string,
    email: string,
    gender: string | null,
    role: string,
    url: string | null,
    createdAt: string,
    updatedAt: string,
}

export interface AuthContextType {
    loading: boolean
    error: string | null
    login: (data: Auth) => Promise<any>;
    logout: () => void
    getProfile: () => Promise<void>;
    profile: any
    token: string | null
}