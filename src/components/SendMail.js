import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import firebase from "firebase";

export default function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <Container>
      <Header>
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </Header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />

        {errors.to && <p className="sendMail__error">To is Required!</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is Required!</p>
        )}

        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is Required!</p>
        )}

        <Options>
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </Options>
      </form>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  right: 50px;
  background-color: #404040;
  width: 40%;
  height: 50%;
  max-width: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);

  > form {
    display: flex;
    flex: 1;
    flex-direction: column;

    > input {
      height: 30px;
      padding: 10px;
      border: none;
      border-bottom: 1px solid whitesmoke;
      outline: none;
    }

    .sendMail__message {
      display: flex;
      flex: 1;
    }

    .sendMail__error {
      background-color: white;
      color: red;
      text-align: right;
      padding: 2px;
    }
  }
`;

const Header = styled.div`
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;

  > h3 {
    color: whitesmoke;
    font-size: 13px;
  }

  .sendMail__close {
    cursor: pointer;
  }
`;

const Options = styled.div`
  .sendMail__send {
    background-color: #3079ed;
    text-transform: capitalize !important;
    margin: 15px !important;
  }
`;
