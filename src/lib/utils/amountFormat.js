export function amountFormat(amount) {
  if (amount >= 1e9) {
    return `${(amount / 1e9).toFixed(1)}B`;
  }
  if (amount >= 1e6) {
    return `${(amount / 1e6).toFixed(1)}M`;
  }
  if (amount >= 1e3) {
    return `${(amount / 1e3).toFixed(1)}K`;
  }
  return amount; // return the number if it less than a thousand
}
