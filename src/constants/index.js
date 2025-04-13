const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  
];

const counterItems = [
  { value: 500, suffix: "+", label: "DSA Problems Solved" },
  { value: 12, suffix: "+", label: "Technologies Mastered" },
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 300, suffix: "+", label: "GitHub Commits" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Development",
    desc: "Creating responsive and dynamic web apps using modern technologies like MERN and React Native.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Team Collaboration",
    desc: "Working effectively with peers during projects and hackathons to build impactful solutions.",
  },
  {
    imgPath: "/images/time.png",
    title: "Consistent Learning",
    desc: "Always exploring new tools and frameworks to enhance development skills and stay ahead.",
  },
];


const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Charan and his team impressed the judges with a well-structured, innovative university collaboration platform. His technical contributions were top-notch.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Hackathon Winner – University Collaboration Platform",
    date: "March 2025",
    responsibilities: [
      "Built a platform for real-time discussions, student clubs, internships, and alumni networks.",
      "Integrated secure authentication and structured forums for universities.",
      "Led backend and frontend efforts to ensure performance and scalability.",
    ],
  },
  {
    review: "Charan’s passion for building useful mobile apps is evident in Booknest. His React Native work is both polished and purpose-driven.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "React Native Developer – Booknest",
    date: "February 2025 - Present",
    responsibilities: [
      "Developed Booknest, a mobile app for sharing and discovering book recommendations.",
      "Implemented a clean UI with React Native and managed state effectively.",
      "Focused on intuitive UX and real-time content sharing between users.",
    ],
  },
  {
    review: "Devhub is a sleek developer networking platform. Charan built robust connection and feed systems with high efficiency, creating a seamless experience for users.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Full Stack Developer – Devhub",
    date: "January 2025 - Present",
    responsibilities: [
      "Built a developer networking platform with connection request handling and real-time chat.",
      "Used Redis to optimize feed delivery and manage connection request caching for better performance.",
      "Implemented cron jobs to send daily email summaries of pending requests via Amazon SES.",
      "Hosted the platform on AWS EC2 and ensured secure, scalable backend infrastructure.",
    ],
  },
  
  
  {
    review: "Resume Craft reflects Charan's attention to user experience and modern web design. The project stands out for its simplicity and functionality.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "Full Stack Developer – Resume Craft",
    date: "January 2025 - Present",
    responsibilities: [
      "Built a professional resume builder with template selection and real-time preview features.",
      "Integrated PDF download and resume link sharing functionality.",
      "Used React, Node.js, and MongoDB to ensure a smooth user experience.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Sai Vathsal",
    mentions: "@sai_vathsal",
    review:
      "Charan’s leadership during our first hackathon was incredible. He handled the frontend and integrations with ease and ensured we stayed on track with features and timeline.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Tharun Yetti",
    mentions: "@tharun_yetti",
    review:
      "Working with Charan on Booknest was a smooth experience. His React Native skills and UI precision made the app both functional and visually clean.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Sai Balaji",
    mentions: "@sai_balaji",
    review:
      "Charan is super dedicated. His work on Devhub, from EC2 deployment to optimizing Redis-based feeds, proved his depth and attention to system performance.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Harsha",
    mentions: "@harsha_codes",
    review:
      "ResumeCraft wouldn’t have taken shape without Charan’s consistent effort. He nailed the dynamic template handling and PDF generation with perfection.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Manasa",
    mentions: "@manasa_uiux",
    review:
      "Charan is the perfect teammate. He listens, adapts, and always puts the project first. His ability to work across frontend and backend is rare and valuable.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Vishnu",
    mentions: "@vishnu_dev",
    review:
      "Charan is someone you can count on. During our dev sprint, he was available anytime and contributed to both code and direction. Super reliable and skilled!",
    imgPath: "/images/client6.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
