// Progressive enhancement for Gonda Traun Portfolio
document.addEventListener('DOMContentLoaded', () => {
  // Automatically sync copyright year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Developer greeting
  console.log('%c Gonda Traun — Full Stack Developer Portfolio', 'color: #0284c7; font-weight: bold; font-size: 14px;');
  console.log('Portfolio loaded successfully. Responsive layout active.');
});
