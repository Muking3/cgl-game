import { Field } from "@/utils/renderField";

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

export interface Operation {
    id: number;
    userId: number;
    productId: number;
    productName: string;
    typeOperation: "Entrée" | "Sortie";
    quantity: number;
    raison: "Ravitaillement" | "Vente" | "Perte";
    expirationDate: string;
    createdAt: string;
    updatedAt: string;
    user?: {
        id: number;
        lastName: string;
        name: string;
        email: string;
        gender: "Homme" | "Femme";
        role: string;
        url: string;
        createdAt: string;
        updatedAt: string;
    };
    product?: {
        id: number;
        userId: number;
        name: string;
        url: string;
        sku: string | null;
        price: number;
        devise: string;
        variety: string;
        quantity: number;
        minQuantity: number;
        description: string | null;
        createdAt: string;
        updatedAt: string;
    };
}

export interface OperationContextType {
    operations: Operation[]
    loading: boolean
    error: string | null
    fetchOperations: () => Promise<any>;
    createOperation: (operationData: any) => Promise<any>
    fetchOperationByField: (field: string, value: string) => Promise<Operation[]>
    setError: React.Dispatch<React.SetStateAction<string | null>>
    hasMores: boolean
}