import 'styled-components';
import { defaultTheme } from '../styles/themes/default.styles';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}