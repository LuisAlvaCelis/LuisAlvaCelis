AOS.init({
  duration: 1200,
});

var owl = $(".owl-carousel");

const username = "luisalvacelis";
const apiUrl = `https://api.github.com/users/${username}/repos`;

$.get(apiUrl, function (repositories) {
  const repositoriesDiv = $("#repositories-desktop");
  repositories.forEach((repository) => {
    const originalDate = new Date(repository.updated_at);
    const dateFormat = new Intl.DateTimeFormat("es-Es", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "UTC",
    });
    const formattedDate = dateFormat.format(originalDate);
    const repoArticle = `<div class="portfolio-card" style="width: 18rem">
    <div class="portfolio-card-body">
      <h5 class="portfolio-card-title">${repository.name}</h5>
      <h6 class="portfolio-card-subtitle mb-2 text-muted">${formattedDate}</h6>
      <p class="portfolio-card-text">
        <em>${repository.language}</em> - ${
      repository.description || "Descripción no disponible"
    }
      </p>
      <a href="${
        repository.html_url
      }" target="_blank" class="btn btn-primary portfolio-card-link">Ver en GitHub</a>
    </div>
  </div>`;
    repositoriesDiv.append(repoArticle);
  });
});

$.get(apiUrl, function (repositories) {
  const repositoriesDiv = $("#repositories");
  repositories.forEach((repository) => {
    const originalDate = new Date(repository.updated_at);
    const dateFormat = new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "UTC",
    });
    const formattedDate = dateFormat.format(originalDate);
    const repoArticle = `
          <article class="portfolio-detail--card">
            <p class="portfolio--card-time">${formattedDate}</p>
            <p class="portfolio--card-title">${repository.name}</p>
            <p class="portfolio--card-lenguage">${repository.language}</p>
            <p class="portfolio--card-description">
              ${repository.description || "Descripción no disponible"}
            </p>
            <a href="" target="_blank" class="btn btn-primary">Ver en Github</a>
          </article>`;

    repositoriesDiv.append(repoArticle);
  });
});

owl.owlCarousel({
  items: 3,
  loop: false,
  padding: 0,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 5000,
  autoplayHoverPause: true,
  slideTransition: "linear",
});
