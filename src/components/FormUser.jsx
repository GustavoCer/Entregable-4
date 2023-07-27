import { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles/FormUser.css';

const FormUser = ({createNewUser, updateInfo, updateUserById, setUpdateInfo}) => {

    const {register, reset, handleSubmit} = useForm()

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const submit = data => {
        if(updateInfo) {
        updateUserById('/users', updateInfo.id, data)
        setUpdateInfo()
        }
        else {
        createNewUser('/users', data)
        }
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        })
    }

    return (
    <form className="formuser" onSubmit={handleSubmit(submit)}>
        <h2 className="formuser_title"> {updateInfo? 'Update' : 'New User'} </h2>
        <div className="formuser_container">
            <label className="formuser_label" htmlFor="first_name">First Name</label>
            <input className="formuser_input" {...register('first_name')} type="text" id="first_name"/>
        </div>
        <div className="formuser_container">
            <label className="formuser_label" htmlFor="last_name">Last Name</label>
            <input className="formuser_input" {...register('last_name')} type="text" id="last_name"/>
        </div>
        <div className="formuser_container">
            <label className="formuser_label" htmlFor="email">Email</label>
            <input className="formuser_input" {...register('email')} type="email" id="email"/>
        </div>
        <div className="formuser_container">
            <label className="formuser_label" htmlFor="password">Password</label>
            <input className="formuser_input" {...register('password')} type="password" id="password"/>
        </div>
        <div className="formuser_container">
            <label className="formuser_label" htmlFor="birthday">Birthday</label>
            <input className="formuser_input" {...register('birthday')} type="date" id="birthday"/>
        </div>
        <button className="formuser_btn">{updateInfo? 'Update this user' : 'Add a new user'}</button>
    </form>
    );
};

export default FormUser;