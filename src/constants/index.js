// Define the base path once to use everywhere
const basePath = import.meta.env.BASE_URL;

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
];

const words = [
    { text: "Ideas", imgPath: `${basePath}images/ideas.svg` },
    { text: "Concepts", imgPath: `${basePath}images/concepts.svg` },
    { text: "Designs", imgPath: `${basePath}images/designs.svg` },
    { text: "Code", imgPath: `${basePath}images/code.svg` },
    { text: "Ideas", imgPath: `${basePath}images/ideas.svg` },
    { text: "Concepts", imgPath: `${basePath}images/concepts.svg` },
    { text: "Designs", imgPath: `${basePath}images/designs.svg` },
    { text: "Code", imgPath: `${basePath}images/code.svg` },
];


const abilities = [
    {
        imgPath: `${basePath}images/seo.png`,
        title: "Attention to Detail",
        desc: "I prioritize clean, bug-free code and pixel-perfect designs to ensure a polished user experience.",
    },
    {
        imgPath: `${basePath}images/devices.png`,
        title: "Problem Solver",
        desc: "I thrive on breaking down complex technical challenges and engineering efficient, scalable solutions.",
    },
    {
        imgPath: `${basePath}images/time.png`,
        title: "Adaptability",
        desc: "I quickly master new languages and frameworks (like switching from Java to React) to stay ahead of the curve.",
    },
];

const techStackImgs = [
    {
        name: "HTML",
        imgPath: `${basePath}images/logos/html.svg`,
    },
    {
        name: "CSS",
        imgPath: `${basePath}images/logos/css.svg`,
    },
    {
        name: "JavaScript",
        imgPath: `${basePath}images/logos/javascript.svg`,
    },
    {
        name: "VSCode",
        imgPath: `${basePath}images/logos/vscode.svg`,
    },
    {
        name: "Github",
        imgPath: `${basePath}images/logos/github.svg`,
    },
];

const techStackIcons = [
    {
        name: "React",
        modelPath: `${basePath}models/react_logo-transformed.glb`,
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python",
        modelPath: `${basePath}models/python-transformed.glb`,
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Java",
        modelPath: `${basePath}models/java.glb`,
        scale: 1.5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Three JS",
        modelPath: `${basePath}models/three.js-transformed.glb`,
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Git",
        modelPath: `${basePath}models/git-svg-transformed.glb`,
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        imgPath: `${basePath}images/stem.png`,
        title: "Software Engineer Technical Coach (Volunteer)",
        date: "November 2024 - May 2025",
        responsibilities: [
            "Mentored FLL robotics teams (elementary/middle school), teaching robot design, coding, and teamwork using LEGO® EV3 and SPIKE™ Prime kits.",
            "Guided students in developing match strategies, optimizing robot performance, and improving coding efficiency — helping the team achieve a Top 5 placement in regional competitions.",
        ],
    },
    {
        imgPath: `${basePath}images/biomerics.jpg`,
        title: "Production Operator Specialist",
        date: "February 2024 - August 2024",
        responsibilities: [
            "Operated and maintained production machinery, ensuring efficiency and adherence to safety standards.",
            "Conducted numerous tests on products and components, meticulously recording data on paper for quality tracking and reporting.",
            "Worked on 6 different production lines within the first 3 months, demonstrating adaptability and versatility.",
        ],
    },
    {

        imgPath: `${basePath}images/kyoto.jpg`,
        title: "Sushi Server",
        date: "October 2022 - February 2024",
        responsibilities: [
            "Provided excellent customer service through effective problem-solving to ensure guest satisfaction.",
            "Educated customers on the menu by actively listening to their preferences and suggesting items tailored to their tastes while providing excellent communication.",
        ],
    },
];


const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: `${basePath}images/insta.png`,
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: `${basePath}images/fb.png`,
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/nathan-v0/",
        imgPath: `${basePath}images/linkedin.png`,
    },
];

export {
    words,
    abilities,
    expCards,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};