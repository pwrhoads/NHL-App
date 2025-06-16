interface TeamLogoComponentProps {
  logoUrl: string;
}

const TeamLogo = ({ logoUrl }: TeamLogoComponentProps) => {
  return (
    <div className="w-[50%] h-full content-center">
      <img src={logoUrl} />
    </div>
  );
};

export default TeamLogo;
