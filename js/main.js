(function () {
  "use strict";

  /* ===== HOME — CAROUSEL ===== */

  var carouselLinks = document.querySelectorAll(".hero__carousel-link");
  if (carouselLinks.length > 1) {
    var currentIdx = 0;
    var paused = false;
    var timerId = null;
    var transitioning = false;
    var DISPLAY_MS = 3000;
    var POP_OUT_MS = 250;

    function advance() {
      if (transitioning) return;
      transitioning = true;

      // Pop out current
      var current = carouselLinks[currentIdx];
      current.classList.remove("is-active");
      current.classList.add("is-exiting");

      setTimeout(function () {
        current.classList.remove("is-exiting");

        // Pop in next
        currentIdx = (currentIdx + 1) % carouselLinks.length;
        carouselLinks[currentIdx].classList.add("is-active");

        transitioning = false;
        schedule();
      }, POP_OUT_MS);
    }

    function schedule() {
      clearTimeout(timerId);
      if (!paused) {
        timerId = setTimeout(advance, DISPLAY_MS);
      }
    }

    var carousel = document.querySelector(".hero__carousel");
    if (carousel) {
      carousel.addEventListener("mouseenter", function () {
        paused = true;
        clearTimeout(timerId);
      });
      carousel.addEventListener("mouseleave", function () {
        paused = false;
        schedule();
      });
    }

    carouselLinks[0].classList.add("is-active");
    schedule();
  }

  /* ===== ABOUT — TYPEWRITER ===== */

  var typewriterEl = document.getElementById("typewriter-target");
  if (typewriterEl) {
    var fullHTML = typewriterEl.getAttribute("data-text");
    var charDelay = 30;
    var plainText = "";
    var tagMap = []; // maps plain-text index to HTML up to that point

    // Parse the HTML string to build a plain-text version and a mapping
    // so we can type character by character while preserving tags
    (function parseHTML() {
      var i = 0;
      var htmlSoFar = "";
      while (i < fullHTML.length) {
        if (fullHTML[i] === "<") {
          var tagEnd = fullHTML.indexOf(">", i);
          if (tagEnd === -1) tagEnd = fullHTML.length - 1;
          htmlSoFar += fullHTML.substring(i, tagEnd + 1);
          i = tagEnd + 1;
        } else {
          htmlSoFar += fullHTML[i];
          plainText += fullHTML[i];
          tagMap.push(htmlSoFar);
          i++;
        }
      }
    })();

    var charIndex = 0;
    var cursor = document.createElement("span");
    cursor.className = "typewriter-cursor";

    function typeNext() {
      if (charIndex < plainText.length) {
        typewriterEl.innerHTML = tagMap[charIndex];
        typewriterEl.appendChild(cursor);
        charIndex++;
        setTimeout(typeNext, charDelay);
      } else {
        // Typing done — remove cursor after a short pause
        setTimeout(function () {
          if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
          onTypewriterDone();
        }, 600);
      }
    }

    function onTypewriterDone() {
      // Show "Listed here, are a few"
      var listed = document.getElementById("about-listed");
      if (listed) listed.classList.add("is-visible");

      // Stagger in partner grid items
      var items = document.querySelectorAll(".partner-grid li");
      items.forEach(function (item, i) {
        setTimeout(function () {
          item.classList.add("is-visible");
        }, 60 * i);
      });
    }

    // Start typing on page load
    typeNext();
  }

  /* ===== PROJECTS PAGE ===== */

  var projectData = {
    nigeria: {
      title: "Nigeria",
      items: [
        "LagosAtlanta Artist Residency",
        "US Consulate Celebrates 50 Years as Sister Cities",
        "Nigerian Galleries at the High Museum of Art",
        "Bruce Onobrakpeya: The Mask and the Cross",
        "Bruce Onobrakpeya and dele jegede in Conversation",
        "NMAFA at 60: A Weekend with Bruce Onobrakpeya",
        "Nigeria\u2019s Latest Food Sovereignty Struggle: The World is Watching publication",
        "Austere Imaginary",
      ],
      next: { hash: "south-africa", label: "To South Africa" },
    },
    "south-africa": {
      title: "South Africa",
      items: [
        "Ezrom Legae: Beasts",
        "Three Decades of Democracy: South African Works on Paper",
        "Printmaking in South African Art with Mary Sibande and Judy Hecker",
        "21st Century Museums: Zeitz Museum of Contemporary Art and the High Museum of Art with Koyo Kouoh",
        "On Memory and Place with Yasser Booley, Thania Peterson and Haroon Gunn-Saile",
        "Salon #68: The History of Atlanta and South Africa Relations",
      ],
      next: { hash: "mlk", label: "To MLK" },
    },
    mlk: {
      title: "MLK",
      items: [
        "The Other Dream: King and the Poor People\u2019s Campaign",
        "Headline, Byline, Exclusive: King\u2019s Legacy through Media",
        "In Remembrance of King: Civil Rights Tapestries by Peter Sis",
        "70th Anniversary of the Universal Declaration of Human Rights",
        "We Share the Dream: King\u2019s Beloved Community",
        "The Meaning of Hope: Best of the Martin Luther King, Jr. Collection",
        "Fragments",
      ],
      next: { hash: "works-on-paper", label: "To Works On Paper" },
    },
    "works-on-paper": {
      title: "Works On Paper",
      items: [
        "Austere Imaginary",
        "Ezrom Legae: Beasts",
        "Bruce Onobrakpeya: The Mask and the Cross",
        "Three Decades of Democracy: South African Works on Paper",
        "Printmaking in South African Art with Mary Sibande and Judy Hecker",
      ],
      next: { hash: "women", label: "To Women" },
    },
    women: {
      title: "Women",
      items: [
        "Austere Imaginary",
        "re/mix at the Congo Biennale",
        "the end is near, the end is the beginning",
        "Her Truth, Her Power",
        "Women and Ceramic Arts in Africa",
        "Clay as Living Archive with Jareh Das, Adebunmi Gbadebo and Anina Major",
        "Beyond Mythologies: Black Women Heroes of the Atlantic with Grace Kisa and Thabisile Griffin",
        "I See (Wo)men As Trees artist talk with Taiye Idahor",
        "African Modernism: Women in Focus",
        "Women and Water Scarcity in East Africa",
        "Black Women in STEM",
      ],
      next: { hash: "nigeria", label: "To Nigeria" },
    },
  };

  var projectTitleEl = document.getElementById("project-title");
  var projectListEl = document.getElementById("project-list");
  var projectNextEl = document.getElementById("project-next");
  var projectSubheading = document.getElementById("project-subheading");
  var projectContent = document.getElementById("project-content");

  if (projectTitleEl && projectListEl) {
    function getHashKey() {
      var hash = window.location.hash.replace("#", "");
      return projectData[hash] ? hash : "nigeria";
    }

    function renderProject(key, animate) {
      var data = projectData[key];
      if (!data) return;

      projectTitleEl.textContent = data.title;
      document.title = data.title + " — Lauren Tate Baeza";

      // Build list
      projectListEl.innerHTML = "";
      data.items.forEach(function (item) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#";
        a.textContent = item;
        li.appendChild(a);
        projectListEl.appendChild(li);
      });

      // Next link
      projectNextEl.href = "#" + data.next.hash;
      projectNextEl.textContent = data.next.label;

      if (animate) {
        // Underline draw-in animations
        projectSubheading.classList.remove("underline-in");
        projectNextEl.classList.remove("underline-in");
        // Force reflow to restart animation
        void projectSubheading.offsetWidth;
        projectSubheading.classList.add("underline-in");
        projectNextEl.classList.add("underline-in");

        // Stagger list items
        var items = projectListEl.querySelectorAll("li");
        items.forEach(function (item, i) {
          setTimeout(function () {
            item.classList.add("is-visible");
          }, 80 * i);
        });
      } else {
        projectSubheading.classList.add("underline-in");
        projectNextEl.classList.add("underline-in");
        projectListEl.querySelectorAll("li").forEach(function (item) {
          item.classList.add("is-visible");
        });
      }
    }

    // Handle next link clicks with fade transition
    projectNextEl.addEventListener("click", function (e) {
      e.preventDefault();
      var nextHash = this.href.split("#")[1];
      window.location.hash = nextHash;
    });

    // Listen for hash changes
    window.addEventListener("hashchange", function () {
      var key = getHashKey();
      // Fade out
      projectContent.classList.add("is-fading");
      setTimeout(function () {
        renderProject(key, true);
        projectContent.classList.remove("is-fading");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    });

    // Initial render
    var initialKey = getHashKey();
    if (!window.location.hash || !projectData[window.location.hash.replace("#", "")]) {
      history.replaceState(null, "", "#" + initialKey);
    }
    renderProject(initialKey, true);
  }

  /* ===== CONTACT — FORM VALIDATION ===== */

  var contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      var fields = contactForm.querySelectorAll("[required]");
      fields.forEach(function (field) {
        if (!field.value.trim()) {
          valid = false;
          field.style.boxShadow = "0 2px 0 0 #cc3333";
        } else {
          field.style.boxShadow = "";
        }
      });

      // Basic email check
      var emailField = contactForm.querySelector("#email");
      if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        valid = false;
        emailField.style.boxShadow = "0 2px 0 0 #cc3333";
      }

      if (valid) {
        alert("Thank you for your message! (Form action placeholder)");
        contactForm.reset();
      }
    });
  }
})();
