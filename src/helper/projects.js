import DefaultLogo from '@/images/default.png'
import AgoraLogo from '@/images/Agora.png'
import Djed from '@/images/Djed.png'
import SSSLogo from '@/images/SSS.png'
import ResonateLogo from '@/images/Resonate.png'
import PictoPy from '@/images/Pictopy.png'



// data
const projects = [
  {
    name: 'Agora Blockchain',
    description:
      'There isn’t just one voting algorithm, there’s hundreds. Therefore, we developed Agora to allow for democratic elections using any algorithm.',
    link: {
      href: 'https://github.com/AOSSIE-Org/Agora-Blockchain',
      label: 'Agora',
    },
    logo: AgoraLogo,
  },
  {
    name: 'Agora Vote Android',
    description:
      'This application uses Agora Web API as backend application. It allows for elections to be held by using multiple algorithms such as Oklahoma, RangeVoting, RankedPairs, Satisfaction Approval Voting.',
    link: {
      href: 'https://gitlab.com/aossie/agora-android',
      label: 'Agora-Android',
    },
    logo: AgoraLogo,
  },
  {
    name: 'Djed',
    description:
      'Djed is a Formally Verified Crypto-Backed Algorithmic Stablecoin Protocol.',
    link: { href: 'https://github.com/AOSSIE-Org/Djed-Solidity-WebDashboard', label: 'Djed' },
    logo: Djed,
  },
  {
    name: 'Pictopy',
    description:
      'PictoPy is a modern desktop app designed to transform the handling of digital photos. It facilitates efficient gallery management with a robust focus on privacy, offering smart tagging capabilities for photos based on objects, faces, or scenes.',
    link: { href: 'https://github.com/AOSSIE-Org/PictoPy', label: 'PictoPy' },
    logo: PictoPy,
  },
  {
    name: 'EduAid',
    description:
      'An online tool that can generate short quizzes on input educational content can be of great use to teachers and students alike as it can help retain important information, frame questions and quickly revise large chunks of content.',
    link: { href: 'https://github.com/AOSSIE-Org/EduAid', label: 'EduAid' },
    logo: DefaultLogo,
  },
  {
    name: 'OpenPeerChat',
    description:
      'a decentralised platform for secure and private messaging and file sharing built on top of blockchain',
    link: { href: 'https://github.com/AOSSIE-Org/OpenPeerChat-flutter', label: 'OpenChat' },
    logo: DefaultLogo,
  },
  {
    name: 'Resonate',
    description:
      'With the rising popularity of social voice platforms such as Clubhouse, it is high time for an Open Source alternative. A platform like this would not only enhance credibility within the open-source community but also attract more users and foster growth.  ',
    link: { href: 'https://github.com/AOSSIE-Org/Resonate', label: 'Resonate' },
    logo: ResonateLogo,
  },
  {
    name: 'Social Street Smart',
    description:
      'With the adevent of Internet, the problems faced by the people have also grown. These include abusive languages.',
    link: {
      href: 'https://github.com/AOSSIE-Org/Social-Street-Smart',
      label: 'Social-Street-Smart',
    },
    logo: SSSLogo,
  },
]


export default projects
