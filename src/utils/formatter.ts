const priceFormatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
})
// R$ 0,00

export { priceFormatter }
