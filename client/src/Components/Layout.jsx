import Navbar from './Navbar';
import backgroundImg from '../assets/bg.jpg';

const Layout = ({children}) => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;