import { useState, useEffect } from "react";
import { HomeNavbarExpanded, HomeNavbarCollapsed } from "./HomeNavbarSize";

function HomeNavbar() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>{isLargeScreen ? <HomeNavbarExpanded /> : <HomeNavbarCollapsed />}</>
  );
}

export default HomeNavbar;
