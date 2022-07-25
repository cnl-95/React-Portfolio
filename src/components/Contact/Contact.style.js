import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  min-height: 100vh;

  background: linear-gradient(120deg, #060606 0%, #2847ab 100%);
  overflow: hidden;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media screen and (max-width: 960px) {
    padding-top: 3rem;
    height: 80%;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Form = styled.form`
  display: grid;
  height: auto;
  width: 80vh;
  z-index: 1;
  margin: 0;
  padding: 30px 32px;
  border-radius: 4px;
  background: #010101;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  h1 {
    margin-bottom: 30px;
    color: #ffff;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    padding: 32px 32px;
    width: 65vh;
  }

  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    padding: 32px 32px;
  }
`;

export const FormLabel = styled.label`
  color: #ffff;
  font-size: 16px;
  margin-bottom: 6px;
`;

export const FormInput = styled.input`
  border: none;
  border-radius: 4px;
  margin-bottom: 30px;
  padding: 13px 13px;
`;

export const FormTextArea = styled.textarea`
  border: none;
  border-radius: 4px;
  margin-bottom: 30px;
  padding: 13px 13px;
  height: 100%;
`;
export const FormButton = styled.button`
  display: block;
  position: relative;
  text-align: center;
  color: #ffff;
  border-radius: 4px;
  border: 1px solid transparent;
  margin-top: 1.5rem;
  padding: 15px 0;
  font-size: 20px;
  background: #0cbf71;
  min-width: auto;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.5s ease;
  overflow: hidden;

  /* &:hover {
    background: #5127d0;
    transition: 0.2s ease-in-out;
  } */

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 97px;
    background: white;
    bottom: -25px;
    left: 0;
    border: 2px solid $white;
    transform: translateX(-50px) rotate(45deg);
    transition: transform 0.5s ease;
  }

  &:hover {
    background: #33d88599;
    border-color: white;

    &:before {
      transition: 0.8s ease-out;
      transform: translateX(1000px) rotate(45deg);
    }
  }
`;

export const Text = styled.span`
  text-align: center;
  font-size: 14px;
  color: #ffff;
  margin-top: 24px;
`;
