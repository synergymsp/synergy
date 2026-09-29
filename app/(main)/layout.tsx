import { ReactNode, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import Loading from '@/app/(main)/loading';
import Footer from '@/component/Footer/Footer';
import { HeaderInfo } from '@/component/HeaderInfo/HeaderInfo';

import 'react-toastify/dist/ReactToastify.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <div className="flex min-h-screen flex-col">
        <HeaderInfo />
        <Suspense fallback={<Loading />}>
          <main className="flex-1">{children}</main>
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
