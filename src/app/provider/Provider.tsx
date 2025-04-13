'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

import { UserProvider } from '@/context/UserContext';

import StyledComponentsRegistry from '../lib/registry';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <StyledComponentsRegistry>
            <NextThemeProvider>
                <StyledThemeProvider theme={{}}>
                    <UserProvider>{children}</UserProvider>
                </StyledThemeProvider>
            </NextThemeProvider>
        </StyledComponentsRegistry>
    );
}
