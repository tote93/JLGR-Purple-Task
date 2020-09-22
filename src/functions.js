export const scrollToRegister = (place) => {
  window.location.href = `#${place}`;
  document.querySelector(".header").classList.toggle("active");
};
