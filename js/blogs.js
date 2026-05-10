const BLOGS_PER_PAGE = 4;

let currentPage = 1;

function renderBlogs() {
  const container = document.getElementById("blog-container");

  const start = (currentPage - 1) * BLOGS_PER_PAGE;
  const end = start + BLOGS_PER_PAGE;

  const pageBlogs = blogs.slice(start, end);

  container.innerHTML = pageBlogs
    .map(
      (blog) => `
      <a href="${blog.url}" style="text-decoration:none;color:inherit;">
        <div class="blog-card">
          <p class="text-size-4 text-base">
            ${formatDate(blog.date)}
          </p>
          <p class="text-size-2 text-weight-2 text-strong">
            ${blog.title}
          </p>
          <p class="categories text-size-4 text-secondary">
            ${blog.categories}
          </p>

          <p class="description text-size-4 text-base">
            ${blog.description}
          </p>
        </div>
      </a>
    `,
    )
    .join("");

  updatePagination();
}

function updatePagination() {
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  document.getElementById("page-info").textContent =
    `${currentPage} of ${totalPages}`;

  document.getElementById("prev-btn").disabled = currentPage === 1;

  document.getElementById("next-btn").disabled = currentPage === totalPages;
}

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderBlogs();
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  if (currentPage < totalPages) {
    currentPage++;
    renderBlogs();
  }
});

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

renderBlogs();
