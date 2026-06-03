// lib/github.ts

export async function getRepositories() {
  const uri = process.env.GITHUB_URI;
  if (!uri) {
    throw new Error("GITHUB_URI não definida");
  }

  const response = await fetch(uri, {
    next: {
      revalidate: process.env.NODE_ENV === "production" ? 3600 : 0,
    },
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios");
  }

  return response.json();
}
