import BandsContainer from "../Components/BandsContainer";
import NavBar from "../Components/NavBar";
import style from "./styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={style.container}>
      <NavBar />
      <BandsContainer />
    </div>
  );
};

export default HomePage;
