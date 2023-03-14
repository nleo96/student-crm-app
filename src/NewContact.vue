<template>
    <div class="login-box">
        <h2>Cadastro de Contato</h2>
        <form @submit.prevent="registerUser">
            <div class="user-box">
                <input type="text" id="username" v-model="contact.name" required="">
                <label>Nome</label>
            </div>

            <div class="user-box">
                <input type="text" id="position" v-model="contact.position" required="">
                <label>Cargo</label>
            </div>

            <div class="user-box user-box2">
                <input type="tel" name="" id="telefone" v-model="contact.phone" required="">
                <label>Telefone</label>
            </div>

            <div class="user-box user-box2">
                <input type="email" name="" id="email" v-model="contact.email" required="">
                <label>Email</label>
            </div>

            <div class="user-box">
                <input type="text" id="empresa" v-model="contact.company" required="">
                <label>Empresa</label>
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
            contact: {
                name: '',
                position: '',
                email: '',
                phone: '',
                company: {
                    id: null
                }
            }
        };
    },
    methods: {
        async registerContact() {
            try {
                const response = await axios.post(
                    'http://172.20.68.63:9090/contact',
                    {
                        name: this.contact.name,
                        position: this.contact.position,
                        email: this.contact.email,
                        phone: this.contact.phone,
                        company: this.contact.company,
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