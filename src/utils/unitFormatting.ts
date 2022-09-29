export const usePercentFormat = (value: number) => {
  return Math.round(value * 100) + "%";
};

export const useCurrencyFormat = (
  value: number,
  locale: string,
  currency: string
) => {
  const formatNumber = new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: 1,
    style: "currency",
    currency: currency,
    // maximumSignificantDigits: 3,
  });
  return formatNumber.format(value);
};

export const useNumberFormat = (value: number, locale: string) => {
  const formatNumber = new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: 1,
  });
  return formatNumber.format(value);
};

export const useMonthFormat = (value: Date, locale: string) => {
  return new Intl.DateTimeFormat(locale, { month: "long" }).format(value);
};
