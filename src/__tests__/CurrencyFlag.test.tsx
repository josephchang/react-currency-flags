import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import 'jest-styled-components';
import flags from '../flags';
import CurrencyFlag, { CurrencyFlagSizes, ICurrencyFlagProps } from '../';

describe('<CurrencyFlag />', () => {
  let props: ICurrencyFlagProps;
  let tree: ReactTestRenderer;

  describe('GIVEN a valid/supported currency', () => {
    const currency = 'cad';

    beforeEach(() => {
      props = { currency };
    });

    describe('AND a predefined size', () => {
      describe('AND the size `sm`', () => {
        const size = CurrencyFlagSizes.SMALL;

        beforeEach(() => {
          tree = renderer.create(<CurrencyFlag {...props} size={size} />);
        });

        it('should display the flag in `sm`', () => {
          expect(tree.toJSON()).toMatchSnapshot();
          expect(tree.toJSON()).toHaveStyleRule(
            'background-image',
            `url("${flags[currency]}")`
          );
        });
      });

      describe('AND the size `md`', () => {
        const size = CurrencyFlagSizes.MEDIUM;

        beforeEach(() => {
          tree = renderer.create(<CurrencyFlag {...props} size={size} />);
        });

        it('should display the flag in `md`', () => {
          expect(tree.toJSON()).toMatchSnapshot();
        });
      });

      describe('AND the size `lg`', () => {
        const size = CurrencyFlagSizes.LARGE;

        beforeEach(() => {
          tree = renderer.create(<CurrencyFlag {...props} size={size} />);
        });

        it('should display the flag in `lg`', () => {
          expect(tree.toJSON()).toMatchSnapshot();
        });
      });

      describe('AND the size `xl`', () => {
        const size = CurrencyFlagSizes.XLARGE;

        beforeEach(() => {
          tree = renderer.create(<CurrencyFlag {...props} size={size} />);
        });

        it('should display the flag in `xl`', () => {
          expect(tree.toJSON()).toMatchSnapshot();
        });
      });
    });

    describe('AND a width', () => {
      const width = 28;

      beforeEach(() => {
        tree = renderer.create(<CurrencyFlag {...props} width={width} />);
      });

      it('should display the flag in specified width with calculated height', () => {
        expect(tree.toJSON()).toHaveStyleRule('width', `${width}px`);
        expect(tree.toJSON()).toHaveStyleRule('height', `${width / 1.6}px`);
      });
    });

    describe('AND a height', () => {
      const height = 28;

      beforeEach(() => {
        tree = renderer.create(<CurrencyFlag {...props} height={height} />);
      });

      it('should display the flag in specified height with calculated width', () => {
        expect(tree.toJSON()).toHaveStyleRule('height', `${height}px`);
        expect(tree.toJSON()).toHaveStyleRule('width', `${height * 1.6}px`);
      });
    });

    describe('And no width or height', () => {
      beforeEach(() => {
        tree = renderer.create(<CurrencyFlag currency={currency} />);
      });

      it('should display the flag with default dimensions', () => {
        expect(tree.toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('GIVEN an invalid/unsupported currency', () => {
    const currency = '**INVALID**';

    beforeEach(() => {
      tree = renderer.create(
        <CurrencyFlag currency={currency} size={CurrencyFlagSizes.SMALL} />
      );
    });

    it('should display the empty flag', () => {
      expect(tree.toJSON()).toHaveStyleRule(
        'background-image',
        `url("${flags.$$$}")`
      );
    });
  });
});
