

// darkMode.ts
const DARK_MODE_ICON = 'la-moon';
const LIGHT_MODE_ICON = 'la-sun';

const DARK_MODE_BG_COLOR = '--dark-mode-bg-color';
const DARK_MODE_COL_BG_COLOR = '--dark-mode-bg-col-color';

const LIGHT_MODE_BG_COLOR = '--background';

const WHITE_COLOR = '--white-color';
const BLACK_COLOR = '--black-color';

function setDarkMode(refIcon: HTMLElement, subtitle: HTMLCollectionOf<HTMLElement>, colForm: HTMLElement): void {
    const isDarkMode = refIcon.classList.contains(LIGHT_MODE_ICON);
    if (isDarkMode) {
        refIcon.classList.remove(LIGHT_MODE_ICON);
        refIcon.classList.add(DARK_MODE_ICON);
        document.body.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(DARK_MODE_BG_COLOR));
        colForm.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(DARK_MODE_COL_BG_COLOR));
        subtitle[0].style.setProperty('color', getComputedStyle(document.documentElement).getPropertyValue(WHITE_COLOR));
    } else {
        refIcon.classList.remove(DARK_MODE_ICON);
        refIcon.classList.add(LIGHT_MODE_ICON);
        document.body.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(LIGHT_MODE_BG_COLOR));
        colForm.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(WHITE_COLOR));
        subtitle[0].style.setProperty('color', getComputedStyle(document.documentElement).getPropertyValue(BLACK_COLOR));
    }
}

function darkModeActive(): void {
    const refIcon = document.getElementById('icon-mode') as HTMLElement;
    const subtitle = document.getElementsByClassName('subtitle') as HTMLCollectionOf<HTMLElement>;
    const colForm = document.getElementById('col-form') as HTMLElement;
    setDarkMode(refIcon, subtitle, colForm);
}

// loginRegister.ts
function login(): void {
    const email = document.getElementsByName('email') as NodeListOf<HTMLInputElement>;
    const password = document.getElementsByName('password') as NodeListOf<HTMLInputElement>;

    alert(`Email: ${email[0].value} \n Senha: ${password[0].value}`);
}

function register(): void {
    const name = document.getElementsByName('name') as NodeListOf<HTMLInputElement>;
    const email = document.getElementsByName('emailRegister') as NodeListOf<HTMLInputElement>;
    const password = document.getElementsByName('passwordRegister') as NodeListOf<HTMLInputElement>;

    alert(`Nome: ${name[0].value} \n Email: ${email[0].value} \n Senha: ${password[0].value}`);
}

// visibilityControl.ts
const CLASS_HIDDEN = 'hidden';
const BUTTON_ACTIVE = 'btn-active';

function visibilyControlForm(formLogin: HTMLElement, formRegister: HTMLElement, featuredImage: HTMLImageElement): void {
    const registerIsActive = formRegister.classList.contains(CLASS_HIDDEN);
    if (registerIsActive) {
        formRegister.classList.remove(CLASS_HIDDEN);
        formLogin.classList.add(CLASS_HIDDEN);
        featuredImage.src = '/img/sign-up.png';
    } else {
        formRegister.classList.add(CLASS_HIDDEN);
        formLogin.classList.remove(CLASS_HIDDEN);
        featuredImage.src = '/img/computer-login.png';
    }
}

function visibilityControlButon(btnOpen: HTMLElement, btnRegister: HTMLElement): void {
    if (btnOpen.classList.contains(BUTTON_ACTIVE)) {
        btnOpen.classList.remove(BUTTON_ACTIVE);
        btnRegister.classList.add(BUTTON_ACTIVE);
    } else {
        btnOpen.classList.add(BUTTON_ACTIVE);
        btnRegister.classList.remove(BUTTON_ACTIVE);
    }
}

function hiddenForms(formLogin: HTMLElement, formRegister: HTMLElement, toogleBtn: HTMLElement, formPasswordReset: HTMLElement): void {
    formLogin.classList.add(CLASS_HIDDEN);
    formRegister.classList.add(CLASS_HIDDEN);
    toogleBtn.classList.add(CLASS_HIDDEN);
    formPasswordReset.classList.remove(CLASS_HIDDEN);
}

function transitionForm(): void {
    const formLogin = document.getElementById('form-login') as HTMLElement;
    const formRegister = document.getElementById('form-register') as HTMLElement;

    const btnOpen = document.getElementById('btn-open') as HTMLElement;
    const btnRegister = document.getElementById('btn-register') as HTMLElement;

    const featuredImage = document.getElementById('featured-image') as HTMLImageElement;

    visibilyControlForm(formLogin, formRegister, featuredImage);
    visibilityControlButon(btnOpen, btnRegister);
}

function passwordReset(): void {
    const formLogin = document.getElementById('form-login') as HTMLElement;
    const formRegister = document.getElementById('form-register') as HTMLElement;
    const toogleBtn = document.getElementById('toogle') as HTMLElement;
    const formPasswordReset = document.getElementById('password-reset') as HTMLElement;

    hiddenForms(formLogin, formRegister, toogleBtn, formPasswordReset);
}

