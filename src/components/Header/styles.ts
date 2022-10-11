import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        gap: 0.5rem;
        display: flex;

        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            align-items: center;
            justify-content: center;

            color: ${props => props.theme['gray-100']};

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            &:hover {
                color: ${props => props.theme['green-500']};
                border-bottom: 3px solid ${props => props.theme['green-500']};
            }

            &.active {
                box-shadow: none;
                color: ${props => props.theme['green-500']};
            }
        }
    }
`