function toggleAllDescriptions() {
  const personaCards = document.querySelectorAll('.persona-card');
  let allExpanded = true;

  personaCards.forEach(card => {
    const description = card.querySelector('.persona-description');
    if (description.style.display === "none" || description.style.display === "") {
      allExpanded = false;
    }
  });

  personaCards.forEach(card => {
    const description = card.querySelector('.persona-description');
    const toggleIcon = card.querySelector('.toggle-icon');

    if (allExpanded) {
      description.style.display = "none";
      toggleIcon.textContent = "▶";
      card.classList.remove('expanded');
    } else {
      description.style.display = "block";
      toggleIcon.textContent = "▼";
      card.classList.add('expanded');
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.persona-header').forEach(header => {
    header.addEventListener('click', toggleAllDescriptions);
  });
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const projectCards = document.querySelectorAll(".project-card");

  tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
          tabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");

          const category = tab.getAttribute("data-tab");

          projectCards.forEach((card) => {
              const categories = card.getAttribute("data-category").split(" ");
              if (category === "all" || categories.includes(category)) {
                  card.style.display = "block";
              } else {
                  card.style.display = "none";
              }
          });
      });
  });
});





