import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Start with 'mytheme' as default (your light theme)
  const [theme, setTheme] = useState("mytheme");

  // On component mount, check if user has a saved theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // If no saved theme, set to default 'mytheme'
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);

  // Function to toggle between 'mytheme' and 'dark'
  const toggleTheme = () => {
    const newTheme = theme === "mytheme" ? "dark" : "mytheme";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // save user preference
  };

  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      Switch to {theme === "mytheme" ? "Dark" : "Light"} Mode
    </button>
  );
}
