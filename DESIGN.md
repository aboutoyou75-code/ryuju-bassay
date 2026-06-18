\# DESIGN.md — 竜樹伐採 UI Design System



\## 1. Design Goal



This project is a Japanese local tree removal landing page for \*\*竜樹伐採\*\*.



The visual direction must communicate:



\* 奈良市・奈良県の地域密着

\* 高木伐採・危険木伐採・特殊伐採に対応できる専門性

\* 安さではなく、安全性・技術・信頼で選ばれる業者

\* 写真を送るだけで概算見積できる分かりやすさ

\* 不動産会社・解体業者・工務店・寺社関係者にも見せられる信頼感



The site must not look like:



\* 格安便利屋

\* Canva風テンプレート

\* 素人のチラシ

\* 派手な広告LP

\* 安売り業者

\* 汎用的な造園サイト



Target impression:



> 奈良の高木・危険木・特殊伐採に対応する、落ち着いた専門業者サイト。



\---



\## 2. Core Brand Mood



Keywords:



\* forest

\* local specialist

\* precision

\* arborist

\* rope work

\* safety

\* calm trust

\* practical premium

\* Japanese local craftsmanship



Japanese mood:



\* 重厚

\* 誠実

\* 専門的

\* 地域密着

\* 安心感

\* 職人感

\* 過度に派手ではない

\* 高単価案件にも耐える信頼感



Use visual references from the generated section mockups:



\* Section 3: premium service matrix with one large featured service panel and compact service tiles

\* Section 4: deep navy pricing section with inset white table

\* Section 5: image-led reasons section with precision instrument mood

\* Section 6: image-led works/case study cards

\* Section 7: map-inspired service area with deep forest green background

\* Section 8: horizontal process timeline

\* Section 9: minimalist FAQ accordion

\* Section 10: cinematic final CTA over dark forest imagery



\---



\## 3. Color System



Use this palette consistently.



\### Primary Colors



\* Forest Black: `#0F1A14`



&#x20; \* Use for hero overlays, premium dark sections, footer, deep background.

\* Deep Forest Green: `#163C2A`



&#x20; \* Use for primary brand surfaces and cards.

\* Main Green: `#1F5A3A`



&#x20; \* Use for primary buttons, highlights, icons, active states.

\* Deep Navy: `#0E2235`



&#x20; \* Use for premium contrast sections, pricing background, dark editorial panels.



\### Neutral Colors



\* White: `#FFFFFF`



&#x20; \* Use for clean panels, text on dark backgrounds.

\* Off White: `#F7F5EF`



&#x20; \* Use as primary page background.

\* Green Gray: `#EEF2EC`



&#x20; \* Use for subtle section backgrounds.

\* Border Gray: `#D9DED6`



&#x20; \* Use for card borders and dividers.

\* Text Black: `#1A1A1A`



&#x20; \* Use for main body text.

\* Text Muted: `#5B625C`



&#x20; \* Use for supporting copy.



\### Accent Colors



\* Warm Wood Gold: `#C8A45D`



&#x20; \* Use sparingly for thin lines, section numbers, small accents, premium highlights.

\* Soft Wood: `#D6B46A`



&#x20; \* Use for hover accents or secondary decoration.

\* Amber Warning: `#B97832`



&#x20; \* Use only for small caution or emergency notes. Do not overuse red.



\### Avoid



\* Purple gradients

\* Neon colors

\* Bright yellow-green

\* Cheap red discount labels

\* Random pastel colors

\* Overly colorful icons



\---



\## 4. Typography



Use clean Japanese grotesk typography.



Preferred font stack:



```css

font-family:

&#x20; "Noto Sans JP",

&#x20; "Hiragino Sans",

&#x20; "Yu Gothic",

&#x20; "YuGothic",

&#x20; "Meiryo",

&#x20; system-ui,

&#x20; -apple-system,

&#x20; BlinkMacSystemFont,

&#x20; sans-serif;

```



For large editorial Japanese headings, use strong weight and generous letter spacing.



\### Type Scale



\* Hero heading:



&#x20; \* Desktop: 56px–72px

&#x20; \* Mobile: 34px–44px

&#x20; \* Weight: 700–800

&#x20; \* Line-height: 1.15

\* Section heading:



&#x20; \* Desktop: 36px–48px

&#x20; \* Mobile: 28px–34px

&#x20; \* Weight: 700

\* Subheading:



&#x20; \* 20px–24px

&#x20; \* Weight: 600

\* Body:



&#x20; \* 16px–18px

&#x20; \* Line-height: 1.8

\* Small metadata:



&#x20; \* 13px–14px

&#x20; \* Letter spacing: 0.02em



Avoid thin, weak typography.

The site must feel stable and trustworthy.



\---



\## 5. Layout Principles



\### Overall Layout



\* Use generous spacing.

\* Avoid cramped sections.

\* Use clear hierarchy.

\* Maintain strong visual rhythm.

\* Each section should feel like a premium website section, not a stacked template block.



\### Max Width



Use:



```css

max-width: 1180px;

margin-inline: auto;

padding-inline: 24px;

```



For wide hero or cinematic sections, use full bleed with inner max-width content.



\### Section Spacing



Desktop:



```css

padding-block: 96px;

```



Mobile:



```css

padding-block: 64px;

```



\### Card Radius



Use restrained radius.



```css

border-radius: 8px;

```



Maximum radius: 12px.

Avoid pill-shaped cards except CTA buttons.



\### Grid



Use asymmetrical editorial grids where possible.



Examples:



\* Services:



&#x20; \* Left: one large featured service panel

&#x20; \* Right: compact service tile matrix

\* Pricing:



&#x20; \* Left two-thirds: white pricing panel

&#x20; \* Right one-third: dark explanatory caption

\* Reasons:



&#x20; \* Left: tall image crop

&#x20; \* Right: precision list

\* Works:



&#x20; \* Three large image-led case cards

\* FAQ:



&#x20; \* Left: heading and CTA

&#x20; \* Right: accordion list



Avoid generic equal card grids when a stronger editorial composition is possible.



\---



\## 6. Components



\### Buttons



Primary CTA:



\* Background: `#1F5A3A`

\* Text: `#FFFFFF`

\* Border: `1px solid rgba(255,255,255,0.18)`

\* Shadow: subtle, not flashy

\* Radius: 8px

\* Padding: 16px 24px

\* Label examples:



&#x20; \* 写真を送って概算見積

&#x20; \* 写真で状況を送る

&#x20; \* 写真で現場住所を送る



Secondary CTA:



\* Background: transparent or dark navy

\* Border: `1px solid #C8A45D`

\* Text: white or dark green depending on background

\* Labels:



&#x20; \* 電話で相談

&#x20; \* LINEで相談



Inline CTA:



\* Underlined text

\* Accent color: `#C8A45D`

\* Example:



&#x20; \* 写真を送って概算を聞く

&#x20; \* 解決しない場合は写真で相談



Avoid:



\* Flashy gradients

\* Discount badges

\* Oversized emojis

\* Cheap icons

\* Too many CTAs in one viewport



\---



\## 7. Section-Specific Rules



\### Hero / First View



Must communicate within 3 seconds:



\* 奈良市の伐採業者

\* 高木・危険木・空き家の庭木整理対応

\* 写真で概算見積可能



Use dark forest or deep navy overlay over cinematic tree/arborist image.

CTA priority:



1\. 写真を送って概算見積

2\. 電話で相談

3\. LINEで相談



Trust chips:



\* 奈良市中心

\* 高木・危険木対応

\* 写真見積可能

\* 空き家整理対応



\### Services Section



Use one large featured service panel for \*\*高木伐採\*\*.



Right-side service tiles:



\* 危険木伐採

\* 特殊伐採

\* 庭木伐採

\* 空き家の庭木整理

\* 竹林整理

\* 山林・法面伐採

\* 寺社・墓地周辺の伐採

\* 台風前後の倒木対策



Each service tile should include:



\* Service name

\* Short practical description

\* 料金目安 label

\* 写真見積可能 label



Do not make all cards identical and boring.



\### Pricing Section



Must not feel like a bargain sale.



Preferred layout:



\* Deep navy band background

\* Left two-thirds: inset white pricing table

\* Right one-third: caption and explanation



Rows:



\* 庭木伐採：5,000円〜

\* 中木伐採：20,000円〜

\* 高木伐採：50,000円〜

\* 危険木・特殊伐採：80,000円〜

\* 空き家の庭木整理：150,000円〜

\* 竹林整理：現地見積

\* 山林・法面伐採：現地見積

\* 搬出・処分：量により別途



Must include:



> 木の高さ・本数・周辺状況により変動します。写真でまずは概算をお伝えします。



\### Reasons Section



Avoid generic checkmark card grids.



Use:



\* Tall cinematic image crop of rope, saw, helmet, tree trunk

\* Right-side clean reason list

\* Small precise icons

\* Proof chips



Reasons:



\* 奈良市周辺に地域密着

\* 高木・危険木にも対応

\* 写真で概算見積可能

\* 空き家・山林・法面も相談可

\* 庭木1本から対応

\* 屋根・電線まわりも相談可

\* 施工前後写真で説明

\* 外部実績・口コミも活用



\### Works Section



Use image-led case studies.



Cases:



1\. 奈良市｜隣家にかかる高木の伐採

2\. 生駒市｜空き家の庭木整理

3\. 奈良市｜竹林整備



Each card must have:



\* 作業前 image frame

\* 作業後 image frame

\* 市町村

\* 木の種類

\* 本数

\* 高さ

\* 作業時間

\* 料金目安

\* お客様の悩み

\* 担当者コメント



Make images visually dominant.

Avoid fake statistics and stocky smiling people.



\### Service Area Section



Use map-inspired editorial style.



Priority:



\* メイン対応：奈良市

\* Secondary chips:



&#x20; \* 生駒市

&#x20; \* 大和郡山市

&#x20; \* 天理市

&#x20; \* 桜井市

&#x20; \* 橿原市

&#x20; \* 香芝市

&#x20; \* 王寺町

&#x20; \* 斑鳩町

&#x20; \* 木津川市

&#x20; \* 精華町



Small note:



> 奈良県内、大阪・京都・三重・和歌山方面も内容により相談可能



Do not overemphasize 関西一円.

奈良市・奈良県 must be visually dominant.



\### Process Section



Use horizontal timeline with 8 steps.



Steps:



1\. 写真を送る

2\. 概算見積

3\. 現地確認

4\. 正式見積

5\. 作業日決定

6\. 伐採作業

7\. 片付け・搬出

8\. 完了確認



Step 1 must be visually emphasized.

Use phone/photo upload motif.

Avoid cartoon illustrations.



\### FAQ Section



Use calm minimalist accordion style.



Questions:



1\. 写真だけで見積できますか？

2\. 1本だけでも依頼できますか？

3\. 高木や危険木も対応できますか？

4\. 電線に近い木も相談できますか？

5\. 空き家の庭木整理も可能ですか？

6\. 伐採した木の処分もできますか？

7\. 雨の日でも作業できますか？

8\. 近隣への配慮はしてもらえますか？

9\. 見積後に断っても大丈夫ですか？

10\. 奈良市以外も対応できますか？



Include inline CTA:



> 解決しない場合は写真で相談



\### Final CTA



Use cinematic full-bleed section.



Headline:



> まずは写真をお送りください



Body:



> 倒れそうな木、隣家にかかる枝、空き家の荒れた庭木でお困りでしたら、現場状況を確認し、概算見積をお伝えします。



CTA cluster:



\* 写真を送って概算見積

\* 電話で相談

\* LINEで相談



Trust note:



> 奈良市中心・奈良県内対応



\---



\## 8. Imagery Rules



Use realistic imagery:



\* Arborist rope work

\* Tree trunk

\* Helmet

\* Chainsaw

\* Climbing rope

\* Cut logs

\* Cleared yard

\* Overgrown yard

\* Bamboo grove

\* Nara local residential context



Avoid:



\* Fake smiling business people

\* Cartoon tree illustrations

\* Generic stock office imagery

\* Over-polished fantasy forest

\* AI-looking hands or tools

\* Decorative blobs



If real photos are unavailable, use neutral placeholder frames that are easy to replace later.



\---



\## 9. Responsive Behavior



Mobile priorities:



\* Clear hero message

\* CTA visible early

\* Fixed bottom CTA retained

\* No horizontal scroll

\* Buttons must be large enough to tap

\* Service tiles stack cleanly

\* Process timeline becomes vertical

\* Pricing table remains readable

\* FAQ rows stay high contrast



Touch target minimum:



```css

min-height: 44px;

```



Do not let fixed CTA cover content.

Add sufficient bottom padding on mobile.



\---



\## 10. Do / Don't



\### Do



\* Make it feel professional and local.

\* Use dark green/navy/white/wood accent consistently.

\* Prioritize trust, safety, and clarity.

\* Make photos and case studies dominant.

\* Keep CTA practical and visible.

\* Use generous spacing.

\* Use precise layout rhythm.

\* Keep Japanese copy readable.



\### Don't



\* Do not make it colorful.

\* Do not add purple gradients.

\* Do not use cheap icons.

\* Do not use discount badges.

\* Do not over-round cards.

\* Do not make everything a generic card grid.

\* Do not overuse animations.

\* Do not make the site feel like a low-price flyer.

\* Do not bury the photo estimate CTA.

\* Do not emphasize 関西一円 more than 奈良市・奈良県.



\---



\## 11. Implementation Guardrails



When modifying the site:



\* Preserve SEO title and meta description unless explicitly asked.

\* Preserve LocalBusiness / Service / FAQPage structured data.

\* Preserve service count: 9 services.

\* Preserve FAQ count: 10 questions.

\* Preserve CTA destinations from `SITE\_CONFIG`.

\* Do not break `script.js`.

\* Do not delete images.

\* Do not add unnecessary external libraries.

\* Keep GitHub Pages compatibility.

\* Prefer CSS improvements before restructuring HTML.

\* Add classes only when necessary for layout quality.



\---



\## 12. Definition of Done



A design change is complete only if:



\* Desktop has no horizontal scroll.

\* Mobile has no horizontal scroll.

\* First view clearly says 奈良市の高木・危険木・空き家伐採.

\* Primary CTA is 写真を送って概算見積.

\* Phone and LINE CTAs remain functional.

\* Site does not look like a discount or generic template.

\* Services, pricing, reasons, works, area, process, FAQ, and final CTA follow this DESIGN.md.

\* Visual hierarchy is strong.

\* Spacing is generous.

\* Color palette is consistent.

\* The site can be shown to 不動産会社・解体業者・工務店・寺社関係者 without looking amateur.



