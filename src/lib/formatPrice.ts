export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'MAD', // Moroccan Dirham
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
}