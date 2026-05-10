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
