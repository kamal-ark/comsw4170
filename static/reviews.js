
function renderReviews(reviews_data) {
	$("#reviews-list").empty()

	$.each(reviews_data, function(i, review_data){
		// Add two reviews each to a review pair container
		if((i % 2) == 1){
			renderReview(review_data, true, pair_container)
			//alert(review_data['user'])
		}
		else{
			pair_container = $("<div class='reviews-pair-container'>")
			pair_container = renderReview(review_data, false, pair_container)
		}
	})

	alert("no probs")
}

// is_right is a Boolean value for displaying in the right handside
function renderReview(review_data, is_right, review_pair_container) {
	var side_review = ""
	if(is_right)
		side_review = $("<span class='right-review'>")
	else
		side_review = $("<span class='left-review'>")

	var single_review = $("<div class='single-review-container'>")
	var review_upper = $("<div class='single-review-container-upper'>")
	var name = $("<span class='username'>")
	// TODO stars
	var date = $("<span class='date'>")

	var content = $("<div class='review-content'>")
	// TODO likes


	$(name).html(review_data["user"])
	$(date).html(review_data["date"])
	$(content).html(review_data["review_text"])


	$(review_upper).append(name)
	$(review_upper).append(date)
	$(single_review).append(review_upper)
	$(single_review).append(content)
	$(side_review).append(single_review)
	$(review_pair_container).append(side_review)

	if (is_right)
		$("#reviews-list").append(review_pair_container)
	else
		return review_pair_container
}


/*            <div class="reviews-pair-container">
                <span class="left-review">
                    <div class="single-review-container">
                        <div class="single-review-container-upper">
                            <span class="username">
                                AviramRah
                            </span>
                            <span class="review-stars-container">
                                <div class="material-symbols-outlined" id="filled-star">star</div>
                                <div class="material-symbols-outlined">star</div>
                                <div class="material-symbols-outlined">star</div>
                                <div class="material-symbols-outlined">star</div>
                                <div class="material-symbols-outlined">star</div>
                            </span>
                            <span class="date">oct 12, 2023</span>
                        </div>
                        <div class="review-content">
                            the desks were way too small for me. I had a hard time getting in and out of them.
                        </div>
                        <div class="likes-container">
                            <span class="like-num">18</span>
                            <span class="material-symbols-outlined">thumb_up</span>
                            <span class="like-num">4</span>
                            <span class="material-symbols-outlined">thumb_down</span>
                        </div>
                    </div>
                </span>
*/

$(document).ready(function(){

	renderReviews(reviews_data);
})