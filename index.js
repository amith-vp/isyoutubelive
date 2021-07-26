const express = require('express')
const app = express()
port =(process.env.PORT || 8080);

const cheerio = require('cheerio')
const needle = require('needle')

let url_s = "https://www.youtube.com/channel/UC0MOuJqDcd_IaUjxPnw5H6Q/live"

let status = false;
let title = null;
let url = null;



app.get('/', (req, res) => {
    res.contentType('application/json');
    return res.json({
        is_live: status,
        title: title,
        url: url
    })


});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});

setInterval(() => {



    needle.get(encodeURI(url_s), {
        follow_max: 3
    }, function (err, res) {
        if (err) {console.log(err);throw err}
        var $ = cheerio.load(res.body)
        title = $('meta[name="title"]').attr('content')
        url = $('link[rel="canonical"]').attr('href')
        status = url.startsWith("https://www.youtube.com/watch?v") ? true : false;

        console.log(res.body)


    })
}, 62000);