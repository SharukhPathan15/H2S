// Import all 12 images from your assets folder
import challenge1 from "../assets/challenges/img1.png";
import challenge2 from "../assets/challenges/img2.png";
import challenge3 from "../assets/challenges/img3.png";
import challenge4 from "../assets/challenges/img4.png";
import challenge5 from "../assets/challenges/img5.png";
import challenge6 from "../assets/challenges/img6.png";
import challenge7 from "../assets/challenges/img7.png";
import challenge8 from "../assets/challenges/img8.png";
import challenge9 from "../assets/challenges/img9.png";
import challenge10 from "../assets/challenges/img10.png";
import challenge11 from "../assets/challenges/img11.png";
import challenge12 from "../assets/challenges/img12.png";



export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "How to participate?", href: "#how-to" },
  { label: "Challenges", href: "#challenges" },
  { label: "Schedules", href: "#schedule" },
  { label: "Rewards", href: "#rewards" },
  { label: "FAQs", href: "#faq" },
];

export const PARTICIPANT_CARDS = [
  { title: "Undergraduate\nStudents" },
  { title: "Graduate/ Postgraduate\nStudents" },
  { title: "PhD Students/\nResearch Scholars" },
];

export const WHY_PARTICIPATE = [
  {
    side: "left",
    title: "Mentorship from Experts",
    desc: "Gain invaluable insights and guidance from experienced technologists and domain experts.",
  },
  {
    side: "left",
    title: "Networking",
    desc: "Connect with peers, professionals, and innovation leaders from across the nation.",
  },
  {
    side: "right",
    title: "Internship Opportunities",
    desc: "Stand a chance to secure internships at top institutions and innovation labs.",
  },
  {
    side: "right",
    title: "Real-World Impact",
    desc: "Contribute to meaningful challenges that aim to improve lives and systems at scale.",
  },
];

export const HOW_TO_STEPS = [
  {
    icon: "edit.svg",
    title: "Register\nfor Hackathon",
    desc: "Sign up now to participate in the hackathon.",
  },
  {
    icon: "group.svg",
    title: "Form\nyour Teams",
    desc: "Collaborate with like-minded individuals to form teams.",
  },
  {
    icon: "mountain.svg",
    title: "Choose\na Challenge",
    desc: "Select from the list of challenges provided.",
  },
  {
    icon: "shuttle.svg",
    title: "Innovate\nand Develop",
    desc: "Work on your solutions, supported by resources and mentorship.",
  },
  {
    icon: "idea.svg",
    title: "Submit\nYour Solution",
    desc: "Present your innovative ideas for evaluation.",
  },
];

export const CHALLENGES = [
  {
    id: "01",
    desc: "Develop an AI-driven solution to dynamically control traffic signals based on live camera feeds and vehicle density.",
    img: challenge1,
  },
  {
    id: "02",
    desc: "Create a web or mobile application that integrates wearable data to provide health insights and medication reminders.",
    img: challenge2,
  },
  {
    id: "03",
    desc: "Build an NLP-based tool to scan long legal contracts and output simplified summaries with key clauses and deadlines.",
    img: challenge3,
  },
  {
    id: "04",
    desc: "Design a predictive model using remote sensing data and live hydrology feeds to forecast and alert flood risks in urban zones.",
    img: challenge4,
  },
  {
    id: "05",
    desc: "Create a decentralized platform that allows institutions to issue and verify digital certificates securely.",
    img: challenge5,
  },
  {
    id: "06",
    desc: "Design a prototype that enables prospective students to explore university campuses remotely with immersive visuals.",
    img: challenge6,
  },
  {
    id: "07",
    desc: "Build a machine-learning system that classifies waste into biodegradable, recyclable, and hazardous categories using a live camera feed.",
    img: challenge7,
    featured: true,
  },
  {
    id: "08",
    desc: "Develop a communication app that uses peer-to-peer protocols or SMS fallback to function in areas with limited internet.",
    img: challenge8,
  },
  {
    id: "09",
    desc: "Build an AI-driven app that uses computer vision to translate ISL gestures into text and speech in multiple Indian languages.",
    img: challenge9,
  },
  {
    id: "10",
    desc: "Design a conversational assistant trained to provide mental health first aid and connect users to professionals during crises.",
    img: challenge10,
  },
  {
    id: "11",
    desc: "Build a pipeline that processes aerial imagery to detect crop diseases and recommend corrective actions.",
    img: challenge11,
  },
  {
    id: "12",
    desc: "Create a mobile assistant that helps visually impaired users navigate unfamiliar environments using spatial audio cues.",
    img: challenge12,
  },
];

export const TIMELINE_EVENTS = [
  {
    label: "Registrations and Idea Submission Open",
    date: "Thu, Jul 04, 2026",
  },
  {
    label: "Introductory and Problem Statement Explainer Session",
    date: "Thu, Jul 08, 2026",
  },
  { label: "Mentor-Mentee Connects – Begins", date: "Thu, Jul 08, 2026" },
  { label: "Mentor-Mentee Connects – Ends", date: "Tue, Jul 16, 2026" },
  { label: "Final Submission Deadline", date: "Fri, Jul 25, 2026" },
  { label: "Results Announcement", date: "Mon, Aug 04, 2026" },
];

export const REWARDS = [
  {
    title: "Mentorship from Experts",
    desc: "Work under the guidance of domain professionals and technology mentors.",
    gradient: "from-purple-900/60 to-purple-800/30",
  },
  {
    title: "Recognition and Internship Opportunities",
    desc: "Outstanding performers may receive offers for internships or collaboration opportunities.",
    gradient: "from-violet-900/60 to-purple-700/30",
  },
];

export const FAQS = [
  {
    q: "Who can participate in the hackathon?",
    a: "Undergraduate, Graduate/Postgraduate, and PhD students currently enrolled in an Indian institution.",
  },
  {
    q: "What should be the ideal team size?",
    a: "Each team must consist of 3 to 4 members, possibly from different colleges/universities.",
  },
  {
    q: "What is the cost of participating?",
    a: "Participation is entirely free. No registration or submission fee is required.",
  },
  {
    q: "Can a recent graduate participate?",
    a: "Only current students from the 2024–25 academic year are eligible.",
  },
];

export const HACKATHON_IMAGES = [
  { src: "/images/img1.jpg", alt: "Person working on laptop" },
  { src: "/images/img2.jpg", alt: "Holographic globe" },
  { src: "/images/img3.jpg", alt: "VR headset user" },
  { src: "/images/img4.jpg", alt: "Team collaboration" },
];
