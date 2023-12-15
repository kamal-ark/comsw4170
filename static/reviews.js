
function renderReviews(reviews_data) {
	$("#reviews-list").empty()

	var data_len = reviews_data.length
	var reverse_order = true
	var i = 0

	for(j = 0; j<data_len; j++){
		// Add two reviews each to a review pair container
		if(reverse_order)
			i = data_len-j-1
		else
			i = j
		review_data = reviews_data[i]
		if((j % 2) == 1){
			renderReview(review_data, true, pair_container, false)
			//alert(review_data['user'])
		}
		else{
			pair_container = $("<div class='reviews-pair-container'>")
			pair_container = renderReview(review_data, false, pair_container, false)
		}
	}
	// For odd number of reviews
	if(data_len%2 == 1){
		renderReview([], true, pair_container, true)
	}

	alert("no probs")
}

// is_right is a Boolean value for displaying in the right handside
function renderReview(review_data, is_right, review_pair_container, is_final) {
	if(is_final){
		side_review = $("<span class='right-review'>")
		$(review_pair_container).append(side_review)
		$("#reviews-list").append(review_pair_container)
		return
	}

	var side_review = ""
	if(is_right)
		side_review = $("<span class='right-review'>")
	else
		side_review = $("<span class='left-review'>")

	var single_review = $("<div class='single-review-container'>")
	var review_upper = $("<div class='single-review-container-upper'>")
	var name = $("<span class='username'>")
	var stars = $("<span class='review-stars-container'>")
	// TODO stars
	var date = $("<span class='date'>")

	var content = $("<div class='review-content'>")
	var likes_div = $("<div class='likes-container'>")
	var likes = $("<span class='like-num'>")
	var thumbs_up = $("<span class='material-symbols-outlined'>")
	var dislikes = $("<span class='like-num'>")
	var thumbs_down = $("<span class='material-symbols-outlined'>")


	$(name).html(review_data["user"])
	$(date).html(review_data["date"])
	$(content).html(review_data["review_text"])
	$(thumbs_up).html("thumb_up")
	$(likes).html(review_data["thumbs_up"])
	$(thumbs_down).html("thumb_down")
	$(dislikes).html(review_data["thumbs_down"])

	for(let j = 0; j < review_data["stars"]; j++){
		var fstar = $("<div class='material-symbols-outlined' id='filled-star'>")
		$(fstar).html("star")
		$(stars).append(fstar)
	}
	for(let j = 0; j < 5-review_data["stars"]; j++){
		var estar = $("<div class='material-symbols-outlined'>")
		$(estar).html("star")
		$(stars).append(estar)
	}
	$(review_upper).append(name)
	$(review_upper).append(stars)
	$(review_upper).append(date)
	$(likes_div).append(likes)
	$(likes_div).append(thumbs_up)
	$(likes_div).append(dislikes)
	$(likes_div).append(thumbs_down)
	$(single_review).append(review_upper)
	$(single_review).append(content)
	$(single_review).append(likes_div)
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