import { Metadata } from 'next';
import LoginForm from '../components/login-form';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register a new account',
};

export default function Register() {
  return <LoginForm isRegister={true} />;
}
