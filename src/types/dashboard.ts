import { Field } from "@/utils/renderField";
import { Account } from "./account";
import { Product } from "./product";

export interface Column {
    label?: string;
    accessor: string;
    fieldConfig: Field;
}

export interface Header {
    head: string;
}

export interface ApiResponse<T> {
    data: T;
}

export interface Data {
    date: string;
    month: string;
    lastMonth: string;
    name: string;
}

export interface Sell {
    name: string
    quantity: number
}

export interface User {
    name: string
    lastName: string
    quantity: number
}

export interface DashboardContextType {
    sells: Data[]
    allAccount: Account[]
    allProduct: Product[]
    mostOperationUser: User | undefined
    highSell: Sell | undefined
    loader: boolean
    error: string | null
    fetchSells: () => Promise<any>;
    fetchLength: () => Promise<any>;
    setError: React.Dispatch<React.SetStateAction<string | null>>
}