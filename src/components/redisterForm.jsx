import Form from './common/form';



class RegisterForm extends Form {

    state = {
        data: { username: '', password: '', useremail: '' },
        errors: {}
    };

    validate = () => {
        const errors = {...this.state.errors};
        const { data } = this.state;

        if (data.username.trim() === '') {
            errors.username = 'Нужно ввести имя пользователя.'
        }

        if (data.password.trim() === '') {
            errors.password = 'Нужно ввести пароль.'
        }
        
        if (data.useremail.trim() === '') {
            errors.useremail = 'Нужно ввести электронную почту'
        }
        
        return  Object.keys(errors).length === 0 ? null : errors;
    }


    validateProperty = input => {
        if (input.name === 'username') {
            const usernameInput = input.value.trim()
            const usernameRegex = /^[А-яA-z0-9_.]+$/
            if (usernameInput === '') return 'Нужно ввести имя пользователя.'
            if (usernameRegex.test(usernameInput) === false) return 'Недопустимый символ'
            if (usernameInput.length < 5) return 'Имя пользователя не менее 5 символов'
            if (usernameInput.length > 30) return 'Имя пользователя не более 30 символов'
            // ...
        }
        if (input.name === 'password') {
            if (input.value.trim() === '') return 'Нужно ввести пароль.'
            if (input.value.trim().length < 12) return 'Пароль должен быть не менее 12 символов'
            // ...
        }
        if (input.name === 'useremail') {
            // Email Validation
            // https://www.abstractapi.com/guides/email-validation-regex-javascript
            // https://regex101.com/
            const emailRegex = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/

            if (input.value.trim() === '') return 'Нужно ввести электронную почту.'
            if (emailRegex.test(input.value) === false) return "Недопустимый формат Email"

            // ...
        }
    }

    doSubmit = () => {
        console.log('Отправлено!')
    }

    render() {
        

        return (
            <div className='container' style={{ 'maxWidth': '600px' }}>
                <h1>Регистрация</h1>

                <form onSubmit={this.handleSubmit}>

                    {this.renderInput("useremail", 'Электронная почта')}
                    {this.renderInput("username", 'Имя пользователя')}
                    {this.renderInput("password", 'Пароль', 'password')}
                    
                    {this.renderButton("Отправить")}

                </form>


            </div>
        );
    }
}

export default RegisterForm;