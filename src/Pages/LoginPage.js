import Button from "@restart/ui/esm/Button";
import { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import LoginService from "../Services/LoginService";

export default function LoginPage() {
  const loginRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();

    LoginService.login(loginRef.current[0].value, loginRef.current[1].value);

    // console.log(data);

    // if (data) {
    //   console.log(data.session);
    //   localStorage.setItem("session", data.session);
    // }
  }
  useEffect(() => {
    // LoginService.login(
    //   "raymond@luwjistik.com",
    //   "e2e0334ec93288bc039a2c2f614cb16a"
    // );
  }, []);
  return (
    <Form ref={loginRef} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
