// import original module declarations
import 'styled-components';


// and extend them!

//Primeira etapa da configuração do tema da aplicação
declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark',

    colors: {
      primary: string;
      secondary: string;
      error: string;
      success: string;
      info: string;
    },

    fontSizes: {
      sm: string;
      md: string;
      lg: string;
    },

    bgColor: string;

    borderRadius: {
      sm: string;
      md: string;
      lg: string;
    }
  }
}