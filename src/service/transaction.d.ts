export interface Transaction {
    name:           string;
    parent_aliases: string[];
    amount:         number;
    month:          string;
    day:            number;
}
