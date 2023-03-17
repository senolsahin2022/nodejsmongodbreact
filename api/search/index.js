const fetch = require("node-fetch");
const request = async (param) =>{

    console.log(param);
  const responsee = await fetch("https://api.themoviedb.org/3/search/movie?query="+param+"&api_key=e7338da10929718973a5c0eeeae7764b&page=1", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "max-age=0",
        "if-none-match": "W/\"75dcb8ca2413c8a7961ffe4d0036dd73\"",
        "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "cookie": "OptanonAlertBoxClosed=2023-03-15T09:24:32.385Z; _ga=GA1.2.878557883.1678964157; _gid=GA1.2.135399329.1678964157; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+16+2023+13%3A56%3A08+GMT%2B0300+(GMT%2B03%3A00)&version=202301.1.0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=TR%3B34"
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET"
    });
    
return responsee;
}
module.exports = request;
