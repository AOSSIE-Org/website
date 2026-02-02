import AgoraLogo from '@/images/Agora.png'
import PictoPy from '@/images/Pictopy.png'
import Djed from '@/images/Djed.png'

const products = [
  {
    slug: 'pictopy',
    name: 'PictoPy',
    description: 'PictoPy is a modern desktop app designed to transform the handling of digital photos. It facilitates efficient gallery management with a robust focus on privacy.',
    logo: PictoPy,
    status: 'production',
    downloadLink: 'https://github.com/AOSSIE-Org/PictoPy/releases',
    githubLink: 'https://github.com/AOSSIE-Org/PictoPy',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for PictoPy

1. **Download the Installer**: Go to the releases page and download the appropriate installer for your operating system.
2. **Run the Installer**: Double-click the downloaded file and follow the on-screen instructions.
3. **Launch the App**: Open PictoPy from your applications folder.
4. **Grant Permissions**: Allow access to your photo directories when prompted.

You are now ready to organize your photos!
`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    feedbacks: [
      { user: 'John Doe', comment: 'Amazing tool for organizing my gallery!', rating: 5 },
      { user: 'Jane Smith', comment: 'Works well, but could use more features.', rating: 4 }
    ]
  },
  {
    slug: 'agora-vote-android',
    name: 'Agora Vote Android',
    description: 'This application uses Agora Web API as backend application. It allows for elections to be held by using multiple algorithms.',
    logo: AgoraLogo,
    status: 'production',
    downloadLink: 'https://gitlab.com/aossie/agora-android/-/releases',
    githubLink: 'https://gitlab.com/aossie/agora-android',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for Agora Vote Android

1. **Download APK**: Get the latest APK from the releases page.
2. **Enable Unknown Sources**: Go to Settings > Security and enable installation from unknown sources if required.
3. **Install APK**: Open the APK file and tap Install.
4. **Connect**: Launch the app and connect to an Agora server instance.
`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    feedbacks: [
      { user: 'Voter123', comment: 'Secure and easy to use.', rating: 5 }
    ]
  },
  {
    slug: 'djed',
    name: 'Djed',
    description: 'Djed is a Formally Verified Crypto-Backed Algorithmic Stablecoin Protocol.',
    logo: Djed,
    status: 'ongoing',
    downloadLink: 'https://github.com/AOSSIE-Org/Djed-Solidity-WebDashboard',
    githubLink: 'https://github.com/AOSSIE-Org/Djed-Solidity-WebDashboard',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for Djed

Djed runs as a web dashboard. You can deploy it locally or access the hosted version.

## Local Deployment
1. Clone the repository.
2. Run \`npm install\`.
3. Run \`npm start\`.
`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    feedbacks: []
  }
]

export default products
