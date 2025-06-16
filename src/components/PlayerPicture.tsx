import React from "react";

interface PlayerPictureComponentProps {
  picUrl: string;
}

const PlayerPicture = ({ picUrl }: PlayerPictureComponentProps) => {
  return (
    <div className="w-full content-center">
      <img src={picUrl} />
    </div>
  );
};

export default PlayerPicture;
