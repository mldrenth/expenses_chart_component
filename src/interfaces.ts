
export interface SpendingProps {
    day: string
    amount: number
}

export interface SpendingPropsCurrent extends SpendingProps {
    isCurrent: boolean
}