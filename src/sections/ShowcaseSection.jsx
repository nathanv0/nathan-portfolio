import React, {useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger} from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
import TitleHeader from "../components/TitleHeader.jsx";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    const basePath = import.meta.env.BASE_URL;

    useGSAP(() => {
        // Create an array of projects and add animation to each one
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger:card, start: 'top bottom -= 100',
                    }
                },
            )
        });

        gsap.fromTo(sectionRef.current,
            { opacity:0},
            {opacity: 1, duration: 1.5},
            )
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <TitleHeader title="See What I've Built" sub="💻 Recent Projects" />

                <div className="showcaselayout mt-20">
                    {/* LEFT side*/}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src={`${basePath}images/project1.png`} alt="Dealer"/>
                        </div>
                        <div className="text-content">
                            <h2>Multi-Dealer Logistics with a Robust Vehicle Tracking System</h2>
                            <p className="text-white-50 md:text-xl">
                                A desktop application built with Java, Kotlin, and JavaFX for seamless inventory and
                                rental management.
                            </p>
                            <p className="mt-4 text-lg text-gray-400">
                                Engineered to handle complex data via JSON/XML import/export. I collaborated with a team
                                of four to design a responsive GUI that allows admins to visualize dealer operations and
                                ensure system stability through rigorous unit testing.
                            </p>
                        </div>

                    </div>
                    {/* RIGHT side*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src={`${basePath}images/cs50_finance.png`} alt="Stock trading web application"/>
                            </div>
                            <h2>A full-stack stock trading web app using Flask, MySQL, and Python</h2>

                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src={`${basePath}images/project_sushi.png`} alt="Sushiman"/>
                            </div>
                            <h2>Sushiman - A Japanese food delivery service</h2>

                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
