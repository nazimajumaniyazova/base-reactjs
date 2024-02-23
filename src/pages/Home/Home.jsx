import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
