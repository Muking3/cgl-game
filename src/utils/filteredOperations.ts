import { Operation } from "@/types/operation";

export default function filterOperations(
    repports: Operation[],    
    selectedTab: string
) {
    switch (selectedTab) {
        case "ravitaillement":
            return repports.filter(repport => repport.raison !== undefined && repport.raison === "Ravitaillement");
        case "vente":
            return repports.filter(repport => repport.raison !== undefined && repport.raison === "Vente");
        case "perte":
            return repports.filter(repport => repport.raison !== undefined && repport.raison === "Perte");
        default:
            return repports;
    }
}