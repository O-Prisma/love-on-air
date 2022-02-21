const yesBtn = document.querySelector("[data-yes]");
const noBtn = document.querySelector("[data-no]");
const final = document.querySelector("[data-final]");

function noBtnHandler() {
  
  if (!noBtn.classList.contains("abs")) {
    noBtn.classList.add("abs");
  }
  
  let rect = noBtn.getBoundingClientRect()
  let randX = Math.floor(
    Math.random() * 
    (innerWidth - rect.width / 2)
  );
  let randY = Math.floor(
    Math.random() * 
    (innerHeight - rect.height / 2)
  );
  
  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;
  
}

function yesBtnHandler() {
  final.classList.add("flex");
}

noBtn.addEventListener("click", e => {
  e.preventDefault();
  noBtnHandler();
});

yesBtn.addEventListener("click", e => {
  e.preventDefault();
  yesBtnHandler();
});
