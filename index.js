// 1. Get all buttons, icons, and panels
// 2. Attach an event listener (click) to each button
/* 3. For each click event
    a. Icons need to be toggled between plus icon and minus icon
    b. Panels need to be shown, hence the aria attirbutes need to toggle too
*/

const accordionButtons = document.querySelectorAll(".accordion-trigger");

const accordionPanelHandler = (e) => {
  const targetSection = e.target.closest(".accordion-section");
  const targetButton = targetSection.querySelector("button");
  const targetIcon = targetSection.querySelector(".accordion-icon");
  const targetPanel = targetSection.querySelector(".accordion-panel");

  //   console.log(targetSection, targetButton, targetIcon, targetPanel);

  if (targetPanel.hidden) {
    targetButton.setAttribute("aria-expanded", true);
    targetIcon.src = "./assets/images/icon-minus.svg";
    targetPanel.hidden = false;
  } else {
    targetButton.setAttribute("aria-expanded", false);
    targetIcon.src = "./assets/images/icon-plus.svg";
    targetPanel.hidden = true;
  }
};

accordionButtons.forEach((button) => {
  button.addEventListener("click", accordionPanelHandler);
});
