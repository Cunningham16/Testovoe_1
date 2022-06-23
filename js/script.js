const openPopupLink = document.querySelectorAll(".contacts__recall-me")
const popupConsultation = document.querySelector(".popup-consultation")
const closePopupBtn = document.querySelector(".button__close")
const popupBlur = document.querySelector(".popup__blur")

for(let open of openPopupLink){
	open.addEventListener("click", function(e){
		e.preventDefault()
		openPopup(popupConsultation)
	})
}

function openPopup(popup){
	let popupContent = popup.querySelector(".popup__content")
	popup.classList.add("active")
	setTimeout(() => {
		popupContent.style.transform = "translate(0, 0)"
		popupContent.style.transition = "0.3s"
	}, 300)
}

closePopupBtn.addEventListener("click", function(){
	closePopup(popupConsultation)
})

popupBlur.addEventListener("click", function(e){
	e.preventDefault()
	closePopup(popupConsultation)
})

function closePopup(popup){
	let popupContent = popup.querySelector(".popup__content")
	popupContent.style.transform = "translate(0, -300%)"
	setTimeout(() => {
		popup.classList.remove("active")
	}, 300)
}

const inputForm = document.querySelector(".input__phone")
inputForm.addEventListener("change", validationPhone)
const checkbox = document.querySelector("#test-check1")
const submitButton = document.querySelector(".button__submit")
const form = document.querySelector(".popup__form")

function validationPhone(){
	if(inputForm.value.length >= "+7( _ _ _ ) - _ _ - _ _ - _ _".length){
		return true
	}
	console.log(checkbox.checked)
}

function validationForm(){
	if(validationPhone() && checkbox.checked){
		return true
	}else{
		return false
	}
}

form.addEventListener("change", () => {
	if(validationForm() === true){
		submitButton.disabled = false
	}else{
		submitButton.disabled = true
	}
})

document.addEventListener("DOMContentLoaded", function () {
 
    let eventCalllback = function (e) {
 
        let el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
         
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
 
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});

const popupThanks = document.querySelector(".popup-thanks")
const popupOk = popupThanks.querySelector(".primary-button")
const phoneText = popupThanks.querySelector(".phone")
const popupBlurThanks = popupThanks.querySelector(".popup__blur")
const popupCloseBtnThanks = popupThanks.querySelector(".button__close")

form.addEventListener("submit", (e) => {
	e.preventDefault()
	closePopup(popupConsultation)
	phoneText.textContent = inputForm.value
	openPopup(popupThanks)
})

popupOk.addEventListener("click", () => {
	closePopup(popupThanks)
})

popupBlurThanks.addEventListener("click", (e) => {
	e.preventDefault()
	closePopup(popupThanks)
})

popupCloseBtnThanks.addEventListener("click", () => {
	closePopup(popupThanks)
})

const burgerButton = document.querySelector(".hamburger-button")
const burgerSidebar = document.querySelector("header")
const body = document.querySelector("html")
let isOpenedSidebar = false;


burgerButton.onclick = () => {
	if(isOpenedSidebar === false){
		isOpenedSidebar = true;
		burgerButton.classList.add("hamburger-button_active")
		burgerSidebar.style.transform = "translate(0%, 0%)"
		body.style.overflowY = "hidden"
	}else if(isOpenedSidebar === true){
		burgerButton.classList.remove("hamburger-button_active")
		isOpenedSidebar = false;
		burgerSidebar.style.transform = "translate(0, -200%)"
		body.style.overflowY = "auto"
	}
}

const bulletButton = document.querySelector(".show-bullets")
const bullets = document.querySelectorAll(".bullet")
const bulletsContainer = document.querySelector(".bullets")
let isBulletOpen = false

bulletButton.addEventListener("click", () => {
	if(isBulletOpen === false){
		bulletsContainer.style.bottom = "20%"
		bulletsContainer.style.transition = "0.3s"
		animateOpenButton()
		for(let elem of bullets){
			elem.style.transition = "0.3s"
			elem.style.height = "100%"
			elem.style.opacity = "1"
		}
		isBulletOpen = true
	}else if(isBulletOpen === true){
		bulletsContainer.style.bottom = "60px"
		bulletsContainer.style.transition = "0.3s"
		animateCloseButton()
		for(let elem of bullets){
			if(elem.classList.contains("first")){
				elem.style.height = "0"
				elem.style.opacity = "1"
			}else{
				elem.style.transition = "0.3s"
				elem.style.height = "0"
				elem.style.opacity = "0"
			}
		}
		isBulletOpen = false
	}
})

function animateOpenButton(){
	bulletButton.classList.add("show-bullets_active")
	bulletButton.style.transition = "0.3s"
}

function animateCloseButton(){
	bulletButton.classList.remove("show-bullets_active")
	bulletButton.style.transition = "0.3s"
}
