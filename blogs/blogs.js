let blogs = [
  {
    title: "Sparse NNUE",
    date: "2026-05-09T00:00",
    categories: "PROGRAMMING CHESS",
    description: "Making NNUE inference faster with sparse affine",
    url: "blogs/sparse-nnue.html",
  },
];
blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

function populateBlogMeta() {
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);

  const dir = parts.length >= 2 ? parts[parts.length - 2] : "";
  const filename = parts[parts.length - 1];
  if (dir !== "blogs") return;

  const combined = `${dir}/${filename}`;
  const metadata = blogs.find((b) => {
    return b.url === combined;
  });
  if (metadata === undefined) {
    alert("Make sure to add blog metadata to blogs.js!");
    return;
  }

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("blogtitle0", metadata.title);
  setText("blogtitle1", metadata.title);
  setText("blogdate", formatDate(metadata.date));
  setText("blogtags", metadata.categories);
}

populateBlogMeta();
