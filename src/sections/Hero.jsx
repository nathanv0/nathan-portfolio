import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Hero = () => {
    const basePath = import.meta.env.BASE_URL;
    useGSAP(() => {
        // UseGSAP for animation: target the hero-text h1 element
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 2,
                ease: 'power2.inOut'
            },
        )
    })

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src={`${basePath}images/bg.png`} alt="background"/>
            </div>

            <div className="hero-layout">
                {/*LEFT: HERO CONTENT*/}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-8">
                        <div className="hero-text">
                            <h1>Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                                                <span>{word.text}</span>
                                            </span>

                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">Hi, I'm Nathan, a developer based in MN with passion for code.</p>
                        <Button className = "md:w-80 md:h-16 w-60 h-12"
                        id="button" text="See my Work"/>
                    </div>
                </header>

                {/*RIGHT: 3D MODEL*/}
                <figure>
                    <div className="hero-3d-layout hover:cursor-grab rounded-3xl overflow-hidden">
                        <HeroExperience/>
                    </div>
                </figure>
            </div>
        </section>
    )
}
export default Hero
