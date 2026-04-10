(function () {
  "use strict";

  var projects = [
    { label: "Nigeria", href: "nigeria.html" },
    { label: "South Africa", href: "south-africa.html" },
    { label: "MLK", href: "mlk.html" },
    { label: "Works On Paper", href: "works-on-paper.html" },
    { label: "Women", href: "women.html" },
  ];

  var root = document.getElementById("project-carousel");
  if (!root) return;

  var links = root.querySelectorAll(".hero__carousel-link");
  if (links.length < 2) return;

  var visibleIdx = 0;
  var currentIndex = 0;
  var paused = false;
  var timerId = null;
  var TRANSITION_MS = 500;
  var DISPLAY_MS = 3000;

  function clearTimer() {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
  }

  function scheduleAdvance() {
    clearTimer();
    if (paused) return;
    timerId = window.setTimeout(function () {
      timerId = null;
      advance();
    }, DISPLAY_MS);
  }

  function setLinkState(el, isVisible) {
    if (isVisible) {
      el.classList.add("is-visible");
      el.removeAttribute("aria-hidden");
      el.removeAttribute("tabindex");
    } else {
      el.classList.remove("is-visible");
      el.setAttribute("aria-hidden", "true");
      el.setAttribute("tabindex", "-1");
    }
  }

  function advance() {
    var nextIndex = (currentIndex + 1) % projects.length;
    var showIdx = 1 - visibleIdx;
    var next = projects[nextIndex];

    links[showIdx].href = next.href;
    links[showIdx].textContent = next.label;

    setLinkState(links[visibleIdx], false);
    setLinkState(links[showIdx], true);

    window.setTimeout(function () {
      currentIndex = nextIndex;
      visibleIdx = showIdx;
      var preloadIdx = (currentIndex + 1) % projects.length;
      var hideIdx = 1 - visibleIdx;
      var preload = projects[preloadIdx];
      links[hideIdx].href = preload.href;
      links[hideIdx].textContent = preload.label;
      setLinkState(links[hideIdx], false);
      scheduleAdvance();
    }, TRANSITION_MS);
  }

  root.addEventListener("mouseenter", function () {
    paused = true;
    clearTimer();
  });

  root.addEventListener("mouseleave", function () {
    paused = false;
    scheduleAdvance();
  });

  var preloadIdx = (currentIndex + 1) % projects.length;
  var preload = projects[preloadIdx];
  links[1].href = preload.href;
  links[1].textContent = preload.label;
  setLinkState(links[0], true);
  setLinkState(links[1], false);

  scheduleAdvance();
})();
