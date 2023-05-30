import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      light: string;
      dark: string;
    };

    fonts: {
      primary: string;
    };

    fontSizes: {
      medium: string;
    };
  }
}
