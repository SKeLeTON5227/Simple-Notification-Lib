document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".lib-style-notification");

  const notification = {
    show() {
      container.classList.add("notification-show");
    },

    hide() {
      container.classList.remove("notification-show");
    },

    create(settings) {
      const newNotif = document.createElement("div");
      newNotif.innerHTML = `<div class="lib-style-title">
        <h1>${settings?.title || `Example title`}</h1>
      </div>
      <div class="lib-style-content">
        <p>
          ${settings?.content || `Your content here!`}
        </p>
      </div>
      <div class="lib-style-buttons">
        <button class="lib-style-button button-style-danger" onclick="notification.hide()">Close</button>
        <a href="${
          settings?.link || `https://github.com/SKeLeTON5227?tab=repositories`
        }" target="_blank"><button class="lib-style-button button-style-active">Open</button></a>
      </div>`;
      container.appendChild(newNotif);
    },
  };

  window.notification = notification;

  window.settings = {
    title: `Example title`,
    content: `Example content`,
    link: `https://github.com/SKeLeTON5227?tab=repositories`,
  };
});
