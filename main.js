let repos_list = document.querySelector(".repos__list");

data.forEach((repo) => {
  $(".repos__list").append(`
  <div class="repos__card">
          <img
            src="./assets/images/default.png"
            alt="repo Image"
            class="repo__image"
            onerror="this.onerror=null; this.src='./assets/images/default.png'"
          />

          <div class="repo__info">
            <div class="repo__tags">
            ${repo.stack
              .map((tech) => `<div class="repo__tag">${tech}</div>`)
              .join("")}
            </div>
            <div class="repo__name">${repo.name}</div>
            <div class="repo__maintainer">${repo.maintainer}</div>
            <div class="repo__description">
              ${repo.description.substring(0, 100)}..
            </div>
            <a target="_blank" class="repo__call_to_action" href="${
              repo.url
            }"> Contribute </a>
          </div>
          
        </div>
  `);
});
