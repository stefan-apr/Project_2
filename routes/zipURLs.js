const async = require("async");
const request = require("request");
const archiver = require("archiver");

function zipURLs(urls, csv, outStream) {
    let zip = archiver.create("zip");

    zip.append(csv, { name: "sensaisondownload_withpics.csv" });

    zip.on("error", function(err) {
        console.log(err);
    });
    zip.on("close", function(err) {
        console.log("close");
    });

    async.eachLimit(urls, 5, function(url, done) {
        let stream = request.get(url);

        stream.on("zip", function(err) {
            return done(err);
        }).on("end", function() {
            return done();
        });

        // Use the last part of the URL as a filename within the ZIP archive.
        zip.append(stream, { name : url.replace(/^.*[\\\/]/, '') });
        zip.pipe(outStream);

    }, function(err) {
        if (err) throw err;

        // zip.finalize();
    });
}

module.exports = zipURLs;