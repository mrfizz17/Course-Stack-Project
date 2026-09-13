# 🧩 TechStack Builder

A simple React project where users can explore different technologies and build their own tech stack.

You can select technologies, see them in your stack, and remove them whenever you want. I built this project to practice React concepts like components, props, state, hooks, conditional rendering, and working with JSON data.

## 🚀 Technologies Used

* ⚛️ React
* 📘 TypeScript
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 📦 JSON
* ⚡ Vite

## ✨ Features

* 🔍 Explore different technologies with their details
* ➕ Add technologies to your own stack
* 🗑️ Remove selected technologies from your stack
* 🚫 Prevent the same technology from being added twice
* 📱 Responsive design for different screen sizes

---

# ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes writing React UI easier and cleaner.

### 2. What is the difference between props and state?

Props are data passed from a parent to a child. State is data that a component manages and can change.

### 3. What does `useState` do, and where did you use it?

`useState` stores data that can change in a component. I used it to store the technologies selected by the user.

### 4. What does `useEffect` do, and why did you use it?

`useEffect` runs code after rendering. I used it to load the JSON data when the app starts.

### 5. Why does every `.map()` item need a unique `key`?

The `key` helps React identify each item and know which item has changed.

### 6. What is conditional rendering?

Conditional rendering means showing something only when a condition is true.

For example, I show a message when the stack is empty:

```tsx
{selectedTechnology.length === 0 && (
  <p>Your stack is empty.</p>
)}
```

### 7. How do you pass data from a parent to a child, and how does the child send something back?

The parent sends data using **props**. The child can send something back by calling a function that the parent passed as a prop.

---

## 💡 What I Learned

This project helped me understand how React components work together and how state changes can update the UI automatically. I also got more comfortable with props, hooks, `.map()`, and conditional rendering.
