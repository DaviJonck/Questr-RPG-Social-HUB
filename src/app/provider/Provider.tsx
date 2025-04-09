'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

import StyledComponentsRegistry from '../lib/registry';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <StyledComponentsRegistry>
            <NextThemeProvider>
                <StyledThemeProvider theme={{}}>{children}</StyledThemeProvider>
            </NextThemeProvider>
        </StyledComponentsRegistry>
    );
}
