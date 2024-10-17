export interface ApiResponse<T> {
    data: T;
}

export interface Product {
    id: string
    userId: number | string;
    name: string;
    urlFile: File | null;
    url: string | null;
    sku: string | null;
    price: number;
    devise: "USD" | "CDF"
    variety: "Legumes" | "Épices fraiches" | "Épices en poudre";
    minQuantity: number;
    quantity?: number;
    description: string | null;
}

export interface ProductContextType {
    products: Product[]
    loading: boolean
    error: string | null
    fetchProducts: (limit?: number) => Promise<any>;
    getProductById: (id: string) => Promise<ApiResponse<Product>>
    fetchProductByField: (field: string, value: string) => Promise<Product[]>
    fetchExistProduct: (field: string, value: string) => any
    createProduct: (productData: Product) => Promise<void>
    updateProduct: (id: string, updatedData: Partial<Product>) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
    setError: React.Dispatch<React.SetStateAction<string | null>>
    hasMore: boolean
    setHasMore: any
    setProducts: any
    setPage: any
}