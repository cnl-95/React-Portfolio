import React from 'react';
import {
  FormContainer,
  FormButton,
  FormLabel,
  FormInput,
  FormTextArea,
  FormWrapper,
  FormContent,
  Form,
} from './Contact.style';

export default function Contact() {
  return (
    <>
      <FormContainer>
        <FormWrapper>
          <FormContent>
            <Form action='#'>
              <h1>Contact Me</h1>
              <FormLabel htmlFor='for'>Name:</FormLabel>
              <FormInput placeholder='Name' type='name' id='name' required />
              <FormLabel htmlFor='for'>Email address:</FormLabel>
              <FormInput placeholder='Email' type='email' id='email' required />
              <FormLabel htmlFor='for'>Message:</FormLabel>
              <FormTextArea type='text' id='text' required />
              <FormButton>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrapper>
      </FormContainer>
    </>
  );
}
