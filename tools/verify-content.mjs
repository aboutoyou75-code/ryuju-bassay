// Integration contract: new guides must be reachable from the home page, have
// distinct substantive content, and link to real contact/service destinations.
import { readFile, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
const failures=[]; let checks=0;
const check=(ok,label)=>{checks++;if(!ok)failures.push(label);};
const home=await readFile('index.html','utf8');
const sitemap=await readFile('sitemap.xml','utf8');
const expected=['photo-estimate','tree-disposal','stump-removal','narrow-access','bamboo-clearing','slope-work','special-felling','vacant-house-remote','before-demolition','estimate-checklist','typhoon-preparation','temple-trees','single-tree-cost','pruning-or-removal','booking-timing'];
let hub='';try{hub=await readFile('guides/index.html','utf8');}catch{}
check(home.includes('href="guides/"'),'home reaches guide index');
const bodies=[];
for(const slug of expected){
 const path=`guides/${slug}/index.html`;let html='';try{html=await readFile(path,'utf8');}catch{}
 check(!!html,`${slug}: article exists`);if(!html)continue;
 check(hub.includes(`href="${slug}/"`),`${slug}: reachable from index`);
 check(sitemap.includes(`/guides/${slug}/`),`${slug}: in sitemap`);
 check((html.match(/<h1\b/g)||[]).length===1,`${slug}: single H1`);
 const article=html.match(/<article\b[\s\S]*?<\/article>/)?.[0]||'';
 check(article.replace(/<[^>]*>/g,'').length>=800,`${slug}: substantive article body`);
 check((article.match(/<h2\b/g)||[]).length>=3,`${slug}: practical sections`);
 bodies.push(article.replace(/<[^>]*>/g,''));
 check(html.includes('data-phone-link')&&html.includes('data-line-link'),`${slug}: contact destinations available`);
 for(const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
  try{JSON.parse(m[1]);check(true,'schema');}catch{check(false,`${slug}: malformed schema`);}
 }
 for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(?:[a-z]+:|#|\/\/)/i.test(m[1]))continue;
  let target=resolve(dirname(path),m[1].split(/[?#]/)[0]);
  try{if((await stat(target)).isDirectory())target=resolve(target,'index.html');await stat(target);check(true,'target');}catch{check(false,`${slug}: broken link ${m[1]}`);}
 }
}
check(new Set(bodies).size===expected.length,'each article has its own content');
console.log(JSON.stringify({checks,failures,status:failures.length?'FAIL':'PASS'},null,2));
process.exitCode=failures.length?1:0;
