export function formatCurrency (value: number) {
    return value.toLocaleString("pr-BR", {
        style: "currency",
        currency: "BRL",
    })
}