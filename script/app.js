document.addEventListener( 'DOMContentLoaded', function() {

        console.log( 'Script loaded!' );
        handleFloatingLabel();
        handleQualityRange();
        handleDropdownButton();
    });

    function handleFloatingLabel (){
        let label = document.querySelector(".js-floating-label");
        let input = document.querySelector(".js-name-input");
        input.addEventListener("blur", checkValue);
    }

    function checkValue(e){
        value = e.target.value;
        if (value != ""){
            e.target.classList.add('is-floating');
        }
        else {
            e.target.classList.remove('is-floating');
        }
    }
    function togglePassword() {
        var passwordInput = document.querySelector(".js-password-input");
        var eye1 = document.querySelector(".c-password-toggle__symbol--show");
        var eye2 = document.querySelector(".c-password-toggle__symbol--hide");

        eye1.classList.toggle("c-password-toggle__symbol--show");
        eye1.classList.toggle("c-password-toggle__symbol--hide");

        eye2.classList.toggle("c-password-toggle__symbol--show");
        eye2.classList.toggle("c-password-toggle__symbol--hide");

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }
    function handleQualityRange(){
        let input = document.querySelector(".js-quality-input");
        let holder = document.querySelector(".js-range-holder");

        input.addEventListener("input", sliderChange);
    }

    function sliderChange(e){
        let input = document.querySelector(".js-quality-input");
        let holder = document.querySelector(".js-range-holder");
        // console.log(holder);
        let val = e.target.value

        holder.dataset.value = val;
        console.log(input.offsetWidth / input.max * val);
        holder.style.marginLeft = (input.offsetWidth / input.max * val) + "px";

}

function handleDropdownButton() {
  // de input zelf, de holder en de value
  let dropdowns = document.querySelectorAll(".c-dropdown__input");

  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', dropdownClicked);
  }
}

function dropdownClicked(e) {
  e.preventDefault();

  e.target.classList.toggle("js-dropdown-input");
}
