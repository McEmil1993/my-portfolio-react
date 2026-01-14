# Mark Emil Dacoylo - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills, experience, and projects as a Full Stack Developer and Server Administrator.

## ✨ Features

- 🎨 **Modern Design** - Clean and professional UI with glassmorphism effects
- 🌙 **Dark/Light Mode** - Toggle between themes with persistent settings
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations** - Framer Motion for elegant page transitions
- 🎯 **Component-Based** - Reusable and maintainable React components
- 🎨 **Tailwind CSS** - Utility-first styling for rapid development
- 📧 **Contact Form** - Easy way to get in touch

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Language:** JavaScript (ES6+)

## 📦 Installation

1. **Clone or navigate to the portfolio directory:**
   ```bash
   cd portfolio-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to the URL shown in the terminal

## 🛠️ Build for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## 📂 Project Structure

```
portfolio-react/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/         # React Context (Theme)
│   │   └── ThemeContext.jsx
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.js       # Vite configuration
```

## 🎨 Customization

### Update Personal Information

Edit the content in the respective component files:

- **Contact Info:** `src/components/Hero.jsx` and `src/components/Contact.jsx`
- **About Me:** `src/components/About.jsx`
- **Skills:** `src/components/Skills.jsx`
- **Experience:** `src/components/Experience.jsx`
- **Projects:** `src/components/Projects.jsx`

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.js` with your repo name:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
   })
   ```
4. Build and deploy: `npm run build && npm run deploy`

## 📝 License

This project is open source and available for personal use.

## 📧 Contact

- **Email:** markemildacoylo209@gmail.com
- **Phone:** +639952788209
- **GitHub:** [github.com/McEmil1993](https://github.com/McEmil1993)
- **Location:** Purok 7 Balintawak, Talibon, Bohol 6325

## 🙏 Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ by Mark Emil Dacoylo**
