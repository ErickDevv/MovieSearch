const getCurrentTheme = () => {
  const theme = window.localStorage.getItem("theme");

  if (!theme) {
    window.localStorage.setItem("theme", "dark");
  }

  return theme || "dark";
};

export { getCurrentTheme };
