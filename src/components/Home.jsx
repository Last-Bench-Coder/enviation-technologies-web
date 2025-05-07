import HomeAbout from "./shared/HomeAbout";
import HomeCategories from "./shared/HomeCategories";
import HomeContact from "./shared/HomeContact";
import HomeProduct from "./shared/HomeProduct";
import Videos from "./shared/Videos"; // Adjust the path as necessary

function Home() {
  return (
    <div>
      <Videos />
     <HomeCategories />
     <HomeAbout />
     <HomeProduct />
     <HomeContact />
    </div>
  );
}

export default Home;
