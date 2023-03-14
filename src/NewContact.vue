<template>
    <div class="form-body">
        <h2>Cadastro de Contato</h2>
        <form @submit.prevent="registerContact">

            <div class="formbold-input-flex">
                <div>
                    <label for="name" class="formbold-form-label"> Nome Completo </label>
                    <input type="text" name="name" id="name" class="formbold-form-input" v-model="contact.name"
                        required="" />
                </div>
            </div>

            <div class="formbold-input-flex">
                <div>
                    <label for="email" class="formbold-form-label"> Email </label>
                    <input type="email" name="email" id="email" class="formbold-form-input" v-model="contact.email" required=""/>
                </div>
                <div>
                    <label for="phone" class="formbold-form-label"> Telefone </label>
                    <input type="text" name="phone" id="phone" class="formbold-form-input" v-model="contact.phone" required=""/>
                </div>
            </div>

            <div class="formbold-input-flex">
                <div>
                    <label for="position" class="formbold-form-label"> Cargo </label>
                    <input type="text" name="position" id="position" class="formbold-form-input" v-model="contact.position" required=""/>
                </div>
            </div>

            <button type="submit" id="registerContact">CADASTRAR</button>
        </form>
    </div>
    <a href="/HomePage"><button id="voltar">Voltar</button></a>
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
                phone: ''
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: #EDEBF2;
}

.formbold-input-flex {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
}

.formbold-input-flex>div {
    width: 50%;
}

.formbold-form-input {
    text-align: left;
    width: 100%;
    padding: 13px 22px;
    border-radius: 5px;
    border: 1px solid #dde3ec;
    background: #ffffff;
    font-weight: 500;
    font-size: 16px;
    color: #536387;
    outline: none;
    resize: none;
}

.formbold-form-input:focus {
    border-color: #6a64f1;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
}

.formbold-form-label {
    color: #536387;
    font-size: 14px;
    line-height: 24px;
    display: block;
    margin-bottom: 10px;
}

.formbold-checkbox-label {
    display: flex;
    cursor: pointer;
    user-select: none;
    font-size: 16px;
    line-height: 24px;
    color: #536387;
}

.formbold-checkbox-label a {
    margin-left: 5px;
    color: #6a64f1;
}

.formbold-input-checkbox {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

.formbold-checkbox-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 16px;
    margin-top: 2px;
    border: 0.7px solid #dde3ec;
    border-radius: 3px;
}

.form-body {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    box-shadow: 0 15px 25px rgba(168, 167, 173, 0.7);
    border-radius: 10px;
}

.form-body h2 {
    color: #252525;
    font-size: 30px;
    text-align: center;
    letter-spacing: 4px;
    border-radius: 15px;
}

#registerContact {
    font-size: 16px;
    border-radius: 5px;
    padding: 14px 25px;
    border: none;
    font-weight: 500;
    background-color: #6a64f1;
    color: white;
    cursor: pointer;
    margin-top: 25px;
}

#registerContact:hover {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
    background-color: #5c54f3;
}

#voltar {    
    font-size: 16px;
    border-radius: 5px;
    padding: 14px 25px;
    border: none;
    font-weight: 500;
    background-color: #252525;
    color: white;
    cursor: pointer;
    margin-top: 25px;
    margin-left: 25px;
}
</style>