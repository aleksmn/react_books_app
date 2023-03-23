import { Component } from 'react';
import Input from './input';


class Form extends Component {
    state = {
        data: {},
        errors: {}
    }; 

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        // console.log(errors);
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit()
    };

    handleChange = e => {

        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(e.currentTarget);

        if (errorMessage) errors[e.currentTarget.name] = errorMessage;
        else delete errors[e.currentTarget.name]

        const data = { ...this.state.data }
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ data, errors });
    };

    renderButton = label => {

        return (
        <button disabled={this.validate()} className="btn btn-primary">
            {label}
        </button>);
    }

    renderInput = (name, label, type='text') => {
        const { data, errors } = this.state;
        return (
            <Input
                name={name}
                value={data[name]}
                type={type}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

}
 
export default Form;