'use client';

import React, { useEffect, useState } from 'react';

import { useServerInsertedHTML } from 'next/navigation';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
    const [isMounted, setIsMounted] = useState(false);

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();

        return <>{styles}</>;
    });

    useEffect(() => {
        setIsMounted(true);

        return () => {
            styledComponentsStyleSheet.seal();
        };
    }, [styledComponentsStyleSheet]);

    if (typeof window === 'undefined') {
        return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>;
    }

    // Renderização no cliente
    return <>{children}</>;
}
