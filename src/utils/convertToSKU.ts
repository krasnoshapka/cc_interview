export default function convertToSKU(amount: number): string {
  let cents = `${amount}`.split('');
  while (cents.length < 3) {
    cents.unshift('0');
  }
  cents.push('0', '0');

  return 'LECA' + cents.join('');
}
