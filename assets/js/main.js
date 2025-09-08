document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".active_trigger").forEach(trigger =>
        trigger.addEventListener("click", e => {
            e.preventDefault();
            const block = trigger.nextElementSibling?.classList.contains("active_triggerBlock")
                ? trigger.nextElementSibling
                : trigger.closest(".active_container")?.querySelector(".active_triggerBlock");
            if (!block) return;
            trigger.classList.toggle("active");
            block.classList.toggle("active");
            block.style.maxHeight = block.classList.contains("active") ? block.scrollHeight + "px" : null;
        })
    );
});


document.addEventListener("DOMContentLoaded", () => {
  const dropArrows = document.querySelectorAll(".drop_arrow_active");

  dropArrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      e.preventDefault();

      const parentItem = arrow.closest(".drop_items");
      const dropContent = document.querySelector(".drop_itemBox_inner_block");

      if (parentItem.classList.contains("open")) {
        parentItem.classList.remove("open");
        dropContent.style.maxWidth = null;
      } else {
        parentItem.classList.add("open");
        const newWidth = Math.max(250, dropContent.scrollWidth); 
        dropContent.style.maxWidth = newWidth + "px";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".drop_arrow_active").forEach(function (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      document.querySelectorAll(".drop_itemBox_inner_block").forEach(function (menu) {
        menu.classList.toggle("open");
      });
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav_fLink");
  const dropBoxes = document.querySelectorAll(".drop_itemBox.drop_itemBox_inner_block");

  navLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove("active"));
      dropBoxes.forEach(box => box.classList.remove("active"));

      link.classList.add("active");
      if (dropBoxes[index]) {
        dropBoxes[index].classList.add("active");
      }
    });
  });
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light_active");
});
