import DefaultLogo from '@/images/default.png'
import AgoraLogo from '@/images/Agora.png'
import Djed from '@/images/Djed.png'
import SSSLogo from '@/images/SSS.png'
import ResonateLogo from '@/images/Resonate.png'
import PictoPy from '@/images/Pictopy.png'
import MonumentoLogo from '@/images/monumento.png'



// data
const projects = [
  // Ready to download
  {
    slug: 'pictopy',
    name: 'PictoPy',
    description: 'PictoPy is a modern desktop app designed to transform the handling of digital photos. It facilitates efficient gallery management with a robust focus on privacy.',
    link: { href: 'https://github.com/AOSSIE-Org/PictoPy', label: 'PictoPy' },
    logo: PictoPy,
    status: 'production',
    category: 'Ready to download',
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
    feedbacks: [
      { user: 'John Doe', comment: 'Amazing tool for organizing my gallery!', rating: 5 },
      { user: 'Jane Smith', comment: 'Works well, but could use more features.', rating: 4 }
    ]
  },
  {
    slug: 'agora-vote-android',
    name: 'Agora Vote Android',
    description: 'This application uses Agora Web API as backend application. It allows for elections to be held by using multiple algorithms.',
    link: {
      href: 'https://gitlab.com/aossie/agora-android',
      label: 'Agora-Android',
    },
    logo: AgoraLogo,
    status: 'production',
    category: 'Ready to download',
    downloadLink: 'https://gitlab.com/aossie/agora-android/-/releases',
    githubLink: 'https://gitlab.com/aossie/agora-android',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for Agora Vote Android

1. **Download APK**: Get the latest APK from the releases page.
2. **Enable Unknown Sources**: Go to Settings > Security and enable installation from unknown sources if required.
3. **Install APK**: Open the APK file and tap Install.
4. **Connect**: Launch the app and connect to an Agora server instance.
`,
    feedbacks: [
      { user: 'Voter123', comment: 'Secure and easy to use.', rating: 5 }
    ]
  },

  // Production ready
  {
    slug: 'djed',
    name: 'Djed',
    description: 'Djed is a Formally Verified Crypto-Backed Algorithmic Stablecoin Protocol.',
    link: { href: 'https://github.com/AOSSIE-Org/Djed-Solidity-WebDashboard', label: 'Djed' },
    logo: Djed,
    status: 'ongoing',
    category: 'Production ready',
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
    feedbacks: []
  },

  // Production ready (from GitHub)
  {
    slug: 'devr-ai',
    name: 'Devr.AI',
    description:
      'An open-source AI-powered platform designed to automate and enhance developer relations. It leverages Generative AI and agentic workflows to streamline community engagement and outreach.',
    link: { href: 'https://github.com/AOSSIE-Org/Devr.AI', label: 'Devr.AI' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/Devr.AI',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for Devr.AI\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/Devr.AI.git\`\n2. Install dependencies: \`pip install -r requirements.txt\`\n3. Configure environment variables as described in the README.\n4. Run the application: \`python main.py\`\n`,
    feedbacks: []
  },
  {
    slug: 'rein',
    name: 'Rein',
    description:
      'A cross-platform LAN-based remote input controller that allows users to control devices over a local network seamlessly.',
    link: { href: 'https://github.com/AOSSIE-Org/Rein', label: 'Rein' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/Rein',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for Rein\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/Rein.git\`\n2. Follow the platform-specific build instructions in the README.\n3. Connect both devices to the same LAN.\n4. Launch Rein on both devices and pair them.\n`,
    feedbacks: []
  },
  {
    slug: 'open-verifiable-llm',
    name: 'OpenVerifiableLLM',
    description:
      'Local Fully Open, Open-Weight, Open-Data, Verifiable LLMs. A project focused on building transparent and trustworthy large language models.',
    link: { href: 'https://github.com/AOSSIE-Org/OpenVerifiableLLM', label: 'OpenVerifiableLLM' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/OpenVerifiableLLM',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for OpenVerifiableLLM\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/OpenVerifiableLLM.git\`\n2. Install dependencies: \`pip install -r requirements.txt\`\n3. Download model weights as specified in the README.\n4. Run the verification pipeline: \`python run.py\`\n`,
    feedbacks: []
  },
  {
    slug: 'libred',
    name: 'LibrEd',
    description:
      'A self-learning assistant that helps users learn and study more effectively using AI-powered tools and personalized learning paths.',
    link: { href: 'https://github.com/AOSSIE-Org/LibrEd', label: 'LibrEd' },
    logo: DefaultLogo,
    status: 'production',
    category: 'Ready to download',
    downloadLink: 'https://github.com/AOSSIE-Org/LibrEd/releases',
    githubLink: 'https://github.com/AOSSIE-Org/LibrEd',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for LibrEd\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/LibrEd.git\`\n2. Install dependencies: \`pip install -r requirements.txt\`\n3. Configure your learning preferences in the settings file.\n4. Start the assistant: \`python app.py\`\n`,
    feedbacks: []
  },
  {
    slug: 'websift',
    name: 'WebSift',
    description:
      'A tool to convert webpages to MML-ready formats, enabling seamless extraction and transformation of web content for machine learning pipelines.',
    link: { href: 'https://github.com/AOSSIE-Org/WebSift', label: 'WebSift' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/WebSift',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for WebSift\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/WebSift.git\`\n2. Install dependencies as described in the README.\n3. Provide the target URL or HTML content.\n4. Run the conversion pipeline to generate MML-ready output.\n`,
    feedbacks: []
  },
  {
    slug: 'inpact-ai',
    name: 'InPactAI',
    description:
      'An open-source AI-powered platform designed to connect content creators, brands, and agencies through data-driven insights leveraging Generative AI.',
    link: { href: 'https://github.com/AOSSIE-Org/InPactAI', label: 'InPactAI' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/InPactAI',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for InPactAI\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/InPactAI.git\`\n2. Install dependencies: \`npm install\` or \`pip install -r requirements.txt\`\n3. Set up API keys and environment variables as described in the README.\n4. Launch the platform: \`npm start\` or \`python app.py\`\n`,
    feedbacks: []
  },
  {
    slug: 'babynest',
    name: 'BabyNest',
    description:
      'A comprehensive baby care and tracking application that helps parents monitor and manage their baby\'s daily activities, milestones, and health.',
    link: { href: 'https://github.com/AOSSIE-Org/BabyNest', label: 'BabyNest' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/BabyNest',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for BabyNest\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/BabyNest.git\`\n2. Install dependencies as described in the README.\n3. Configure the database and environment variables.\n4. Run the application and create your first baby profile.\n`,
    feedbacks: []
  },
  {
    slug: 'smartnotes',
    name: 'SmartNotes',
    description:
      'An intelligent note-taking application that leverages AI to help users organize, search, and manage their notes more effectively.',
    link: { href: 'https://github.com/AOSSIE-Org/SmartNotes', label: 'SmartNotes' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/SmartNotes',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for SmartNotes\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/SmartNotes.git\`\n2. Install dependencies as described in the README.\n3. Configure the AI model and storage backend.\n4. Launch the application and start creating smart notes.\n`,
    feedbacks: []
  },
  {
    slug: 'orgexplorer',
    name: 'OrgExplorer',
    description:
      'An intuitive dashboard to explore large GitHub organizations, providing insights into repositories, contributors, and activity metrics.',
    link: { href: 'https://github.com/AOSSIE-Org/OrgExplorer', label: 'OrgExplorer' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/OrgExplorer',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for OrgExplorer\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/OrgExplorer.git\`\n2. Install dependencies: \`npm install\`\n3. Set your GitHub API token in the environment variables.\n4. Start the dashboard: \`npm start\`\n`,
    feedbacks: []
  },
  {
    slug: 'ell-ena',
    name: 'Ell-ena',
    description:
      'A smart AI product manager that streamlines task, project, and meeting management through a simple chat interface.',
    link: { href: 'https://github.com/AOSSIE-Org/Ell-ena', label: 'Ell-ena' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/Ell-ena',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for Ell-ena\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/Ell-ena.git\`\n2. Install dependencies as described in the README.\n3. Configure AI model API keys and project settings.\n4. Launch Ell-ena and start managing tasks via chat.\n`,
    feedbacks: []
  },
  {
    slug: 'zplit',
    name: 'Zplit',
    description:
      'A payment splitting app that makes it easy to divide expenses among groups, track balances, and settle debts.',
    link: { href: 'https://github.com/AOSSIE-Org/Zplit', label: 'Zplit' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/Zplit',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for Zplit\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/Zplit.git\`\n2. Install Flutter dependencies: \`flutter pub get\`\n3. Run the app on an emulator or device: \`flutter run\`\n4. Create a group and start splitting expenses.\n`,
    feedbacks: []
  },
  {
    slug: 'docpilot',
    name: 'DocPilot',
    description:
      'A new age EMR (Electronic Medical Records) application using conversational AI at its best, streamlining healthcare documentation.',
    link: { href: 'https://github.com/AOSSIE-Org/DocPilot', label: 'DocPilot' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/DocPilot',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for DocPilot\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/DocPilot.git\`\n2. Install dependencies as described in the README.\n3. Configure the AI model and database connections.\n4. Start the server and access the dashboard in your browser.\n`,
    feedbacks: []
  },
  {
    slug: 'perspective',
    name: 'Perspective',
    description:
      'A tool for analyzing and understanding different perspectives on topics, enabling balanced and informed viewpoints.',
    link: { href: 'https://github.com/AOSSIE-Org/Perspective', label: 'Perspective' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/Perspective',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for Perspective\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/Perspective.git\`\n2. Install dependencies as described in the README.\n3. Configure API keys for the analysis engine.\n4. Run the application and start exploring perspectives.\n`,
    feedbacks: []
  },
  {
    slug: 'neurotrack',
    name: 'NeuroTrack',
    description:
      'A neuroscience-focused tracking application for monitoring and analyzing neural activity and cognitive performance.',
    link: { href: 'https://github.com/AOSSIE-Org/NeuroTrack', label: 'NeuroTrack' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/NeuroTrack',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for NeuroTrack\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/NeuroTrack.git\`\n2. Install dependencies as described in the README.\n3. Connect your tracking hardware or use sample data.\n4. Launch the application and begin tracking.\n`,
    feedbacks: []
  },
  {
    slug: 'codingagent',
    name: 'CodingAgent',
    description:
      'An AI-powered coding agent that assists developers with code generation, debugging, and software development tasks.',
    link: { href: 'https://github.com/AOSSIE-Org/CodingAgent', label: 'CodingAgent' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/CodingAgent',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for CodingAgent\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/CodingAgent.git\`\n2. Install dependencies as described in the README.\n3. Configure your AI model API keys.\n4. Run the agent and start coding with AI assistance.\n`,
    feedbacks: []
  },
  {
    slug: 'starcross',
    name: 'Starcross',
    description:
      'An astronomy application that helps users explore and identify celestial objects, constellations, and astronomical events.',
    link: { href: 'https://github.com/AOSSIE-Org/starcross', label: 'Starcross' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/starcross',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for Starcross\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/starcross.git\`\n2. Install dependencies as described in the README.\n3. Configure location services for accurate star mapping.\n4. Launch the app and start exploring the night sky.\n`,
    feedbacks: []
  },
  {
    slug: 'carbon-footprint',
    name: 'CarbonFootprint',
    description:
      'A browser extension that helps users track and reduce their carbon footprint by displaying CO2 emissions for various activities.',
    link: { href: 'https://github.com/AOSSIE-Org/CarbonFootprint', label: 'CarbonFootprint' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/CarbonFootprint',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for CarbonFootprint\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/CarbonFootprint.git\`\n2. Install dependencies: \`npm install\`\n3. Build the extension: \`npm run build\`\n4. Load the unpacked extension in your browser's developer mode.\n`,
    feedbacks: []
  },
  {
    slug: 'mind-the-word',
    name: 'MindTheWord',
    description:
      'A browser extension for language learning that randomly translates words on webpages to help users learn new languages while browsing.',
    link: { href: 'https://github.com/AOSSIE-Org/MindTheWord', label: 'MindTheWord' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/MindTheWord',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for MindTheWord\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/MindTheWord.git\`\n2. Install dependencies: \`npm install\`\n3. Build the extension: \`npm run build\`\n4. Load the extension in Chrome/Firefox developer mode and configure your target language.\n`,
    feedbacks: []
  },
  {
    slug: 'aossie-scholar',
    name: 'Aossie Scholar',
    description:
      'An academic search and research tool that helps scholars discover, organize, and analyze academic papers and publications.',
    link: { href: 'https://github.com/AOSSIE-Org/Aossie-Scholar', label: 'Aossie-Scholar' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Production ready',
    githubLink: 'https://github.com/AOSSIE-Org/Aossie-Scholar',
    discordLink: 'https://discord.com/invite/6mHZkbJ',
    setupGuide: `# Setup Guide for Aossie Scholar\n\n1. Clone the repository: \`git clone https://github.com/AOSSIE-Org/Aossie-Scholar.git\`\n2. Install dependencies: \`npm install\`\n3. Configure API keys for academic databases.\n4. Start the application: \`npm start\`\n`,
    feedbacks: []
  },

  // Ongoing
  {
    name: 'Agora Blockchain',
    description:
      'There isn’t just one voting algorithm, there’s hundreds. Therefore, we developed Agora to allow for democratic elections using any algorithm.',
    link: {
      href: 'https://github.com/AOSSIE-Org/Agora-Blockchain',
      label: 'Agora',
    },
    logo: AgoraLogo,
    status: 'ongoing',
    category: 'Ongoing'
  },
  {
    name: 'EduAid',
    description:
      'An online tool that can generate short quizzes on input educational content can be of great use to teachers and students alike as it can help retain important information, frame questions and quickly revise large chunks of content.',
    link: { href: 'https://github.com/AOSSIE-Org/EduAid', label: 'EduAid' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Ongoing'
  },
  {
    name: 'OpenChat',
    description:
      'a decentralised platform for secure and private messaging and file sharing built on top of blockchain',
    link: { href: '#', label: 'OpenChat' },
    logo: DefaultLogo,
    status: 'ongoing',
    category: 'Ongoing'
  },
  {
    name: 'Resonate',
    description:
      'With the rising popularity of social voice platforms such as Clubhouse, it is high time for an Open Source alternative. A platform like this would not only enhance credibility within the open-source community but also attract more users and foster growth.  ',
    link: { href: 'https://github.com/AOSSIE-Org/Resonate', label: 'Resonate' },
    logo: ResonateLogo,
    status: 'ongoing',
    category: 'Ongoing'
  },
  {
    name: 'Monumento',
    description:
      'Monumento is an AR-integrated social app that transforms how you connect with the world’s most iconic landmarks. Through Monumento, you can check in to popular monuments, explore famous sites, and discover new people, all within a social platform.',
    link: { href: 'https://github.com/AOSSIE-Org/Monumento', label: 'Monumento' },
    logo: MonumentoLogo,
    status: 'ongoing',
    category: 'Ongoing'
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
    status: 'ongoing',
    category: 'Ongoing'
  },
]


export default projects
