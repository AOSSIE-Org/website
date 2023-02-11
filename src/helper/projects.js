import DefaultLogo from '@/images/default.png'
import AgoraLogo from '@/images/Agora.png';
import CarbonLogo from '@/images/Carbon.png';
import monumentoLogo from '@/images/monumento.png';
import scholarLogo from '@/images/scholar.png';
import SSSLogo from '@/images/SSS.png';

const projects = [
    {
      name: 'Agora Blockchain',
      description:
        'There isn’t just one voting algorithm, there’s hundreds. Therefore, we developed Agora to allow for democratic elections using any algorithm.',
      link: { href: 'https://gitlab.com/aossie/Agora', label: 'Agora' },
      logo: AgoraLogo
    },
    {
      name: 'Agora Vote Android',
      description:
        'This application uses Agora Web API as backend application. It allows for elections to be held by using multiple algorithms such as Oklahoma, RangeVoting, RankedPairs, Satisfaction Approval Voting.',
        link: { href: 'https://gitlab.com/aossie/agora-android', label: 'Agora-Android' },
      logo: AgoraLogo
    },
    {
      name:'EduAid',
      description:
        'A tool that can auto-generate short quizzes on the basis of the content provided.',
        link: { href: '#', label: 'EduAid' },
      logo: DefaultLogo
    },
    {
      name:  'Monumento',
      description:
        'Monumento is a social media for sharing landmarks, visited places and visualizing their 3D models right from a mobile device ...',
        link: { href: 'https://gitlab.com/aossie/monumento', label: 'Monumento' },
      logo: monumentoLogo
    },
    {
      name: 'OpenChat',
    description:
      'a decentralised platform for secure and private messaging and file sharing built on top of blockchain',
      link: { href: '#', label: 'OpenChat' },
      logo: DefaultLogo
    },
    {
      name: 'P2P Messaging- Flutter',
      description:
        'Chat application for Android and IOS in flutter/dart which sends messages Using Bluetooth & wifi-direct ...',
        link: { href: 'https://gitlab.com/aossie/p2p-messaging-flutter', label: 'P2P-Messaging-Flutter' },
      logo: DefaultLogo
    },
    {
      name: 'Resonate',
    description: 'a social voice platform',
    link: { href: '#', label: 'Resonate' },
      logo: DefaultLogo
    },
    {
      name: 'Social Street Smart',
    description:
      'With the adevent of Internet, the problems faced by the people have also grown. These include abusive languages.',
      link: { href: 'https://gitlab.com/aossie/social-street-smart', label: 'Social-Street-Smart' },
      logo: SSSLogo
    },
  ]

export default projects