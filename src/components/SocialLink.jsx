const SocialLink = () => {
  const socialLinksList = [
    { title: "GitHub", link: "https://github.com/" },
    { title: "Frontend Mentor", link: "https://frontendmentor.io/" },
    { title: "GitHub", link: "https://linkedin.com/" },
    { title: "Twitter", link: "https://x.com/" },
    { title: "Instagram", link: "https://instagram.com/" },
  ];
  return (
    <div className="h-screen flex items-center justify-center bg-[#141414]">
      <div className="bg-[#1F1F1F] p-8 rounded-lg">
        <div className="w-80 flex flex-col items-center">
          <div className="h-20 w-20 bg-white rounded-full"></div>
          <div className="py-2">
            <div className="w-full text-center text-2xl font-semibold text-white">
              Jessica Randall
            </div>
            <div className="w-full text-center text-sm font-bold text-[#bae330] py-2">
              London, United Kingdom
            </div>
            <div className="w-full text-center text-sm text-white pt-4">
              "Front-end developer and avid reader."
            </div>
          </div>
          {socialLinksList.map((socialLink) => (
            <LinkItem
              key={socialLink.link}
              title={socialLink.title}
              link={socialLink.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const LinkItem = ({ title, link }) => {
  return (
    <div className=" w-full text-sm font-semibold text-center bg-[#333333] text-white m-2 p-2 rounded-lg">
      <a href={link}>{title}</a>
    </div>
  );
};

export default SocialLink;
