interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return <div className="flex h-10 w-screen justify-center">{title}</div>;
};

export default PageTitle;
