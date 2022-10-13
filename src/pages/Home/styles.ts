import styled from 'styled-components';

export const HomeContainer = styled.main`
    flex: 1;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    form {
        gap: 3.5rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

export const StartCountdownButton = styled.button`
    border: 0;
    width: 100%;
    padding: 1rem;
    cursor: pointer;
    font-weight: bold;
    border-radius: 8px;
    color: ${props => props.theme['gray-100']};
    background: ${props => props.theme['green-500']};

    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${props => props.theme['green-700']};
    }
`;

export const StopCountdownButton = styled.button`
    border: 0;
    width: 100%;
    padding: 1rem;
    cursor: pointer;
    font-weight: bold;
    border-radius: 8px;
    color: ${props => props.theme.white};
    background: ${props => props.theme['red-500']};

    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    &:hover {
        background: ${props => props.theme['red-700']};
    }
`;