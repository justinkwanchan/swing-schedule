import { Metadata } from 'next';
import LoginForm from '../components/login-form';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Log in to your account',
};

export default function Login() {
  return <LoginForm isRegister={false} />;
}
