# Personal Portfolio Website

A modern and responsive **Frontend Developer Portfolio Website** built with **React, Vite, and Tailwind CSS**.  
This portfolio showcases my projects, skills, education, and contact information with a clean UI, dark mode support, and smooth user experience.

🔗 **Live Demo:** https://hsb-ini-14.github.io/bhaduria-portfolio/

---

## ✨ Features

* 🌙 Dark & Light mode with theme persistence
* 🎨 Clean and modern UI design
* 📱 Fully responsive across devices
* 🧭 Smooth scrolling navigation with active link highlighting
* 🖼️ Project showcase with live demo & GitHub links
* 🎯 Skills & education timeline section
* 👨‍💻 Animated profile and UI transitions
* 📩 Contact section with social links
* ⚡ Fast performance powered by Vite

---

## 🛠️ Tech Stack

* **React** – Component-based UI
* **Vite** – Lightning-fast build tool
* **Tailwind CSS** – Utility-first styling
* **Boxicons** – Icon library
* **LocalStorage API** – Theme persistence
* **GitHub Pages** – Deployment

---

## 📁 Project Structure

```text
bhaduria-portfolio/
├── public/
│   └── Harsh_S_Bhaduria_Frontend_Resume.pdf
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── EducationTimeline.jsx
│   │   ├── Home.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── SkillCard.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── data.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/hsb-ini-14/bhaduria-portfolio.git
cd bhaduria-portfolio
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🌍 Deployment to GitHub Pages

This project is deployed using **gh-pages**.

### Steps used:

1. Install gh-pages

```bash
npm install --save-dev gh-pages
```

2. Set base path in `vite.config.js`

```js
export default defineConfig({
  base: "/bhaduria-portfolio/",
});
```

3. Add scripts to `package.json`

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Deploy

```bash
npm run deploy
```

---

## 🧩 How It Works

* Navigation highlights active sections on scroll
* Dark mode preference is saved using LocalStorage
* Projects are dynamically rendered from a central data file
* Tailwind CSS custom theme variables control colors
* Loader provides a smooth entry experience
* Responsive layout ensures usability across screen sizes

---

## 📸 Preview

> to be added

---

## 🙌 Acknowledgements

* UI styling by Tailwind CSS  
* Icons by Boxicons  
* Built with Vite + React

---

## 👤 Author

**Harsh Singh Bhaduria**

* GitHub: https://github.com/hsb-ini-14  
* LinkedIn: https://www.linkedin.com/in/harsh-ini14/

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub — it really helps! 😊
