import { useState } from "react";


function ReviewHolder({ reviews }) {
    let [currentSlide,setCurrentSlide] = useState(1);

    const makedot = (id) => {
        return (
        <span className={`dot${(id === currentSlide)?" activedot":""}`} onClick={() => setCurrentSlide(id)} key={`dot${id}`}></span>
        );
    };

    const changeSlide = (i) => {
        let temp = currentSlide;
        if ((temp + i) > reviews.length){
            temp = 1;
        }
        else if ((temp + i) < 1){
            temp = reviews.length;
        }
        else {
            temp += i;
        }
        setCurrentSlide(temp);
    };

    return (
        <div className="reviews-holder" id="Reviews">
            {reviews.map((review) => Review(review, currentSlide))}
            <i className="prev" onClick={() => changeSlide(-1)}>&#10094;</i>
            <i className="next" onClick={() => changeSlide(1)}>&#10095;</i>
            <div className="dots">
                {reviews.map((review) => makedot(review.id))}
            </div>
        </div>
    );
}

function Review(review, currentslide) {

    let email = review.email;
    let content = review.content;
    let imgsrc = `${process.env.PUBLIC_URL}/imgs/${review.img}`;
    let id = review.id;

    return (
        <div className="review" style={{display : ((id === currentslide) ? "grid" : "none")}} key={`review${id}`}>
            <div className="review-img">
                <img className="review-img" src={imgsrc} />
            </div>
            <div className="reviewer-email">
                <h2>{email}</h2>
            </div>
            <div className="review-content">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default ReviewHolder;