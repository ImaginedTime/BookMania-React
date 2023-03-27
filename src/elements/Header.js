import { useState } from "react";

function Header() {
    let titleimg = "%PUBLIC_URL%/imgs/logo.jpg";
    let [navVisible, setNavVisible] = useState(false);

    const togglenav = () => {
        let temp = navVisible;
        setNavVisible(temp);
    };


    return (
        <header>
            <div className="left-navbar">
                <div className="left-left-navbar">
                    <div className="logo"><img src={titleimg} /></div>
                    <div className="title">
                        <span className="headline">
                            <p>B</p>ook <p>M</p>agicia
                        </span>
                    </div>
                </div>
                <div className="right-left-navbar">
                    <div className="cartmenu" onClick="showcart(0)">
                        <p className="fa fa-shopping-cart"></p>
                    </div>
                    <div className="hamburger-menu" onClick={() => togglenav()}>
                        <p className="fa fa-bars"></p>
                    </div>
                </div>
            </div>
            <div className="navbar" id="navbar" style={{display : ((navVisible && (window.innerWidth<800)) ? "flex" : "none")}}>
                <span className="cartmenu atcmenu2" onClick="showcart(0)"><p className="fa fa-shopping-cart"></p></span>
                <span><a href="#Intro" onClick={() => togglenav()}>Intro</a></span>
                <span><a href="#BestSellers" onClick={() => togglenav()}>BestSellers</a></span>
                <span><a href="#Recommendations" onClick={() => togglenav()}>Recommendations</a></span>
                <span><a href="#Reviews" onClick={() => togglenav()}>Reviews</a></span>
            </div>
        </header>
    );
}

export default Header;