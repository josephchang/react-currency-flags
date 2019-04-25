export enum CurrencyFlagSizes {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  XLARGE = 'xl',
}

export interface IDimension {
  height: number;
  width: number;
}

export type CurrencyFlagDimensions = { [dim in CurrencyFlagSizes]: IDimension };

export interface ICurrencyFlagStyledProps {
  height?: number;
  width?: number;
  size?: CurrencyFlagSizes;
}

export interface ICurrencyFlagProps extends ICurrencyFlagStyledProps {
  currency: string;
}
