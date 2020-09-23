/* CheckMail
  --> Input: email - string to be compared
  --> Output: True if it's a correct format email, false if is not correct
*/
export const checkEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email) ? true : false;
};
/* checkForm
  --> Input: ArrayValues: Array with the value of inputs
             ArrayClassName: Array with the name of the classes of each attr
      Behaviour: If the element is empty/incorrect display background red
                 else the background will be green (correct)
  --> Output: Nothing
*/
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

/* isValid
  --> Input: element - selector of the element to be modified
      Behaviour: Set the current background to green color
  --> Output: Nothing
*/
const isValid = (element) => {
  document.querySelector(element).style.background = "#80D859";
};
/* isNotValid
  --> Input: element - selector of the element to be modified
      Behaviour: Set the current background to red color
  --> Output: Nothing
*/
const isNotValid = (element) => {
  document.querySelector(element).style.background = "#FA5555";
};
/* scrollToRegister
  --> Input: place: ID of the anchor link to be redirected             
      Behaviour: place the window to the selected place
  --> Output: Nothing
*/
export const scrollToRegister = (place) => {
  window.location.href = `#${place}`;
  const header = document.querySelector(".header");
  if (header.classList.contains("active")) toogle();
};
/* toogle
  --> Input: Nothing        
      Behaviour: Controls the toogle button in the header
  --> Output: Nothing
*/
export const toogle = () => {
  document.querySelector(".header").classList.toggle("active");
};
