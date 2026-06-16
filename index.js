/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

/* -----------------------------------------
  Visitor Counter — Cloud Resume Challenge
  -------------------------------------------
  This is YOUR part to build. The two spans below already exist in the
  page (in the header and the footer). Once your AWS backend is live:

    1. Build the backend yourself:
         API Gateway  ->  Lambda  ->  DynamoDB
       The Lambda should increment a counter item in DynamoDB and
       return the new total (e.g. as JSON: { "count": 1234 }).

    2. Put your invoke URL in API_URL below.

    3. fetch() that URL, read the count, and write it into both spans:
         document.getElementById("visitor-count")
         document.getElementById("visitor-count-footer")

  Leaving this unimplemented just shows a "—" placeholder, so the
  page looks fine until your API is ready.
 ---------------------------------------- */

// const API_URL = "https://YOUR-API-ID.execute-api.REGION.amazonaws.com/visitors";
//
// TODO (you): fetch the count from API_URL and update the two spans.
