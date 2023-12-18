
function renderReviews(reviews_data, reverse_order, sort_stars, sort_thumbsup) {
	$("#reviews-list").empty()

	var data_len = reviews_data.length

	var indices = new Array(data_len);
	for (var ind = 0; ind < data_len; ++ind) indices[ind] = ind;


	// Sort if needed
	if(sort_stars || sort_thumbsup){
		sort_param = "thumbs_up"
		if(sort_stars)
			sort_param = "stars"
		indices.sort(
			function (a, b) { 
				a1 = reviews_data[a][sort_param];
				b1 = reviews_data[b][sort_param];
				a1 = parseInt(a1)
				b1 = parseInt(b1)

				return a1<b1 ? -1 :  a1>b1 ? 1 : 0; 
			}
		);
	}

	// Reverse indices if needed
	if(reverse_order) indices.reverse()

	/*alert(sort_stars)
	alert(sort_thumbsup)
	alert(reverse_order)*/

	for(j = 0; j<data_len; j++){
		// Add two reviews each to a review pair container
		review_i = indices[j]
		review_data = reviews_data[review_i]
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

	//alert("no probs")
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

$(document).ready(function () {
	renderReviews(reviews_data, true, false, false);
  
	$("#reviews-list").on("click", ".material-symbols-outlined", function () {
	  var reviewContainer = $(this).closest(".single-review-container");
  
	  var thumbsUpCount = reviewContainer.find(".like-num:first");
	  var thumbsDownCount = reviewContainer.find(".like-num:last");
  
	  if ($(this).html() === "thumb_up") {
		var currentCount = parseInt(thumbsUpCount.html());
		thumbsUpCount.html(currentCount + 1);
	  } else if ($(this).html() === "thumb_down") {
		var currentCount = parseInt(thumbsDownCount.html());
		thumbsDownCount.html(currentCount + 1);
	  }
	});
	$("#reviews-list").on("mouseenter", ".material-symbols-outlined", function () {
		$(this).css("color", "#cccdce");
	  }).on("mouseleave", ".material-symbols-outlined", function () {
		$(this).css("color", "");
	  });
  });