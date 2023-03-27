import ReviewHolder from "./Review";

function ReviewSection() {
    return (
        <section id="Reviews">
            <div class="section-header"><b>Reviews</b></div>
            <div class="reviews-flex">
                <ReviewHolder />
                <div class="review-form">
                    <form class="review-form">
                        <h1 class="review-form-title">Your Opinion <span>Matters</span>!</h1>
                        <textarea placeholder="Enter your reviews..." id="review-text"></textarea>
                        <input type="email" placeholder="Enter your email..." id="review-email" />
                            <button id="review-submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ReviewSection;