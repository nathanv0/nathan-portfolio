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
    { text: "Ideas", imgPath: "./images/ideas.svg" },
    { text: "Concepts", imgPath: "./images/concepts.svg" },
    { text: "Designs", imgPath: "./images/designs.svg" },
    { text: "Code", imgPath: "./images/code.svg" },
    { text: "Ideas", imgPath: "./images/ideas.svg" },
    { text: "Concepts", imgPath: "./images/concepts.svg" },
    { text: "Designs", imgPath: "./images/designs.svg" },
    { text: "Code", imgPath: "./images/code.svg" },
];


const abilities = [
    {
        imgPath: "./images/seo.png",
        title: "Attention to Detail",
        desc: "I prioritize clean, bug-free code and pixel-perfect designs to ensure a polished user experience.",
    },
    {
        imgPath: "./images/devices.png",
        title: "Problem Solver",
        desc: "I thrive on breaking down complex technical challenges and engineering efficient, scalable solutions.",
    },
    {
        imgPath: "./images/time.png",
        title: "Adaptability",
        desc: "I quickly master new languages and frameworks (like switching from Java to React) to stay ahead of the curve.",
    },
];

const techStackImgs = [
    {
        name: "HTML",
        imgPath: "./images/logos/html.svg",
    },
    {
        name: "CSS",
        imgPath: "./images/logos/css.svg",
    },
    {
        name: "JavaScript",
        imgPath: "./images/logos/javascript.svg",
    },
    {
        name: "VSCode",
        imgPath: "./images/logos/vscode.svg",
    },
    {
        name: "Github",
        imgPath: "./images/logos/github.svg",
    },
];

const techStackIcons = [
    {
        name: "React",
        modelPath: "./models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python",
        modelPath: "./models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Java",
        modelPath: "./models/java.glb",
        scale: 1.5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Three JS",
        modelPath: "./models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Git",
        modelPath: "./models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        imgPath: "./images/stem.png",
        title: "Software Engineer Technical Coach (Volunteer)",
        date: "November 2024 - May 2025",
        responsibilities: [
            "Mentored FLL robotics teams (elementary/middle school), teaching robot design, coding, and teamwork using LEGO® EV3 and SPIKE™ Prime kits.",
            "Guided students in developing match strategies, optimizing robot performance, and improving coding efficiency — helping the team achieve a Top 5 placement in regional competitions.",
        ],
    },
    {
        imgPath: "./images/biomerics.jpg",
        title: "Production Operator Specialist",
        date: "February 2024 - August 2024",
        responsibilities: [
            "Operated and maintained production machinery, ensuring efficiency and adherence to safety standards.",
            "Conducted numerous tests on products and components, meticulously recording data on paper for quality tracking and reporting.",
            "Worked on 6 different production lines within the first 3 months, demonstrating adaptability and versatility.",
        ],
    },
    {

        imgPath: "./images/kyoto.jpg",
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
        imgPath: "./images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "./images/fb.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/nathan-v0/",
        imgPath: "./images/linkedin.png",
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