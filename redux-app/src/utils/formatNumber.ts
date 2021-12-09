interface IFormatNumberData {
  localeString: string;
  style: string;
  currency?: string;
  value: number;
}

export const BRLFormatter = {
  localeString: 'pt-BR',
  style: 'currency',
  currency: 'BRL',
};

export function formatNumber({
  localeString,
  style,
  currency,
  value,
}: IFormatNumberData) {
  return new Intl.NumberFormat(localeString, {
    style,
    currency,
  }).format(value);
}
