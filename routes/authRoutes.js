const Passport = require("../config/passportStrategy"),
	ensureAuthenticated = require("./ensureAuthenticated");
	// db = require("../models"),
	// path = require("path");

let person,
	access_token;

module.exports = app => {

	app.get("/", (req, res) => {
		res.render("index", (err, html) => {
			if (err) {
				console.log(err);
			}
			res.send(html);
		});
	});

	app.get("/team", (req, res) => {
		res.render("team", (err, html) => {
			if (err) {
				console.log(err);
			}
			res.send(html);
		});
	});

	app.get("/additionalresources", (req, res) => {
		res.render("additionalresources", (err, html) => {
			if (err) {
				console.log(err);
			}
			res.send(html);
		});
	});

	app.post("/auth/openid-client", Passport.authenticate("openid-client"));
	// above not working

	app.get("/auth/openid-client/callback",
		Passport.authenticate("openid-client", {
			session: true,
			failureRedirect: "/" ,
			failureFlash: "Problem with authentication, try again",
		}),	(req, res) => {
			res.setHeader("Cookie", ["set-cookie"]);

			console.log("REQ.USER: ", req.user);

			window.person = req.user; // app-level variable?????????????????
			window.access_token = req.access_token;

			req.session.save(() => {
				res.send({ person, access_token });
				res.redirect("/useraccount");
				console.log("SUCCESSFUL AUTHENTICATION");
			});
		}
	);
	
	// protect user account page
	app.get("/useraccount", ensureAuthenticated, (req, res) => {
		console.log("user account page");
		console.log("req.user: ", req.user);
		console.log("person: ", person);

		res.render("useraccount", { user: req.user }, (err, html) => {
			if (err) {
				console.log(err);
			}
			res.send(html);
		});
	});

	app.get("/logout", (req, res) => {
		console.log("LOGGING OUT");
		req.logout;
		req.session.destroy(() => res.redirect("/"));
	});

};