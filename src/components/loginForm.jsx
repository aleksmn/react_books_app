import React, { Component } from 'react';


class LoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();

        console.log('Отправлено!')
    }


    render() {
        return (
            <div className='container' style={{'maxWidth':'600px'}}>
                <h1>Логин</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Электронная почта</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Мы не делимся вашими контактами</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Присылать оповещения на почту</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>


            </div>
        );
    }
}

export default LoginForm;