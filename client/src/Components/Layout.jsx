import Navbar from './Navbar';
import backgroundVideo from '../assets/bgv2.mp4';

const Layout = ({ children }) => {
  return (
    <div className="relative h-screen w-screen">
      <video
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;