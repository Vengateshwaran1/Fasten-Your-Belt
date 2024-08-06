import Navbar from './Navbar';
import backgroundImg from '../assets/bg.jpg';

const Layout = ({children}) => {
  return (
    <div
      className="md:h-screen w-screen md:bg-cover md:bg-no-repeat md:bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;