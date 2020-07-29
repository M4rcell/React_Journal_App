import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator';

import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const [values,handleInputChange] =useForm({
        name:"marcel",
        email:"marcel@gmail.com",
        password:"12345",
        confirm:"12345"
    });

    const {name,email,password,confirm}=values;

    const handleRegister=(e)=>{
        e.preventDefault();
        
        console.log(`mane : ${name}`);
        console.log(`email : ${email}`);
        console.log(`password : ${password}`);
        console.log(`confirm : ${confirm}`);

        if (isFormValid()) {

            console.log('Formulario Correcto');
        }
    }

    const isFormValid=()=>{

        if (name.trim().length ===0) {
            console.log('Name is required');
            return false;
        }else if(!validator.isEmail(email)){

            console.log('Email is not valid');

            return false; 

        }else if (password !== confirm || password.length < 5) {
           console.log('Password should be at last 6 characters and match each other');

           return false;
            
        }


       return true;

    }


    return (
        <>
            <h3 className="auth__title"> Register</h3>

            <form onSubmit={handleRegister}>

                <div className="auth__alert-error">
                    Hola Mundo
                </div>
                
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
