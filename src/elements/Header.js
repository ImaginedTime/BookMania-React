import { useState } from "react";
import Cart from "./Cart";

function Header({ bookCart }) {
    let titleimg = `${process.env.PUBLIC_URL}/imgs/logo.jpg`;
    let [navVisible, setNavVisible] = useState(false);
    let [cartVisible, setCartVisible] = useState(false);

    const togglenav = () => {
        let temp = !navVisible;
        setNavVisible(temp);
    };

    const toggleCart = () => {
        let temp = !cartVisible;
        setCartVisible(temp);
    }


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
                    <div className="cartmenu" onClick={() => toggleCart()}>
                        <p className="fa fa-shopping-cart"></p>
                    </div>
                    <div className="hamburger-menu" onClick={() => togglenav()}>
                        <p className="fa fa-bars"></p>
                    </div>
                </div>
            </div>
            <div className="navbar" id="navbar" style={{display : ((navVisible) ? "flex" : "none")}}>
                <span className="cartmenu atcmenu2" onClick={() => toggleCart()}><p className="fa fa-shopping-cart"></p></span>
                <span><a href="#Intro" onClick={() => togglenav()}>Intro</a></span>
                <span><a href="#BestSellers" onClick={() => togglenav()}>BestSellers</a></span>
                <span><a href="#Recommendations" onClick={() => togglenav()}>Recommendations</a></span>
                <span><a href="#Reviews" onClick={() => togglenav()}>Reviews</a></span>
            </div>
            <Cart bookCart={bookCart} isVisible={cartVisible} visibleNav={navVisible} />
        </header>
    );
}

export default Header;