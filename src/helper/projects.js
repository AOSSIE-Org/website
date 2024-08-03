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
      'Agora is designed to support democratic elections using a variety of voting algorithms, providing flexibility and transparency in the voting process.',
    link: {
      href: 'https://github.com/AOSSIE-Org/Agora-Blockchain',
      label: 'Agora',
    },
    logo: AgoraLogo,
  },
  {
    name: 'Agora Vote Android',
    description:
      'This Android application leverages the Agora Web API to facilitate elections using various algorithms such as Oklahoma, Range Voting, Ranked Pairs, and Satisfaction Approval Voting.',
    link: {
      href: 'https://gitlab.com/aossie/agora-android',
      label: 'Agora-Android',
    },
    logo: AgoraLogo,
  },
  {
    name: 'Djed',
    description:
      'Djed is a formally verified crypto-backed algorithmic stablecoin protocol, ensuring stability and reliability in digital currency transactions.',
    link: { href: 'https://github.com/AOSSIE-Org/Djed-Solidity-WebDashboard', label: 'Djed' },
    logo: Djed,
  },
  {
    name: 'Pictopy',
    description:
      'PictoPy is a modern desktop application for managing digital photos with a focus on privacy. It offers advanced tagging capabilities based on objects, faces, and scenes to streamline gallery organization.',
    link: { href: 'https://github.com/AOSSIE-Org/PictoPy', label: 'PictoPy' },
    logo: PictoPy,
  },
  {
    name: 'EduAid',
    description:
      'EduAid is an online tool designed to generate short quizzes from educational content. It aids teachers and students in retaining important information, framing questions, and quickly revising content.',
    link: { href: 'https://github.com/AOSSIE-Org/EduAid', label: 'EduAid' },
    logo: DefaultLogo,
  },
  {
    name: 'OpenChat',
    description:
      'OpenChat is a decentralized platform for secure and private messaging and file sharing, built on blockchain technology to ensure data integrity and confidentiality.',
    link: { href: '#', label: 'OpenChat' },
    logo: DefaultLogo,
  },
  {
    name: 'Resonate',
    description:
      'Resonate is an open-source platform designed as an alternative to social voice platforms like Clubhouse, aimed at enhancing credibility within the open-source community and fostering user engagement.',
    link: { href: 'https://github.com/AOSSIE-Org/Resonate', label: 'Resonate' },
    logo: ResonateLogo,
  },
  {
    name: 'Social Street Smart',
    description:
      'Social Street Smart addresses issues related to abusive language and other online problems, leveraging advanced techniques to improve social interactions on the internet.',
    link: {
      href: 'https://github.com/AOSSIE-Org/Social-Street-Smart',
      label: 'Social-Street-Smart',
    },
    logo: SSSLogo,
  },
]

export default projects