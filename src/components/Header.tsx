import React from "react";
import Button from "./Button";
import PageTitle from "./PageTitle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-screen h-25 items-center justify-between border">
      <PageTitle title="This is a Title" />
      <div className="flex w-screen justify-center">
        <Button onClick={() => navigate("/players")} label="Players" />
        <Button onClick={() => navigate("/teams")} label="Teams" />
        <Button onClick={() => navigate("/spotlight")} label="Spotlight" />
      </div>
    </div>
  );
};

export default Header;
