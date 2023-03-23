import 'styled-components';

interface IPalette {
  primary: string;
  secondary?: string;
  tertiary?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      black: IPalette;
      light: IPalette;
      gray: IPalette;
      purple: IPalette;
      success: IPalette;
      error: IPalette;
      disabled: IPalette;
    };
  }
}
