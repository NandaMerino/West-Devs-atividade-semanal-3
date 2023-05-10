document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btns");

    const buttonActive = document.getElementById("active");

    buttonActive.classList.add("btn-selected")
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("btn-selected"));
        button.classList.add("btn-selected");
      });
    });
  });