"use strict";
// darkMode.ts
const DARK_MODE_ICON = 'la-moon';
const LIGHT_MODE_ICON = 'la-sun';
const DARK_MODE_BG_COLOR = '--dark-mode-bg-color';
const DARK_MODE_COL_BG_COLOR = '--dark-mode-bg-col-color';
const LIGHT_MODE_BG_COLOR = '--background';
const WHITE_COLOR = '--white-color';
const BLACK_COLOR = '--black-color';
function setDarkMode(refIcon, subtitle, colForm) {
    const isDarkMode = refIcon.classList.contains(LIGHT_MODE_ICON);
    if (isDarkMode) {
        refIcon.classList.remove(LIGHT_MODE_ICON);
        refIcon.classList.add(DARK_MODE_ICON);
        document.body.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(DARK_MODE_BG_COLOR));
        colForm.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(DARK_MODE_COL_BG_COLOR));
        subtitle[0].style.setProperty('color', getComputedStyle(document.documentElement).getPropertyValue(WHITE_COLOR));
    }
    else {
        refIcon.classList.remove(DARK_MODE_ICON);
        refIcon.classList.add(LIGHT_MODE_ICON);
        document.body.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(LIGHT_MODE_BG_COLOR));
        colForm.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(WHITE_COLOR));
        subtitle[0].style.setProperty('color', getComputedStyle(document.documentElement).getPropertyValue(BLACK_COLOR));
    }
}
function darkModeActive() {
    const refIcon = document.getElementById('icon-mode');
    const subtitle = document.getElementsByClassName('subtitle');
    const colForm = document.getElementById('col-form');
    setDarkMode(refIcon, subtitle, colForm);
}
// loginRegister.ts
function login() {
    const email = document.getElementsByName('email');
    const password = document.getElementsByName('password');
    alert(`Email: ${email[0].value} \n Senha: ${password[0].value}`);
}
function register() {
    const name = document.getElementsByName('name');
    const email = document.getElementsByName('emailRegister');
    const password = document.getElementsByName('passwordRegister');
    alert(`Nome: ${name[0].value} \n Email: ${email[0].value} \n Senha: ${password[0].value}`);
}
// visibilityControl.ts
const CLASS_HIDDEN = 'hidden';
const BUTTON_ACTIVE = 'btn-active';
function visibilyControlForm(formLogin, formRegister, featuredImage) {
    const registerIsActive = formRegister.classList.contains(CLASS_HIDDEN);
    if (registerIsActive) {
        formRegister.classList.remove(CLASS_HIDDEN);
        formLogin.classList.add(CLASS_HIDDEN);
        featuredImage.src = '/img/sign-up.png';
    }
    else {
        formRegister.classList.add(CLASS_HIDDEN);
        formLogin.classList.remove(CLASS_HIDDEN);
        featuredImage.src = '/img/computer-login.png';
    }
}
function visibilityControlButon(btnOpen, btnRegister) {
    if (btnOpen.classList.contains(BUTTON_ACTIVE)) {
        btnOpen.classList.remove(BUTTON_ACTIVE);
        btnRegister.classList.add(BUTTON_ACTIVE);
    }
    else {
        btnOpen.classList.add(BUTTON_ACTIVE);
        btnRegister.classList.remove(BUTTON_ACTIVE);
    }
}
function hiddenForms(formLogin, formRegister, toogleBtn, formPasswordReset) {
    formLogin.classList.add(CLASS_HIDDEN);
    formRegister.classList.add(CLASS_HIDDEN);
    toogleBtn.classList.add(CLASS_HIDDEN);
    formPasswordReset.classList.remove(CLASS_HIDDEN);
}
function transitionForm() {
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    const btnOpen = document.getElementById('btn-open');
    const btnRegister = document.getElementById('btn-register');
    const featuredImage = document.getElementById('featured-image');
    visibilyControlForm(formLogin, formRegister, featuredImage);
    visibilityControlButon(btnOpen, btnRegister);
}
function passwordReset() {
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    const toogleBtn = document.getElementById('toogle');
    const formPasswordReset = document.getElementById('password-reset');
    hiddenForms(formLogin, formRegister, toogleBtn, formPasswordReset);
}
//# sourceMappingURL=app.js.map