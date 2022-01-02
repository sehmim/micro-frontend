import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 20vh;
  width: 100%;

  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};
  background: ${props => props.theme.secondaryColor};
`
export function Footer() {
    return (<FooterWrapper>Footer</FooterWrapper>);
}
