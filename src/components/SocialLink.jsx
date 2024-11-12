const SocialLink = () => {
  const socialLinksList = [
    { title: 'GitHub', link: 'https://github.com/' },
    { title: 'Frontend Mentor', link: 'https://frontendmentor.io/' },
    { title: 'GitHub', link: 'https://linkedin.com/' },
    { title: 'Twitter', link: 'https://x.com/' },
    { title: 'Instagram', link: 'https://instagram.com/' },
  ]
  return (
    <div className="flex h-screen items-center justify-center bg-[#141414]">
      <div className="rounded-lg bg-[#1F1F1F] p-8">
        <div className="flex w-80 flex-col items-center">
          <div className="h-20 w-20 rounded-full bg-white"></div>
          <div className="py-2">
            <div className="w-full text-center text-2xl font-semibold text-white">
              Jessica Randall
            </div>
            <div className="w-full py-2 text-center text-sm font-bold text-[#bae330]">
              London, United Kingdom
            </div>
            <div className="w-full pt-4 text-center text-sm text-white">
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
  )
}

const LinkItem = ({ title, link }) => {
  return (
    <div className="m-2 w-full rounded-lg bg-[#333333] p-2 text-center text-sm font-semibold text-white">
      <a href={link}>{title}</a>
    </div>
  )
}

export default SocialLink
