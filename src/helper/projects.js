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
      'Agora enables democratic elections using a wide range of voting algorithms.',
    link: {
      href: 'https://github.com/AOSSIE-Org/Agora-Blockchain',
      label: 'Agora',
    },
    logo: AgoraLogo,
  },
  {
    name: 'Agora Vote Android',
    description:
      'Android app using Agora Web API to run elections with multiple voting algorithms.',
    link: {
      href: 'https://gitlab.com/aossie/agora-android',
      label: 'Agora-Android',
    },
    logo: AgoraLogo,
  },
  {
    name: 'Djed',
    description:
      'Djed is a formally verified, crypto-backed algorithmic stablecoin protocol.',
    link: { href: 'https://github.com/AOSSIE-Org/Djed-Solidity-WebDashboard', label: 'Djed' },
    logo: Djed,
  },
  {
    name: 'Pictopy',
    description:
      'PictoPy is a privacy-focused desktop app that simplifies gallery management with smart tagging for objects, faces, and scenes.',
    link: { href: 'https://github.com/AOSSIE-Org/PictoPy', label: 'PictoPy' },
    logo: PictoPy,
  },
  {
    name: 'EduAid',
    description:
      'EduAid generates short quizzes from educational content to help teachers and students review and retain key concepts.',
    link: { href: 'https://github.com/AOSSIE-Org/EduAid', label: 'EduAid' },
    logo: DefaultLogo,
  },
  {
    name: 'OpenChat',
    description:
      'A decentralized platform for secure, private messaging and file sharing backed by blockchain.',
    link: { href: '#', label: 'OpenChat' },
    logo: DefaultLogo,
  },
  {
    name: 'Resonate',
    description:
      'An open-source social voice platform to provide a credible Clubhouse-style alternative focused on community growth.',
    link: { href: 'https://github.com/AOSSIE-Org/Resonate', label: 'Resonate' },
    logo: ResonateLogo,
  },
  {
    name: 'Monumento',
    description:
      'Monumento integrates AR with social features to discover landmarks, check in, and connect with others.',
    link: { href: 'https://github.com/AOSSIE-Org/Monumento', label: 'Monumento' },
    logo: MonumentoLogo,
  },
  {
    name: 'Social Street Smart',
    description:
      'Social Street Smart detects and helps address abusive language online to promote safer interactions.',
    link: {
      href: 'https://github.com/AOSSIE-Org/Social-Street-Smart',
      label: 'Social-Street-Smart',
    },
    logo: SSSLogo,
  },
]


export default projects
