import { DefaultTheme } from 'styled-components';

//Segunda etapa criar os theme
const light: DefaultTheme = {
    name: 'light',
    bgColor: '#fff',
    borderRadius: {
        sm: '5px',
        md: '10px',
        lg: '15px'
    },

    fontSizes: {
        sm: '14px',
        md: '16px',
        lg: '36px'
    },

    colors: {
        primary: '#0d6efd',
        secondary: '#f8f9fa',
        error: '#dc3545',
        info: '#0dcaf0',
        success: '#198754'
    }
};

const dark: DefaultTheme = {
    name: 'dark',
    bgColor: '#3a3a3a',
    borderRadius: {
        sm: '5px',
        md: '10px',
        lg: '15px'
    },

    fontSizes: {
        sm: '14px',
        md: '16px',
        lg: '36px'
    },

    colors: {
        primary: '#e16e0e',
        secondary: '#f8f9fa',
        error: '#dc3545',
        info: '#0dcaf0',
        success: '#198754'
    }
};

export { light, dark };