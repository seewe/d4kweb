import HomeNavbar from "../views/components/HomeNavbar";
import HomeCover from "../views/components/HomeCover";
import HomeMessage from "../views/components/HomeMessage";
import HomeAboutus from "../views/components/HomeAboutus";
import HomeBlogs from "../views/components/HomeBlogs";
import HomeContact from "../views/components/HomeContact";
import HomeExperts from "../views/components/HomeExperts";

function HomePage() {
  return (
    <>
      <HomeCover />
      <HomeNavbar />
      <HomeMessage />
      <HomeAboutus />
      <HomeExperts />
      <HomeBlogs />
      <HomeContact />
    </>
  );
}

export default HomePage;
