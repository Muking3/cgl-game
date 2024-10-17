import { api } from "@/services/api";

export const checkDataUnique = async (endpoint: string, field: string, value: string): Promise<any> => {
    try {
        const data = await api.getIsExist(endpoint, field, value);
        return data?.[0]
    } catch (error) {
        console.log(error);
    }
};