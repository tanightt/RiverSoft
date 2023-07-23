const formattedAmount = amount => {
  const amountValue = Math.abs(amount);
  const formatter = new Intl.NumberFormat('uk-UA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  });
  const formattedValue = formatter.format(amountValue).replace(',', '.');

  return formattedValue;
};

export default formattedAmount;
