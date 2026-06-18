\# AGENTS.md — 竜樹伐採 Codex Instructions



\## Project



This repository is the static GitHub Pages website for \*\*竜樹伐採\*\*.



Business positioning:



> 竜樹伐採 = 奈良市・奈良県の高木伐採、危険木伐採、特殊伐採、空き家の庭木整理に対応する専門業者。



The primary business goal is to increase inquiries from people and local businesses who need:



\* 高木伐採

\* 危険木伐採

\* 特殊伐採

\* 庭木伐採

\* 空き家の庭木整理

\* 竹林整理

\* 山林・法面伐採

\* 寺社・墓地周辺の伐採

\* 台風前後の倒木対策



Do not reposition the site as a generic landscaping company, AI/Web service, farming brand, or low-price handyman.



\---



\## Mandatory Design Instruction



Before making any UI, CSS, layout, or copy changes, read and follow:



```text

DESIGN.md

```



`DESIGN.md` is the source of truth for:



\* color palette

\* typography

\* spacing

\* section layouts

\* CTA hierarchy

\* imagery direction

\* anti-patterns

\* responsive behavior

\* premium local specialist mood



If a user asks for a design change and it conflicts with `DESIGN.md`, preserve the intent of `DESIGN.md` unless the user explicitly overrides it.



\---



\## Core UX Goal



The site must make the following clear within 3 seconds:



1\. 奈良市・奈良県の伐採業者であること

2\. 高木・危険木・空き家の庭木整理に対応していること

3\. 写真を送れば概算見積できること



Primary CTA:



```text

写真を送って概算見積

```



Secondary CTAs:



```text

電話で相談

LINEで相談

```



Do not bury these CTAs.



\---



\## Technical Rules



This is a static website intended for GitHub Pages.



Follow these rules:



\* Keep the site static.

\* Do not add unnecessary frameworks.

\* Do not add heavy dependencies.

\* Do not break existing `script.js` behavior.

\* Preserve `SITE\_CONFIG` usage for phone, LINE, and email destinations.

\* Do not delete images unless explicitly instructed.

\* Prefer improving `styles.css` before restructuring `index.html`.

\* If HTML changes are needed, keep them minimal and semantic.

\* Maintain responsive behavior.

\* Maintain mobile fixed CTA.

\* Avoid horizontal scroll.

\* Preserve accessibility basics:



&#x20; \* readable contrast

&#x20; \* proper headings

&#x20; \* useful alt text

&#x20; \* tappable buttons

&#x20; \* keyboard-friendly FAQ if applicable



\---



\## SEO Rules



Preserve or improve SEO for the following target themes:



\* 奈良市 高木伐採

\* 奈良 危険木 伐採

\* 奈良市 庭木 伐採

\* 奈良 空き家 庭木 伐採

\* 奈良 竹林 整理

\* 奈良 山林 伐採

\* 奈良 法面 伐採

\* 奈良 特殊伐採

\* 奈良市 木を切る 業者



SEO title direction:



```text

竜樹伐採｜奈良市の高木・危険木・空き家伐採

```



Meta description direction:



```text

竜樹伐採は奈良市を中心に、高木伐採・危険木伐採・空き家の庭木整理・竹林整理に対応。写真を送るだけで概算見積可能。隣家・屋根・電線に近い木もご相談ください。

```



Preserve structured data when present:



\* LocalBusiness

\* Service

\* FAQPage



\---



\## Content Rules



Keep the copy practical and trustworthy.



Use:



\* 奈良市中心

\* 奈良県内対応

\* 高木・危険木対応

\* 写真で概算見積可能

\* 空き家・山林・法面も相談可

\* 屋根・電線まわりも相談可

\* 施工前後写真で説明

\* 外部実績・口コミも活用



Avoid:



\* 安さだけを強調する表現

\* 「激安」

\* 「地域最安」

\* 派手な煽り文句

\* 何でもできます感

\* AI/Web制作の前面訴求

\* 農業や投資の話

\* 実績や資格を偽る表現

\* 根拠のないNo.1表記

\* 偽の件数や口コミ



\---



\## Required Sections



The top page should preserve these 10 sections unless explicitly told otherwise:



1\. First View / Hero

2\. Problems

3\. Services

4\. Pricing Guide

5\. Reasons

6\. Works / Case Studies

7\. Service Area

8\. Process Flow

9\. FAQ

10\. Final CTA



Design and layout should follow `DESIGN.md`.



\---



\## Verification Checklist



After changes, verify and report:



1\. Changed files

2\. What was changed

3\. Whether `DESIGN.md` was followed

4\. Desktop layout check

5\. Mobile layout check

6\. CTA functionality check

7\. Whether there is horizontal scroll

8\. Whether FAQ still works

9\. Whether `SITE\_CONFIG` is preserved

10\. Whether structured data remains valid

11\. Any remaining risks before publishing



\---



\## Definition of Done



Do not consider the task complete unless:



\* The design looks like a serious local specialist, not a cheap template.

\* Primary CTA is visually dominant.

\* Phone and LINE CTAs are still present.

\* Mobile fixed CTA still works.

\* Services, pricing, reasons, works, area, process, FAQ, and final CTA remain present.

\* Desktop and mobile have no obvious layout breakage.

\* The implementation can be deployed to GitHub Pages.



