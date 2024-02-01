var owl = $(".owl-carousel");

const username = "luisalvacelis";
const apiUrl = `https://api.github.com/users/${username}/repos`;

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
            <a href="${
              repository.html_url
            }" target="_blank" class="btn btn-primary">Ver en Github</a>
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
