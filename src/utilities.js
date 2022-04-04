export const durationDays = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.floor((
    Date.UTC( d2.getFullYear(), d2.getMonth(), d2.getDate()) - 
    Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate()) ) /
    (1000 * 60 * 60 * 24)) + 1;
};

export const formatCurrency = new Intl.NumberFormat('sv-SE', {
  style: 'currency',
  currency: process.env.REACT_APP_CURRENCY,
  maximumFractionDigits: 0
});