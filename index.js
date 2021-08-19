const fetch = require('node-fetch');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
     const res = await fetch('https://www.quackit.com/character_sets/emoji/emoji_v3.0/unicode_emoji_v3.0_characters_all.cfm');
     const text = await res.text();

     const $ = cheerio.load(text);

     const parEl = $('.table tr code:last-of-type').toArray();

     let icon= parEl.map((data, i) => {
          return data.childNodes;
     });

    const fish= icon.map((da, i) => {
        const data = Object.values(da);
          return data;
     });

   const my = Object.values(fish);

   my.forEach(function(da, i) {
     //    let n = 0;
     //    n++;
        const my2 = da[0]['data'];

        fs.writeFile('data.js', my2, (err) => {
             if (err) {
                  console.log('Erroe')
             } else {
               //    console.log('Done')
             }
        })

        console.log(my2)
   })


})()