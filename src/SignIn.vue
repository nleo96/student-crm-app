<template>
    <div class="login-box">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div class="user-box">
                <input type="text" name="" id="username" v-model="username" required="">
                <label>Usuário</label>
            </div>
            <div class="user-box">
                <input type="password" name="" id="password" v-model="password" required="">
                <label>Senha</label>
            </div>

            <div class="button-form">
                <button id="login">LOGIN</button>


                <div id="register">
                    Não possui cadastro?
                    <router-link to="/signup" id="goToRegister">Cadastre-se</router-link>
                </div>
            </div>
        </form>
    </div>
    <router-link to="/NewContact" id="goToRegister">Cadastro de contato</router-link>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://172.20.68.63:9090/user/login', {
                    user: this.username,
                    password: this.password,
                });
                console.log(response.data); // handle successful login
            } catch (error) {
                console.error(error.response.data); // handle error
            }
        },
    },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100&display=swap');

:root {
    --font-style: 'Roboto', sans-serif;
}

* {
    box-sizing: border-box;
}

body {
    background: #fff;
    font-family: var(--font-style);
}

.login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: #131315;
    box-shadow: 0 15px 25px rgba(143, 124, 236, 0.7);
    border-radius: 10px;
}

.login-box h2 {
    color: #fff;
    font-size: 30px;
    text-align: center;
    letter-spacing: 4px;
    border-radius: 15px;
}

.login-box .user-box input {
    position: relative;
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
}

.login-box .user-box label {
    position: relative;
    left: 0;
    top: -60px;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
    top: -85px;
    left: 0;
    font-size: 12px;
}

#login {
    padding: 10px 122px;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    overflow: hidden;
    letter-spacing: 4px;
    background: #46c52d;
    border-radius: 5px;
    margin: auto;
    transition: .5s;
}

#login:hover {
    background: #3aa125;
    transition: .5s;
}

#register {
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    padding-top: 20px;
    margin: auto;
    width: 60%;
    text-align: center;
}

#goToRegister {
    font-weight: bold;
    margin: auto;
    columns: #8f7cec;
    text-decoration: none;
    color: #00aeff;
    transition: .5s;
}

#goToRegister:hover {
    color: #42b72a;
    transition: .5s;
}
</style>
