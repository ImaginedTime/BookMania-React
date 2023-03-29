import { useEffect, useState } from "react";
import "./BackToTop.css"


function BackToTop(){
    let [scroll , setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = (event) => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <a href="#Intro" className="backtotop" style={{display : (scroll>400) ? "block" : "none"}}>
        <button className="backtotop">▲</button>
    </a>
    );
}

export default BackToTop;