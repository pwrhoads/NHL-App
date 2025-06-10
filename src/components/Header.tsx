import Button from "./Button";
import PageTitle from "./PageTitle";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pageTitleMap: Record<string, string> = {
    "/": "Home",
    "/games": "Today's Games",
    "/players": "Player Search",
    "/teams": "Team Lookup",
    "/spotlight": "Spotlight",
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/games", label: "Games" },
    { path: "/players", label: "Players" },
    { path: "/teams", label: "Teams" },
    { path: "/spotlight", label: "Spotlight" },
  ];

  const title = pageTitleMap[location.pathname] || "Default Title";

  return (
    <div className="flex flex-col w-screen h-25 items-center justify-between">
      <PageTitle title={title} />
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        {navItems.map(({ path, label }) => {
          const isActive = location.pathname === path;
          const buttonStyle = isActive
            ? "bg-blue-600 text-white font-bold"
            : "bg-gray-200 hover:bg-gray-300";

          return (
            <Button
              key={path}
              onClick={() => navigate(path)}
              label={label}
              className={buttonStyle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
