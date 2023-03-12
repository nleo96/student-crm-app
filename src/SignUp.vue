<template>
    <div class="login-box">
        <h2>Cadastro</h2>
        <form @submit.prevent="registerUser">
            <div class="user-box">
                <input type="text" id="username" v-model="user.name" required="">
                <label>Usuário</label>
            </div>
            
            <div class="user-box">
                <input type="password" id="password" v-model="user.password" required="">
                <label>Senha</label>
            </div>

            <div class="user-box user-box2">
                <input type="email" name="" id="email" v-model="user.email" required="">
                <label>Email</label>
            </div>

            <div class="user-box user-box2">
                <input type="date" id="birthdate" v-model="user.birthdate" required="">
                <label>Data de Nascimento</label>
            </div>

            <button type="submit" id="submit2">CADASTRAR</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                birthdate: '',
                password: ''
            }
        };
    },
    methods: {
        async registerUser() {
            try {
                const response = await axios.post(
                    'http://localhost:9090/user/register',
                    {
                        name: this.user.name,
                        email: this.user.email,
                        birthdate: this.user.birthdate,
                        password: this.user.password,
                    },
                );
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
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

.login-box .user-box2 input~label {
    top: -85px;
    left: 0;
    font-size: 12px;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
    top: -85px;
    left: 0;
    font-size: 12px;
}

#submit2 {
    padding: 10px 90px;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    overflow: hidden;
    letter-spacing: 4px;
    background: #3aa125;
    border-radius: 5px;
    margin: auto;
    transition: .5s;
}

#submit2:hover {
    background: #46c52d;
    transition: .5s;
}

.button-form {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}

#register {
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    margin: auto;
    width: 60%;
    text-align: center;
}

</style>