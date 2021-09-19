const puppeteer = require('puppeteer');

var q = 'batata';

async function scrapeFood(url){

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(url);

const [ti] = await page.$x('/html/body/div[1]/section/div[2]/article[1]/div/h2/a');
const txt = await ti.getProperty('textContent');
const rawTxt = await txt.jsonValue();

const [im] = await page.$x('/html/body/div[1]/section/div[2]/article[1]/a/img');
const src = await im.getProperty('src');
const srcTxt = await src.jsonValue();

const [p] = await page.$x('/html/body/div[1]/section/div[2]/article[1]/div/p[2]');
const des = await p.getProperty('textContent');
const pTxt = await des.jsonValue();

console.log({rawTxt,srcTxt,pTxt});

browser.close();
}

scrapeFood(`https://nosolodulces.es/ingrediente/${q}`);


