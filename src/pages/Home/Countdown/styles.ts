import styled from "styled-components";

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