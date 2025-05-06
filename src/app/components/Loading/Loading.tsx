'use client';

import React from 'react';

import { LoadingContainer, LoadingContent, LoadingSpinner, LoadingText } from './style';

const Loading: React.FC = () => {
    return (
        <LoadingContainer>
            <LoadingContent>
                <LoadingSpinner />
                <LoadingText>Carregando sua aventura...</LoadingText>
            </LoadingContent>
        </LoadingContainer>
    );
};

export default Loading;
