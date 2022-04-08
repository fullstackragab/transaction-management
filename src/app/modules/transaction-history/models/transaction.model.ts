export interface Transaction {
    account_id: string, 
    amount: number,
    created_at: Date,
    transaction_id: string,
    balance?: number
}