import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O nome do seu repositório no GitHub, ex: "sitePessoalModeloi"
const repoName = 'sitePessoalModeloi';

/**
 * Define dinamicamente o caminho base para o deploy.
 * - Para desenvolvimento local, o caminho é a raiz "/".
 * - Para a branch `main` no GitHub, o caminho é `/<repoName>/`.
 * - Para branches de clientes (`cliente-*`), o caminho é `/<repoName>/<nome-da-branch>/`.
 */
const getBase = () => {
  const githubRefName = process.env.GITHUB_REF_NAME;

  // Se a variável de ambiente GITHUB_REF_NAME existir (estamos no GitHub Actions)
  if (githubRefName) {
    // Se for a branch principal, o deploy é na raiz do repositório do Pages
    if (githubRefName === 'main') {
      return `/${repoName}/`;
    }
    // Se for uma branch de cliente, o deploy é em uma subpasta
    return `/${repoName}/${githubRefName}/`;
  }

  // Para desenvolvimento local (`npm run dev`), usa o caminho raiz
  return '/';
};

// https://vitejs.dev/config/
export default defineConfig({
  base: getBase(),
  plugins: [react()],
})