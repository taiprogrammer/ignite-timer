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

export const FormContainer = styled.div`
    width: 100%;

    font-weight: bold;
    font-size: 1.125rem;
    color: ${props => props.theme['gray-100']};

    gap: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const CountdownContainer = styled.div`
    font-size: 10rem;
    line-height: 8rem;
    font-family: 'Roboto Mono', monospace;
    color: ${props => props.theme['gray-100']};

    gap: 1rem;
    display: flex;

    span {
        border-radius: 8px;
        padding: 2rem 1rem;
        background: ${props => props.theme['gray-700']};
    }
`;

export const Separator = styled.div`
    width: 4rem;

    overflow: hidden;

    padding: 2rem 0;
    color: ${props => props.theme['green-500']};

    display: flex;
    justify-content: center;
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

const BaseInput = styled.input`
    border: 0;
    height: 2.5rem;
    font-weight: bold;
    padding: 0 0.5rem;
    font-size: 1.125rem;
    background: transparent;
    color: ${props => props.theme['gray-100']};
    border-bottom: 2px solid ${props => props.theme['gray-500']};

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme['green-500']};
    }

    &::placeholder {
        color: ${props => props.theme['gray-500']};
    }
`;

export const TaskInput = styled(BaseInput)`
    flex: 1;
`;

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`;