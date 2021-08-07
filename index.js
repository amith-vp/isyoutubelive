const cheerio = require('cheerio')
const needle = require('needle')
module.exports = async function checklive(channelID) {
    
    
    let yt_url = `https://www.youtube.com/channel/${channelID}/live`
    
    
    const response = {
        is_live: false,
        title: null,
        url: null
    }
    try {
    let res = await needle('get', encodeURI(yt_url), { follow_max: 3})

        let $ = cheerio.load(res.body);
        if ($('link[rel="canonical"]').attr('href')) {
            response.url = $('link[rel="canonical"]').attr('href');
            response.title = $('meta[name="title"]').attr('content');
            response.is_live = response.url.startsWith("https://www.youtube.com/watch?v") ? true : false;

        } else {
            response.is_live = false;
            response.title = "API ERROR";
            response.url = "API ERROR";
        }
        return response;

} catch (error) {
    console.log(error);
}

};