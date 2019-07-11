$(document).ready((req, user) => {
	// TODO: req.user or user when that all gets fixed

	console.log("userAuthBtns_index.js >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
	console.log("req:", req);
	console.log("req.user:", req.user);
	console.log("user:", user);
	console.log("END userAuthBtns_index.js >>>>>>>>>>>>>>>>>>>>>>>>>>>>");

	// if user is logged in
	if (user) {
		// if there is a signed in user hide the sign in button
		if ($("#signin-index").hasClass("hide")) {
			// nothing
		} else {
			$("#signin-index").addClass("hide");
		}
		// show the your account button
		if ($("#account-index").hasClass("hide")) {
			$("#account-index").removeClass("hide");
		} else {
			// nothing
		}
		// show the logout button
		if ($("#logout-index").hasClass("hide")) {
			$("#logout-index").removeClass("hide");
		} else {
			// nothing
		}
		
		// side menu

		if ($("#signin-index-side").hasClass("hide")) {
			// nothing
		} else {
			$("#signin-index-side").addClass("hide");
		}
		// show the your account button
		if ($("#account-index-side").hasClass("hide")) {
			$("#account-index-side").removeClass("hide");
		} else {
			// nothing
		}
		// show the logout button
		if ($("#logout-index-side").hasClass("hide")) {
			$("#logout-index-side").removeClass("hide");
		} else {
			// nothing
		}

	} else {
		console.log("no signed in user");
		if ($("#signin-index").hasClass("hide")) {
			$("#signin-index").removeClass("hide");
		} else {
			// nothing
		}
		// show the your account button
		if ($("#account-index").hasClass("hide")) {
			// nothing
		} else {
			$("#account-index").addClass("hide");
		}
		// show the logout button
		if ($("#logout-index").hasClass("hide")) {
			// nothing
		} else {
			$("#logout-index").addClass("hide");
		}
		
		// side menu

		if ($("#signin-index-side").hasClass("hide")) {
			$("#signin-index-side").removeClass("hide");
		} else {
			// nothing
		}
		// show the your account button
		if ($("#account-index-side").hasClass("hide")) {
			// nothing
		} else {
			$("#account-index-side").addClass("hide");
		}
		// show the logout button
		if ($("#logout-index-side").hasClass("hide")) {
			// nothing
		} else {
			$("#logout-index-side").addClass("hide");
		}
	}
	
});