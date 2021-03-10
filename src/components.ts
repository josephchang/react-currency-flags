import styled from 'styled-components';
import flags from './flags';
import {
  CurrencyFlagDimensions,
  CurrencyFlagSizes,
  ICurrencyFlagProps,
  ICurrencyFlagStyledProps,
  IDimension,
} from './types';

const RATIO = 1.6;
const DEFAULT_DIMENSION = {
  height: 16,
  width: 24,
};

const calculateDimension = (width?: number, height?: number): IDimension => {
  if (!width && !height) {
    return DEFAULT_DIMENSION;
  }

  let w = width;
  let h = height;

  if (!width && height) {
    w = height * RATIO;
  } else if (!height && width) {
    h = width / RATIO;
  }

  return {
    height: h,
    width: w,
  };
};

const getCurrencyImage = (ccy: string) => flags[ccy.toLowerCase()] || flags.$$$;

export const currencyFlagDims: CurrencyFlagDimensions = {
  [CurrencyFlagSizes.SMALL]: {
    height: 10,
    width: 16,
  },
  [CurrencyFlagSizes.MEDIUM]: DEFAULT_DIMENSION,
  [CurrencyFlagSizes.LARGE]: {
    height: 24,
    width: 36,
  },
  [CurrencyFlagSizes.XLARGE]: {
    height: 32,
    width: 48,
  },
};

const CurrencyFlagImage = styled.span<ICurrencyFlagProps>`
  background-image: url('${({ currency }) => getCurrencyImage(currency)}');
  background-size: cover;
  display: inline-block;
  ${({ height, size, width }: ICurrencyFlagStyledProps) => {
    const { height: h, width: w } = size
      ? currencyFlagDims[size]
      : calculateDimension(width, height);

    return `
      height: ${h}px;
      width: ${w}px;
    `;
  }}
`;

export default CurrencyFlagImage;
