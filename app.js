let digits = document.querySelectorAll(".btn-num");
let result = document.querySelector(".result");
//Array.from(digits).forEach()
digits.forEach((digit) => {
    digit.addEventListener("click", (event) => {
        if(result.textContent === "0"){
            result.textContent = "";
        }
        result.textContent += digit.textContent;

    });
});
/* 
() => {....}//arrow function
 function () {....} //ananymous function
*/


