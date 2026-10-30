import {readFile,stat} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
const root=process.cwd();
const base='https://aboutoyou75-code.github.io/ryuju-bassay/';
const sitemap=await readFile('sitemap.xml','utf8');
const robots=await readFile('robots.txt','utf8');
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
let checks=0; const failures=[];
function check(ok,message){checks++;if(!ok)failures.push(message);}
const pages=new Map();
for(const url of urls){
 const path=url.slice(base.length)+'index.html';
 const html=await readFile(path,'utf8');pages.set(path,html);
 check((html.match(/<h1\b/g)||[]).length===1,path+': one H1');
 check(html.includes('rel="canonical" href="'+url+'"'),path+': canonical');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 check(new Set(ids).size===ids.length,path+': unique IDs');
 for(const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
  try {const data=JSON.parse(m[1]);check(!!data['@context'],path+': schema context');}
  catch(error){check(false,path+': JSON-LD '+error.message);}
 }
 check(html.includes('data-phone-link')&&html.includes('data-line-link'),path+': contact links');
 check(html.includes('mobile-cta'),path+': mobile CTA');
 for(const m of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  const link=m[1];if(/^(?:[a-z]+:|\/\/)/i.test(link))continue;
  const [raw,hash]=link.split('#'); const part=raw.split('?')[0];
  const target=part?resolve(dirname(resolve(path)),decodeURIComponent(part)):resolve(path);
  let file=target;
  try {if((await stat(file)).isDirectory())file=resolve(file,'index.html'); await stat(file);check(true,'exists');}
  catch{check(false,path+': missing '+link);continue;}
  if(hash && file.endsWith('.html')){const targetHtml=await readFile(file,'utf8');check(targetHtml.includes('id="'+hash+'"'),path+': fragment '+link);}
 }
}
check(urls.length===25,'25 sitemap URLs: home, ten service pages, guide index, twelve guides and one case');
check(robots.includes('Allow: /')&&robots.includes('sitemap.xml'),'robots: sitemap and crawl rule');
const home=pages.get('index.html');
const faqSection=home.match(/<section\b[^>]*id="faq"[^>]*>([\s\S]*?)<\/section>/)?.[1] || '';
check((faqSection.match(/<details\b/g)||[]).length===10,'home: ten FAQs in FAQ section');
check(!home.includes('type="file"'),'home: no nonfunctional photo upload');
const script=await readFile('script.js','utf8');
check(script.includes('phone: "090-2014-7439"')&&script.includes('lineUrl: "https://lin.ee/thISnveh"')&&script.includes('email: "ryuzyuchop@gmail.com"'),'SITE_CONFIG preserved');
for(const css of ['styles.css','improvements.css','legacy-pages.css']){
 const text=await readFile(css,'utf8');
 for(const m of text.matchAll(/url\(["']?([^"')]+)["']?\)/g)){
  if(/^(data:|https?:)/.test(m[1]))continue;
  try{await stat(resolve(dirname(css),m[1]));check(true,'CSS asset');}catch{check(false,css+': missing '+m[1]);}
 }
}
console.log(JSON.stringify({pages:urls.length,checks,failures,status:failures.length?'FAIL':'PASS'},null,2));
process.exitCode=failures.length?1:0;
