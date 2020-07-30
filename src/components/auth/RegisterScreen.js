import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeErr } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const state = useSelector(state =>state.ui)
   
    const {msgError} = state;

    const [values,handleInputChange] =useForm({
        name:"marcel",
        email:"marcel@gmail.com",
        password:"123456",
        confirm:"123456"
    });

    const {name,email,password,confirm}=values;

    const handleRegister=(e)=>{
        e.preventDefault();
        
        /* console.log(`mane : ${name}`);
        console.log(`email : ${email}`);
        console.log(`password : ${password}`);
        console.log(`confirm : ${confirm}`); */

        if (isFormValid()) {

            dispatch(startRegisterWithEmailPasswordName(email,password,name));

        }
    }

    const isFormValid=()=>{

        if (name.trim().length ===0) {
            dispatch(setError('Name is required'));
            return false;
        }else if(!validator.isEmail(email)){

            dispatch(setError('Email is not valid'));

            return false; 

        }else if (password !== confirm ||  password.length < 5) {
            
            dispatch(setError('Password should be at last 6 characters and match each other'));

           return false;
            
        }

        dispatch(removeErr());
       return true;

    }


    return (
        <>
            <h3 className="auth__title"> Register</h3>

            <form onSubmit={handleRegister}>

               { 
                    msgError &&
                    (<div className="auth__alert-error">
                       {msgError}
                    </div>)
                }
                
                <input
                     type="text"
                     placeholder="Name"
                     name="name"
                     value={name}
                     className="auth__input"
                     onChange={handleInputChange}
                     autoComplete="off"
                />

                <input
                     type="text"
                     placeholder="Email"
                     name="email"
                     value={email}
                     className="auth__input"
                     onChange={handleInputChange}
                     autoComplete="off"
                />

                <input
                     type="password"
                     placeholder="Password"
                     name="password"
                     value={password}
                     className="auth__input"
                     onChange={handleInputChange}
                />
                <input
                     type="password"
                     placeholder="Confirm"
                     name="confirm"
                     value={confirm}
                     className="auth__input"
                     onChange={handleInputChange}
                />

                <button 
                       type="submit"
                       className="btn btn-primary btn-block"
                      
                >
                   Register
                </button>


                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
            
        </>
    )
}
