import React, { Component } from 'react';
import CurrencyFlag, { CurrencyFlagSizes } from '../src';
import {
  GlobalStyle,
  H1,
  H2,
  Examples,
  Example,
  Flag,
  Flags,
  FlagSize,
  FlagWrapper,
} from './components';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <H1>Currency flag examples</H1>
        <Examples>
          <Example>
            <H2>4 predefined sizes</H2>
            <Flags>
              {Object.keys(CurrencyFlagSizes).map(size => (
                <Flag key={size}>
                  <FlagWrapper>
                    <CurrencyFlag
                      currency="USD"
                      size={CurrencyFlagSizes[size]}
                    />
                  </FlagWrapper>
                  <FlagSize>{CurrencyFlagSizes[size]}</FlagSize>
                </Flag>
              ))}
            </Flags>
          </Example>
          <Example>
            <H2>Custom size</H2>
            <Flags>
              <Flag>
                <FlagWrapper>
                  <CurrencyFlag currency="AUD" width={28} />
                </FlagWrapper>
                <FlagSize>width = 28</FlagSize>
              </Flag>
              <Flag>
                <FlagWrapper>
                  <CurrencyFlag currency="AUD" height={28} />
                </FlagWrapper>
                <FlagSize>height = 28</FlagSize>
              </Flag>
            </Flags>
          </Example>
        </Examples>
      </>
    );
  }
}

export default App;
