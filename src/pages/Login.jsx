import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/DummyAuthContext";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import Message from "../components/Message";
export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated, loginErr, badLogin } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) {
      loginErr();
      login(email, password);
    }
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app");
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />
      {(!email || !password) && (
        <Message message="Type in your email and password and then press the Login button." />
      )}
      {badLogin && (
        <Message message="Password or email is incorrect/missing. Try again." />
      )}
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="on">
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>{email && password && <Button type="primary">Login</Button>}</div>
      </form>
    </main>
  );
}
