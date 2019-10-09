console.log("BANGARANNNNNG");

/* 
Use JavaScript to obtain a reference to the first section with the class of article_header [article__header]
and change its text with the textContent property 
to "Welcome to the {insert your name here} blog" 
*/
const firstSection = document.querySelector(".article__header");
console.log("firstSection", firstSection);
firstSection.textContent = "Welcome to the Ryan #3 blog";

/* 
Use JavaScript to obtain a reference to all article__header elements 
and change their classList property value to article__header important.
 */
const allArticleHeaders = document.querySelectorAll(".article__header");
for(let i=0; i<allArticleHeaders.length; i++){
    allArticleHeaders[i].classList ="acrticle__header important";
}

/* 
Obtain a reference [to] the element with a class of dashed and remove it.
 */
const removeDashedEl = document.querySelector(".dashed");
removeDashedEl.classList.remove("dashed");

/* 
Obtain a reference [to] the element with a class of article_footer and add the class of goldenrod to it
 */
const footerEl = document.querySelector(".article__footer");
footerEl.classList.add("goldenrod");