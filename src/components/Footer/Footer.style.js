import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
`;
export const FooterWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 10%;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content:  space-evenly;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
  text-align: left;
  width: 30%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.fontColor};

  @media screen and (max-width: 640px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterHeader = styled.h1`
  display: flex;
  text-align: left;
  align-items: center;
  padding: 1.5rem;
  font-size: 30px;
  margin-bottom: 16px;
  user-select: none;

  @media screen and (max-width: 640px) {
    font-size: 25px;
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const Icons = styled.div`
  color: ${({ theme }) => theme.colors.fontColor};
  padding: 1rem;
  font-size: 50px;

  &:hover {
    color: ${({ theme }) => theme.colors.activeNavLink};
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 640px) {
    font-size: 25px;
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLink = styled.div`
  color: ${({ theme }) => theme.colors.fontColor};
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  
  display: flex;
    flex-direction: column;
  justify-content: center;


  a:hover {
    color: ${({ theme }) => theme.colors.activeNavLink};
    transition: 0.3s ease-in-out;
  }
`;

export const FooterCopyRight = styled.div`

    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;

  font-size: 16px;
  
`;
