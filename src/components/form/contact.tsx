import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import styled from 'styled-components';
import { Text } from '../typography/typography';
import { up } from '../breakpoint/breakpoint';
import { useForm } from 'react-hook-form';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${up('md')} {
    flex-direction: row;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 19px 16px;

  font-size: 16px;
  line-height: 110%;

  border-radius: 4px;
  border: 0;
  background: #f5f6f7;

  &:not(:last-of-type) {
    margin-bottom: 24px;
    margin-right: 0;

    ${up('md')} {
      margin-right: 24px;
      margin-bottom: 0;
    }
  }
`;

const TextArea = styled.textarea`
  height: 190px;
  width: 100%;
  padding: 19px 16px;
  margin-top: 24px;

  font-size: 16px;
  line-height: 110%;

  border-radius: 4px;
  border: 0;
  background: #f5f6f7;

  resize: vertical;
`;

const SendButton = styled.button`
  margin-top: 40px;
  cursor: pointer;
  padding: 13px 18px;

  font-size: 20px;
  line-height: 110%;

  color: #ffffff;
  background: #668cff;
  border-radius: 28px;
  border: 0;

  &:disabled {
    cursor: auto;
    opacity: 0.7;
  }
`;

const RequestStatusMessage = styled(Text)`
  display: inline-block;
  margin-left: 24px;
`;

const ErrorContainer = styled.div`
  width: 100%;
  margin-bottom: 0;

  ${up('md')} {
    margin-right: 24px;
  }
`;

const ErrorMessage = styled.p`
  color: #dc052d;
  opacity: 0.5;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 0;
`;

type RequestStatus = 'pending' | 'success' | 'error';

export const ContactForm: React.FC = () => {
  const initialFormData = { name: '', email: '', message: '' };
  const [formData, setFormData] = useState(initialFormData);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('pending');

  const { register, errors, handleSubmit } = useForm();

  const hasValidInput = (): boolean => {
    console.log('errors', errors);
    return Boolean(
      formData.name &&
        formData.name.length > 0 &&
        formData.email &&
        formData.email.length > 0 &&
        formData.message &&
        formData.message.length > 0,
    );
  };

  const handleSubmit1: FormEventHandler = (e) => {
    // taken from the Netlify Blog:
    // - https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
    const encodeForNetlify = (data: any): string => {
      return Object.keys(data)
        .map(
          (key) =>
            encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
        )
        .join('&');
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForNetlify({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setRequestStatus('success');
        setFormData(initialFormData);
      })
      .catch((error) => {
        console.error(error);
        setRequestStatus('error');
      });

    e.preventDefault();
  };

  const onSubmit: FormEventHandler = (data: any) => {
    console.log('onsubmit data', data);
  };

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit(onSubmit)}
      data-netlify-honeypot="bot-field"
    >
      <InputContainer>
        <ErrorContainer>
          <Input
            placeholder="Your name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            ref={register({ required: true })}
          />
          {errors.name && <ErrorMessage>Name is required</ErrorMessage>}
        </ErrorContainer>
        <ErrorContainer>
          <Input
            placeholder="Your email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            ref={register({
              required: true,
              pattern: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && (
            <ErrorMessage>
              <strong>E-Mail-Adresse:</strong>
              <span>
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet
              </span>
            </ErrorMessage>
          )}
        </ErrorContainer>
      </InputContainer>
      <TextArea
        placeholder="Your message to us"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        ref={register({ required: true })}
      />
      {errors.message && <ErrorMessage>Please, input message</ErrorMessage>}
      <div>
        <SendButton
          type="submit"
          title={
            hasValidInput()
              ? 'Click to send us your message'
              : 'Please fill in all information'
          }
        >
          Send &#8594;
        </SendButton>
        {requestStatus === 'success' && (
          <RequestStatusMessage>Thanks for your message!</RequestStatusMessage>
        )}
        {requestStatus === 'error' && (
          <RequestStatusMessage>
            Sorry, but something went wrong. Please try again later.
          </RequestStatusMessage>
        )}
      </div>
    </form>
  );
};
