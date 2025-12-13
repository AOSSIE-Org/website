import DefaultLogo from '@/images/default.png'
import AgoraLogo from '@/images/Agora.png'
import Djed from '@/images/Djed.png'
import SSSLogo from '@/images/SSS.png'
import ResonateLogo from '@/images/Resonate.png'
import PictoPy from '@/images/Pictopy.png'
import MonumentoLogo from '@/images/monumento.png'



// data
const projects = [
  {
    name: 'Agora Blockchain',
    description:
      'A blockchain-based voting framework supporting multiple election algorithms for democratic processes.',
    link: {
      href: 'https://github.com/AOSSIE-Org/Agora-Blockchain',
      label: 'Agora',
    },
    logo: AgoraLogo,
  },
  {
    name: 'Agora Vote Android',
    description:
      'Android app for creating and participating in elections via the Agora Web API, supporting methods like Oklahoma, Range Voting, Ranked Pairs, and Satisfaction Approval Voting.',
    link: {
      href: 'https://gitlab.com/aossie/agora-android',
      label: 'Agora-Android',
    },
    logo: AgoraLogo,
  },
  {
    name: 'Djed',
    description:
      'Formally verified, crypto‑backed algorithmic stablecoin protocol.',
    link: { href: 'https://github.com/AOSSIE-Org/Djed-Solidity-WebDashboard', label: 'Djed' },
    logo: Djed,
  },
  {
    name: 'Pictopy',
    description:
      'Privacy‑focused desktop photo manager with smart tagging for objects, faces, and scenes.',
    link: { href: 'https://github.com/AOSSIE-Org/PictoPy', label: 'PictoPy' },
    logo: PictoPy,
  },
  {
    name: 'EduAid',
    description:
      'Generates short quizzes from educational content to help teachers and students retain key information and review quickly.',
    link: { href: 'https://github.com/AOSSIE-Org/EduAid', label: 'EduAid' },
    logo: DefaultLogo,
  },
  {
    name: 'OpenChat',
    description:
      'Decentralized platform for secure, private messaging and file sharing built on blockchain.',
    link: { href: 'https://github.com/AOSSIE-Org/OpenPeerChat-flutter', label: 'OpenChat' },
    logo: DefaultLogo,
  },
  {
    name: 'Resonate',
    description:
      'Open‑source social voice platform—an alternative to Clubhouse—focused on community, credibility, and growth.',
    link: { href: 'https://github.com/AOSSIE-Org/Resonate', label: 'Resonate' },
    logo: ResonateLogo,
  },
  {
    name: 'Monumento',
    description:
      'AR‑integrated social app to check in at landmarks, explore sites, and connect with people.',
    link: { href: 'https://github.com/AOSSIE-Org/Monumento', label: 'Monumento' },
    logo: MonumentoLogo,
  },
  {
    name: 'Social Street Smart',
    description:
      'Browser tooling and ML models to detect abusive language, misinformation, click‑bait, and malicious sites.',
    link: {
      href: 'https://github.com/AOSSIE-Org/Social-Street-Smart',
      label: 'Social-Street-Smart',
    },
    logo: SSSLogo,
  },
]


export default projects
