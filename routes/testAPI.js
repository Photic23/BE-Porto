var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send({'textIndo': 'Halo, saya Photic', 'textEnglish': 'Hello, I am Photic', 'textDeutsch': 'Hallo, ich bin Photic', 'textJapan':'こんにちは、私はフォトです'});
});

module.exports = router;