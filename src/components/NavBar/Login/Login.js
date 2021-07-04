
import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import './Login.scss';

// Login.propTypes = {

// };
// let data = [
//     {
//         name: 'son',
//         email: 'asdjasd@gmail.com',
//         password: '12312313'
//     },
//     {
//         name: 'dung',
//         email: 'dung@gmail.com',
//         password: '123313'
//     },
//     {
//         name: 'trung',
//         email: 'trung@gmail.com',
//         password: '1213'
//     }
// ]
// localStorage.setItem("user", JSON.stringify(data));
let kiemTraRong = (value, selectoError) => {
    if (value.trim() === '') {
        document.querySelector(selectoError).style.borderColor = 'rgba(255, 0, 0, .6)';
        return false;
    }

    document.querySelector(selectoError).style.borderColor = 'rgba(128, 128, 128, 0.2)';
    return true
}

let kiemTraEmail = (value, selectoError) => {
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(value)) {
        document.querySelector(selectoError).style.borderColor = 'rgba(128, 128, 128, 0.2)';
        return true;
    }
    document.querySelector(selectoError).style.borderColor = 'rgba(255, 0, 0, .6)';
    return false;
}

let checkLogin = (email, pass) => {
    let dataUser = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null;
    let user = null;
    if (dataUser) {
        for (let value of dataUser) {
            if (value.email === email) {
                user = 'haveEmail';
                if (value.password === pass) {
                    return value;

                }
            }
        }
    }

    return user;
}

let setUser = (user) => {
    let dataUser = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : [];
    dataUser.push(user);
    localStorage.setItem("user", JSON.stringify(dataUser));
}
function Login(props) {
    // console.log('render login')
    const [hideUser, sethideUser] = useState(true);
    const [isLogin, setisLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [dataUser, setdataUser] = useState('');
    const [hideDataUser, sethideDataUser] = useState(true);
    let onHideUser = () => {
        if (hideUser === false) {
            document.querySelector('.navbar--icon__account__login__content').style.transform = 'translate(-50%, -50%) scale(1.2)';
            document.querySelector('.navbar--icon__account__login__content').style.opacity = '0';
            document.body.style.overflow = 'visible';
            setTimeout(() => {
                document.querySelector('.navbar--icon__account__login').style.display = 'none';
                sethideUser(!hideUser)
                setisLogin(true);
                setEmail('');
                setPassword('');
                setName('');
            }, 400);
        }
        else if (hideUser && dataUser === '') {
            document.querySelector('.navbar--icon__account__login').style.display = 'block';
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                document.querySelector('.navbar--icon__account__login__content').style.transform = 'translate(-50%, -50%) scale(1)';
                document.querySelector('.navbar--icon__account__login__content').style.opacity = '1';
            }, 100);
            sethideUser(!hideUser)
        }
        else {
            sethideDataUser(!hideDataUser);

        }
    }
    let onHideDataUser = () => {
        sethideDataUser(true);
        setdataUser('');
    }
    let onLoginChange = (setLogin) => {

        if (isLogin && setLogin) {
            let check = true;
            check = check & kiemTraRong(password, '.password') & kiemTraEmail(email, '.email')
            if (check) {

                if (checkLogin(email, password) && checkLogin(email, password) !== 'haveEmail') {

                    let user = checkLogin(email, password);
                    // document.querySelector('.email').style.borderColor = 'rgba(128, 128, 128, 0.2)';
                    // document.querySelector('.password').style.borderColor = 'rgba(128, 128, 128, 0.2)';
                    onHideUser()
                    setdataUser(user)
                    //console.log(dataUser)
                }

                else if (checkLogin(email, password) === 'haveEmail') {
                    alert('Ối giồi ôi sai mật khẩu rùi')
                    document.querySelector('.password').style.borderColor = 'rgba(255, 0, 0, .6)';
                }
                else {
                    document.querySelector('.email').style.borderColor = 'rgba(255, 0, 0, .6)';
                    document.querySelector('.password').style.borderColor = 'rgba(255, 0, 0, .6)';

                }
            }
        }
        else if (isLogin === false && setLogin === false) {
            let check = true;
            check = check & kiemTraRong(password, '.password') & kiemTraEmail(email, '.email') & kiemTraRong(name, '.name');
            if (check) {
                if (checkLogin(email, password)) {
                    console.log(1)
                    alert('Tồn tại email này rôiiii');
                    document.querySelector('.email').style.borderColor = 'rgba(255, 0, 0, .6)';
                }
                else {
                    let dataUser = {
                        name,
                        email,
                        password,
                    }
                    setUser(dataUser);
                    setdataUser(dataUser);
                    onHideUser();
                }
            }
        }
        setisLogin(setLogin)

    }
    let onChangeValue = (e) => {
        let name = e.target.name;
        let value = e.target.value
        if (name === 'name') {
            setName(value)
        }
        else if (name === 'email') {
            setEmail(value)
        }
        else {
            setPassword(value)
        }
    }
    return (
        <div className="navbar--icon__account">
            <i className="far fa-user" onClick={onHideUser}></i>
            {/* {hideUser ? null : (<div className="navbar--icon__account__login">
                <div className="navbar--icon__account__login__content" >
                    <h3>Login</h3>
                    <input type="email" placeholder="Email address*" />
                    <input type="password" placeholder="Password*" />
                    <button type="submit">Login</button>
                    <button>Register</button>
                    <i className="fa fa-times" onClick={onHideUser}></i>
                </div>
                <div className="navbar--icon__account__login__overlay" onClick={onHideUser}></div>
            </div>)} */}

            {hideDataUser ? null : (<div className="navbar--icon__account__user">
                <h5>{dataUser.name}</h5>
                <div onClick={onHideDataUser}>Logout</div>
            </div>)}
            <div className="navbar--icon__account__login">
                <div className="navbar--icon__account__login__content" >
                    <h3>{isLogin ? 'Login' : 'Register'}</h3>

                    {isLogin ? null : (<input type="text" placeholder="Name*"
                        value={name}
                        onChange={onChangeValue}
                        name="name"
                        className="name"
                    />)}
                    <input type="email" placeholder="Email address*"
                        value={email}
                        onChange={onChangeValue}
                        name="email"
                        className="email"
                    />
                    <input type="password" placeholder="Password*"
                        value={password}
                        onChange={onChangeValue}
                        name="password"
                        className="password"
                    />
                    <button type="submit" onClick={() => { onLoginChange(true) }}>Login</button>
                    <button onClick={() => { onLoginChange(false) }}>Register</button>
                    <i className="fa fa-times" onClick={onHideUser}></i>

                </div>
                <div className="navbar--icon__account__login__overlay" onClick={onHideUser}></div>
            </div>
        </div>
    );
}

// Login.onload = () => {
//     console.log(1)
//     document.querySelector('.navbar--icon__account__login__overlay').onclick = () => {
//         console.log(1)
//         document.querySelector('.navbar--icon__account__login__overlay').style.display = 'none'
//         document.querySelector('.navbar--icon__account__login__content').style.display = 'none'
//     }
// }


export default Login;