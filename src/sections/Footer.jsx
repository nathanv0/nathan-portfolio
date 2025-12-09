import React from 'react'
import {socialImgs} from "../constants/index.js";


const Footer = () => {
    const basePath = import.meta.env.BASE_URL;
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex items-center md:items-start">
                    <a href="https://github.com/nathanv0"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg  transition">

                        <img src={`${basePath}images/github-mark-white.png`} alt="github" className="w-5 h-5"/>
                        <span>Visit my Github</span>
                    </a>
                </div>

                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className="icon" target="_blank" href={img.url} key={img.url}>
                            <img src={img.imgPath} alt="img"/>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Nathan Vo. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    )
}
export default Footer
