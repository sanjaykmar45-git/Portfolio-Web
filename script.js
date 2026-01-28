const viewProjectBtn = document.querySelector("#view-project");
const icons = document.querySelectorAll(".icon a");
const form = document.querySelector("form");
const sections = document.querySelectorAll("section");


viewProjectBtn.addEventListener("click", () => {
  document.querySelector(".projects").scrollIntoView({
    behavior: "smooth"
  });
});

icons.forEach(icon => {
    icon.addEventListener("mouseenter" , () => {
        icon.computedStyleMap.transform = "scale(1.2)";
    });

    icon.addEventListener("mouseleave" , () => {
        icon.computedStyleMap.transform = "scale(1)";
    });
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = form.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if(!name || !email || !message){
        alert("Please fill all fields");
        return;
    }

    alert("Message sent successfully!");
    form.reset();
});


window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      section.classList.add("show");
    }
  });
});
