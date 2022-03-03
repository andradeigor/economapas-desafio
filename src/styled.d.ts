// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      purple: string;
      card: string;
      background: string;
      text: string;
      inputPlaceholder: string;
      questionCounter: string;
    };
    breakpoints: {
      sm: string;
      lg: string;
    };
  }
}
