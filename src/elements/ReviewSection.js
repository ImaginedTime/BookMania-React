import ReviewHolder from "./Review";

function ReviewSection(params) {
    return (
        <section id="Reviews">
            <div className="section-header"><b>Reviews</b></div>
            <div className="reviews-flex">
                <ReviewHolder reviews={params.reviews} />
                <div className="review-form">
                    <form className="review-form">
                        <h1 className="review-form-title">Your Opinion <span>Matters</span>!</h1>
                        <textarea placeholder="Enter your reviews..." id="review-text"></textarea>
                        <input type="email" placeholder="Enter your email..." id="review-email" />
                            <button id="review-submit" onClick={(e) => {e.target.preventDefault()}}>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ReviewSection;