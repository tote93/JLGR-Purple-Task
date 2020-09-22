export const checkEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email) ? true : false;
};

export const checkForm = (arrayValues, arrayClassName) => {
  arrayValues.forEach((element, i) => {
    const name = arrayClassName[i];
    if (element === "") isNotValid(`.${name}`);
    else if (name.includes("email")) {
      if (checkEmail(element)) isValid(`.${name}`);
      else isNotValid(`.${name}`);
    } else isValid(`.${name}`);
  });
};
const isValid = (element) => {
  document.querySelector(element).style.background = "#80D859";
};
const isNotValid = (element) => {
  document.querySelector(element).style.background = "#FA5555";
};

export const scrollToRegister = (place) => {
  window.location.href = `#${place}`;
  document.querySelector(".header").classList.toggle("active");
};
