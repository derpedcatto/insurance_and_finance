/* ----------------------------- Image Scroller ----------------------------- */

function initImgScrollerAnimation() {
  const scrollers = document.querySelectorAll(".osago-scroller");

  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".osago-scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

/* -------------------------------- Accordion ------------------------------- */

function initAccordion() {
  const accordionContainers = document.getElementsByClassName('accordion-container');

  for (i = 0; i < accordionContainers.length; i++) {
    const accordionLabelContainer = accordionContainers[i].getElementsByClassName('accordion-label-container')[0];

    accordionLabelContainer.addEventListener('click', function () {
      this.parentNode.classList.toggle('accordion-active');
      const icon = this.getElementsByClassName('accordion-icon')[0];
      icon.textContent = icon.textContent === '+' ? '-' : '+';
    });
  }
}

/* ------------------------------- Initialize ------------------------------- */

function initializePage() {
  initImgScrollerAnimation();
  initAccordion();
}

document.addEventListener('DOMContentLoaded', initializePage);