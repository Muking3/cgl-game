import { Account } from "@/types/account";

export default function filterAccounts(
    accounts: Account[],
    selectedTab: string
) {
    switch (selectedTab) {
        case "admin":
            return accounts.filter(account => account.role === "Administrateur");
        case "user":
            return accounts.filter(account => account.role === "Utilisateur");
        default:
            return accounts;
    }
}
