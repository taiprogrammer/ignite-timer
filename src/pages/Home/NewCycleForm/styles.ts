import styled from "styled-components";

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

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`;