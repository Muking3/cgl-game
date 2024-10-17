import { Product } from "@/types/product";

export default function filterProducts(
    products: Product[],    
    selectedTab: string
) {
    switch (selectedTab) {
        case "stock_critique":
            return products.filter(product => product.quantity !== undefined && product.quantity === product.minQuantity);
        case "rupture_de_stock":
            return products.filter(product => product.quantity !== undefined && product.quantity === 0);
        case "en_de_stock":
            return products.filter(product => product.quantity !== undefined && product.quantity > product.minQuantity);
        default:
            return products;
    }
}