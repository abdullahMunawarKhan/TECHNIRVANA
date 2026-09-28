/*
  TECHNIRVANA — Registration Links

  Replace the three placeholder URLs below
  with your actual Google Form links.
*/

const FORM_LINKS = {
  codopoly: "PASTE_CODOPOLY_GOOGLE_FORM_LINK_HERE",

  business: "https://forms.gle/4y7s1YcnmdLBycs27",

  pencil: "https://forms.gle/KTpkJfkBJHfdAsa67"
};

// ==========================================
// Toast Notification
// ==========================================

const toast = document.getElementById("toast");

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.__toastTimer);

  window.__toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// ==========================================
// Registration Buttons
// ==========================================

document.querySelectorAll("[data-event]").forEach((button) => {

  button.addEventListener("click", (event) => {

    event.preventDefault();

    const eventName = button.dataset.event;

    const url = FORM_LINKS[eventName];

    // Check whether the Google Form link
    // has actually been added.
    if (
      !url ||
      url.includes("PASTE_")
    ) {
      showToast("Google Form link will be added here soon.");
      return;
    }

    // Open Google Form in a new tab
    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  });

});


// ==========================================
// Smooth Navigation / Active Section
// ==========================================

const sections = document.querySelectorAll(
  "main section[id]"
);

const navLinks = document.querySelectorAll(
  ".navbar nav a"
);


// Detect which section is currently visible
const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {

        const isActive =
          link.getAttribute("href") ===
          `#${entry.target.id}`;

        if (isActive) {
          link.style.opacity = "1";
        } else {
          link.style.opacity = "";
        }

      });

    });

  },
  {
    rootMargin: "-35% 0px -55% 0px"
  }
);


// Start observing sections
sections.forEach((section) => {
  observer.observe(section);
});