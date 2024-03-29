import logo from '../logo.svg';
import {Button, Form, Input, message, Modal, Typography} from "antd";
import React, {useEffect, useState} from "react";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../config/firebaseConfig";
import "firebase/auth";
import "../App.css";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";


const firebaseApp = initializeApp(firebaseConfig);

function LoginPage() {
  useEffect(
    () => {
      document.title = "Login"
    }, []
  )

  const [modal2Open, setModalOpen] = useState(false);

  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const form = Form.useFormInstance();

  const handleSubmit = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        message.success("connected with " + user.email);
        setLoading(false);
        window.location.href = "/home";
      })
      .catch((error) => {
        const errorCode = error.code;
        message.error(errorCode);
        setLoading(false);
      });
  };

  const onMailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo animate__fadeInDown" alt="logo"/>
        <Button type="primary" onClick={() => setModalOpen(true)}>Login</Button>
      </header>

      <Modal
        title="Login"
        centered
        open={modal2Open}
        onOk={() => form.submit()}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
            Login
          </Button>
        ]}
      >
        <Typography
          style={{
            borderRadius: 8,
            marginTop: "6vh",
            textAlign: "center",
          }}
        >

          <Form form={form} onFinish={handleSubmit} className="login-form">
            <Form.Item name="Your Email" rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              }
            ]}>
              <Input
                prefix={<MailOutlined/>}
                type="email"
                size="large"
                placeholder=" Your Email"
                onChange={onMailChange}
              />
            </Form.Item>
            <Form.Item
              name="Password"
              rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            >
              <Input
                prefix={<LockOutlined/>}
                size="large"
                type="password"
                placeholder=" Password"
                onChange={onPasswordChange}
              />
            </Form.Item>
          </Form>
        </Typography>
      </Modal>
    </div>
  );
}

export default LoginPage;
