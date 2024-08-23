const buttons = document.querySelectorAll("input[type=button]");
const Acceptbutton = document.querySelector("input[type=submit]");
const MyRes = document.getElementById("YouRate");
let selected = 0;
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    selected = e.target.value;
  });
});
Acceptbutton.addEventListener("click", (e) => {
  document.getElementById("WelcomeState").style.display = "none";
  document.getElementById("ThankYouState").style.display = "block";
  if (selected ) {
    MyRes.innerHTML = `You have selected ${selected} out of 5`;
    document.appendChild(MyRes);
  }
  if (selected == 0 ) {
    MyRes.innerHTML = `You have not selected any rating`;
    MyRes.classList.toggle("col-12")
    document.appendChild(MyRes);
  }
});
