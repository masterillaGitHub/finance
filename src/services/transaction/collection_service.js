import {isUndefined} from "@/helpers/validators/index.js";

export function toGroupTransactions(transactions) {
    return Object.values(transactions.reduce(createGroup, {}))
    // TODO: Check, if need sort then uncomment. Because sort on server
    // .sort( ( a, b ) => b.timestamp - a.timestamp )
}

function createGroup(acc, transaction) {

    const field = transaction.transaction_at_date;

    if (isUndefined(acc[field])) {
        acc[field] = {
            date: transaction.transaction_at_date,
            timestamp: transaction.transaction_at_timestamp,
            transactions: []
        }
    }

    acc[field].transactions.push(transaction)

    return acc
}
