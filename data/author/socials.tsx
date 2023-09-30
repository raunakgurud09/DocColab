import { ReactNode } from 'react';

// import {
//   GitHubLogo,
//   HashnodeLogo,
//   TwitterLogo,
//   LinkedinLogo,
// } from '@/components/Icons';
import { GithubIcon, HashIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/RaunakGurud',
    icon: <TwitterIcon />,
  },
  {
    id: 'github',
    name: 'Github',
    url: 'https://github.com/raunakgurud09',
    icon: <GithubIcon />,
  },
  {
    id: 'hashnode',
    name: 'Hashnode',
    url: 'https://raunakgurud.hashnode.dev',
    icon: <HashIcon />,
  },
  {
    id: 'linkedin',
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/raunak-gurud-3b8261205/',
    icon: <LinkedinIcon />,
  },
];

export default socials;

// {
//   id: 'mail',
//   name: 'Mail',
//   url: 'mailto:raunakgurud2121@gmail.com',
//   icon: <MailLogo />,
// },
