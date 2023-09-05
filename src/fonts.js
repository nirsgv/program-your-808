export const initializeFonts = async () => {
  const googleFontsLink = document.createElement("link");
  googleFontsLink.rel = "stylesheet";
  googleFontsLink.href =
    "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=REM:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
  googleFontsLink.onload = function () {
    console.log("Google Fonts loaded successfully.");
  };
  googleFontsLink.onerror = function () {
    console.error("Error loading Google Fonts.");
  };
  document.head.appendChild(googleFontsLink);
};
