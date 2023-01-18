
const PriceFormat = ({price}) => {
    const formatter = new Intl.NumberFormat('en-BD', {
        style: 'currency',
        currency: 'BDT',
        minimumFractionDigits: 2
    })
    return formatter.format(price /100)
}
export default PriceFormat