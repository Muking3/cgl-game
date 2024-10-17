export interface ApiResponse<T> {
    data: T;
}

export interface Account {
    id: string
    lastName: string;
    name: string;
    email: string;
    password: string
    gender: "Homme" | "Femme" | null;
    role: "Administrateur" | "Utilisateur" | string;
    urlFile: File | null;
    url: string | null;
}

export interface AccountContextType {
    accounts: Account[]
    loading: boolean
    error: string | null
    fetchAccounts: () => Promise<void>;
    getAccountById: (id: string) => Promise<ApiResponse<Account>>
    fetchAccountsByField: (field: string, value: string) => Promise<Account[]>
    fetchExistAccount: (field: string, value: string) => any
    createAccount: (accountData: Account) => Promise<void>
    updateAccount: (id: string, updatedData: Account) => Promise<void>
    deleteAccount: (id: string) => Promise<void>
    setError: React.Dispatch<React.SetStateAction<string | null>>
    hasMore: boolean
}