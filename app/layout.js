import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import AuthProvider from './providers/AuthProvider';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: 'Millennial Wealth',
  description: 'A blog for Millennials about investing and saving'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="bg-secondary">
        <AuthProvider>
          <Navbar></Navbar>

          <main className=" bg-secondary ">{children}</main>

          <Footer></Footer>
        </AuthProvider>
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
