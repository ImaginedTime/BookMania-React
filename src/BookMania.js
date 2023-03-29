import { useState } from "react";

import Card from "./elements/Card";
import Header from "./elements/Header";
import IntroSection from "./elements/IntroSection";
import ReviewSection from "./elements/ReviewSection";
import Footer from "./elements/Footer";

import "./BookMania.css";

import Bestsellers from "./data/Bestsellers.json";
import Recommendations from "./data/Recommendations.json";
import Reviews from "./data/Reviews.json";


function BookMania() {
    let [bookCart, setBookCart] = useState(Array(0));
    let CartDisplay = {};
    [CartDisplay.isVisible, CartDisplay.setIsVisible] = useState(false);

    let reviews = Reviews;
    let bestsellerBooks = Bestsellers;
    let recommendationBooks = Recommendations;

    return (
        <>
        <Header bookCart={bookCart} CartDisplay={CartDisplay} />
        <IntroSection />
        <section id="BestSellers">
            <div className="section-header"><b>Best Sellers</b></div>
            <div className="flex-container" id="BestSellers">
                {bestsellerBooks.map((book) => <Card book={book} bookCart={bookCart} setBookCart={setBookCart} key={`BS${book.id}`} CartDisplay={CartDisplay} />)}
            </div>
        </section>
        <section id="Recommendations">
            <div className="section-header"><b>Recommendations</b></div>
            <div className="search-bar"><input type="text" placeholder="Search..." /><button>🔍</button></div>
            <div className="flex-container" id="Recommendations">
                {recommendationBooks.map((book) => <Card book={book} bookCart={bookCart} setBookCart={setBookCart} key={`RC${book.id}`} CartDisplay={CartDisplay} />)}
            </div>
        </section>
        <ReviewSection reviews={reviews} />
        <Footer />
        <a href="#Intro" className="backtotop"><button className="backtotop">▲</button></a>
        </>
    );
}

export default BookMania;