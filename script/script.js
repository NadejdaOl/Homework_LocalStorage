localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {}

const form = document.querySelector('.register_form')

const userName = document.querySelector('#FullName')
const email = document.querySelector('#EmailAdress')
const password = document.querySelector('#CreatePassword')
const confirmPassword = document.querySelector('#ConfirmPassword')
const button = document.querySelector('.form_button')


const createUserData = (userName, email, password) => ({
    userNameValue: userName, 
    emailValue: email,
    passwordValue: password
})

form.addEventListener('submit', (event) => {

    event.preventDefault()

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert('Пароли не совпадают');
        return;
    }

    const userData = createUserData(userName.value, email.value, password.value)
    // console.log(userData)
    try {
        // Сохранение данных в localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
        console.log('Данные пользователя успешно сохранены.');
    } catch (error) {
        console.error('Произошла ошибка при сохранении данных:', error);
    }
})


let checkbox = document.querySelector('.switch_input')
if (localStorage.getItem('theme') == true){
    theme.setAttribute('href', '../css/darkTheme.css')
    checkbox.checked = true
}

checkbox.onchange = function(){
    // console.log(this.checked)
    if(this.checked){
        localStorage.setItem('theme', true)
        theme.setAttribute('href', '../css/darkTheme.css')

    } else {
        localStorage.setItem('theme', false)
        theme.setAttribute('href', '../css/style.css')
    }
}




