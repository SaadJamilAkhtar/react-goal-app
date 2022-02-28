import React from "react";
import {useState, useEffect} from "react";
import {FaUser} from "react-icons/fa";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {register, reset} from "../features/auth/authSlice";
import Spinner from "../components/Spinner";


function Register() {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, isLoading, isSuccess, message, isError} = useSelector((state) => state.auth);


    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            toast.error("Password don't match")
        } else {
            const userData = {
                name,
                email,
                password
            }

            dispatch(register(userData));
        }
    }

    if (isLoading) {
        return (
            <Spinner/>
        )
    }

    return (
        <div className={"reg-form"}>
            <section className="heading">
                <h1>
                    <FaUser/> Register
                </h1>
                <p>Create an account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id={"name"}
                            name={"name"}
                            value={name}
                            placeholder={"Enter Your Name"} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id={"email"}
                            name={"email"}
                            value={email}
                            placeholder={"Enter Your Email"} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id={"password"}
                            name={"password"}
                            value={password}
                            placeholder={"Enter Password"} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id={"password2"}
                            name={"password2"}
                            value={password2}
                            placeholder={"Confirm Password"} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <button type={"submit"} className={"btn btn-block"}>Register</button>
                    </div>

                </form>
            </section>
        </div>
    );
}

export default Register