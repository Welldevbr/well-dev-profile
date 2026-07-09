// lib/github.ts

import type { RepoType } from "@/components/projects/types";

type GetRepositoriesResponse = {
  data: RepoType[];
  error: string | null;
};

export async function getRepositories(): Promise<GetRepositoriesResponse> {
  try {
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    if (!username) {
      return {
        data: [],
        error: "Usuário do GitHub não configurado.",
      };
    }

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(token && {
            Authorization: `Bearer ${token}`,
          }),
        },
        next: {
          revalidate: 60 * 60,
        },
      },
    );

    if (!response.ok) {
      if (response.status === 403 || response.status === 429) {
        return {
          data: [],
          error: "Limite de requisições do GitHub atingido.",
        };
      }

      return {
        data: [],
        error: `Erro ${response.status} ao buscar repositórios.`,
      };
    }

    const data = await response.json();

    return {
      data,
      error: null,
    };
  } catch {
    return {
      data: [],
      error: "Erro inesperado ao conectar com o GitHub.",
    };
  }
}
