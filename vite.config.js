import { defineConfig } from 'vite'
import fs from 'fs'

export default defineConfig({
  base: './',
  plugins: [{
    name: 'copy-standalone-files',
    closeBundle() {
      if (fs.existsSync('birthday.js')) {
        fs.copyFileSync('birthday.js', 'dist/birthday.js')
      }
      if (fs.existsSync('birthday.css')) {
        fs.copyFileSync('birthday.css', 'dist/birthday.css')
      }
    }
  }]
})