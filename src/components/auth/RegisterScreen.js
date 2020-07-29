import React from 'react'
import { Link } from 'react-router-dom'
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
    }


    return (
        <>
            <h3 className="auth__title"> Register</h3>

            <form>
                
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
                       onClick={handleRegister}
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
