import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O nome do seu repositório no GitHub
const repoName = 'sitePessoalModeloi';

// Lógica para definir o caminho base dinamicamente
const getBase = () => {
  const githubRefName = process.env.GITHUB_REF_NAME;
  // Para builds no GitHub Actions
  if (githubRefName) {
    return githubRefName === 'main'
      ? `/${repoName}/`
      : `/${repoName}/${githubRefName}/`;
  }
  // Para desenvolvimento local
  return '/';
};

// https://vitejs.dev/config/
export default defineConfig({
  base: getBase(),
  plugins: [react()],
})