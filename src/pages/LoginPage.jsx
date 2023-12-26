import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";
export default function LoginPage({ baseUrl }) {
 
  return (
    <>
      <div>
        <RegisterForm baseUrl={baseUrl} />
      </div>
      <div>
        <LoginForm baseUrl={baseUrl} />
      </div>
    </>
  );
}
