import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Speech detection",
    text: "Allow the chatbot to comprehend and react to voice commands, providing users with a hands-free, seamless app interaction experience.",
    date: "April 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Game-based engagement",
    text: "Incorporate game-like features, including badges and leaderboards, to motivate users to interact with the chatbot more often.",
    date: "April 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Personalized chatbot configuration",
    text: "Give users the ability to personalize the chatbot's look and behavior, creating a more interactive and enjoyable experience.",
    date: "April 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "API connectivity",
    text: "Enable the chatbot to pull data from external sources like weather or news APIs, offering more tailored and timely recommendations.",
    date: "April 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Powered by intelligent automation and robust security, it's the ultimate solution for teams striving to enhance efficiency and productivity";

export const collabContent = [
  {
    id: "0",
    title: "Effortless Connectivity",
    text: collabText,
  },
  {
    id: "1",
    title: "Intelligent Automation",
  },
  {
    id: "2",
    title: "Robust  Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Customized insights powered by an AI chatbot",
    price: "0",
    features: [
      "An intelligent AI chatbot that comprehends your questions",
      "Tailored recommendations aligned with your preferences",
      "Explore the app's features completely free of charge",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description:
      "Advanced AI chatbot, dedicated support, and a comprehensive analytics suite",
    price: "19.99",
    features: [
      "A sophisticated AI chatbot capable of interpreting complex inquiries",
      "A comprehensive analytics dashboard to monitor your interactions",
      "Fast-track support for quick resolution of any issues",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description:
      "Personalized AI chatbot, enhanced analytics, and exclusive account management",
    price: null,
    features: [
      "An AI chatbot designed to grasp your inquiries with precision.",
      "Recommendations tailored specifically to your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Inquire about anything",
    text: "Enables users to swiftly get answers to their queries without the hassle of navigating through various sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Enhance daily",
    text: "The app leverages natural language processing to interpret user queries and deliver precise and relevant answers.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect globally",
    text: "Engage with the AI chatbot anytime, from any device, ensuring maximum accessibility and convenience.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Enables users to swiftly get answers to their queries without the hassle of navigating through various sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Inquire about anything",
    text: "Enables users to swiftly get answers to their queries without the hassle of navigating through various sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Enhance daily",
    text: "The app leverages natural language processing to interpret user queries and deliver precise and relevant answers.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
