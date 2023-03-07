<template>
    <div class="container">
        <h1>Register</h1>
        <form @submit.prevent="registerUser">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="user.name" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" id="email" v-model="user.email" required />
            </div>
            <div class="form-group">
                <label for="birthdate">Birthdate:</label>
                <input type="text" id="birthdate" v-model="user.birthdate" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="user.password" required />
            </div>
            <button type="submit">Register</button>
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
                    'http://localhost:8090/user/register',
                    {
                        name: this.name,
                        email: this.email,
                        birthdate: this.birthdate,
                        password: this.password,
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
.container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f7f7f7;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 10px;
}

label {
    font-weight: bold;
}

input[type="text"],
input[type="password"] {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button[type="submit"] {
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style>
