import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' делает сборку переносимой на GitHub Pages независимо
// от имени репозитория (user.github.io/repo-name/...)
export default defineConfig({
  plugins: [react()],
  base: './',
})
