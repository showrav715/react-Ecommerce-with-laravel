const NumberFormat = ({price}) => {

    return new Intl.NumberFormat('en-BD', {
        style: 'currency',
        currency: 'BDT',
        maximumFractionDigits: 2
    }
    ).format(price/100);
}

export default NumberFormat;