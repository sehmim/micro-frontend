import styled from 'styled-components';
import Dropdown from '../components/Dropdown';
import { useAppDispatch, useAppSelector } from '../hooks/rtk';
import { toggleTheme } from '../slices/UI/UISlice';
import { themes } from '../util/themes';
import { useNavigate } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  height: 15vh;
  width: 100%;  

  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};
  background: ${props => props.theme.secondaryColor};
`

const HeaderBody = styled.div`
    max-width: 1000px;
`

const Button = styled('button')`
    padding: 0.4em 2em 0.4em 1em;
    font-weight: 500;
    font-size: 1.3rem;
    color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.secondaryColor};
    min-width: 200px;
`

export function Header() {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector((state) => state.UI);

    const handleToggleTheme = () => {
        if (theme.id === 'defaultTheme') {
            dispatch(toggleTheme(themes['darkTheme']));
        } else {
            dispatch(toggleTheme(themes['defaultTheme']));
        }
    };

    const navigate = useNavigate()

    const handlePoop = () => {
        navigate('/pdp/1')
    }
    return (
        <HeaderWrapper>
            <HeaderBody>
                Nav Bar Goes Here
                <button onClick={handlePoop}>Route Test</button>
            </HeaderBody>
        </HeaderWrapper>
    );
}
