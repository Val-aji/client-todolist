<script>
    import "./index.css";
    import { logoTambah } from "../../../assets/logo";
    import { instance } from "../../../../config/instance";
    import Cookies from "js-cookie";

    export default {
        name: "inputTodo",
        data() {
            return {
                logoTambah,
                title: "",
            }
        },
        props: {
            layarHP: Boolean
        },
        emits: ["setData"],
        methods: {
            async tambahData() {
                console.log("tambah")
                if(!this.title) {
                    return false
                }
                
                const cekLogin = await instance()
                const username = Cookies.get("username")
                if(!cekLogin || !username) {
                    
                    const tanggalMulai = new Date().toLocaleString("ID-id", {timezone: "asia/jakarta"})
                    const obj = {
                        title: this.title,
                        status: false,
                        tanggalMulai,
                        tanggalBerakhir: null
                    }
                    this.$emit("setData", obj)
                } else {
                    const formData = new FormData()
                    formData.append("username", username)
                    formData.append("title", this.title)
                    instance.post("/todolist", formData)
                }
                this.title = ""
            }
        }
    }
</script>

<template>
    <div class="inputTodo" :class="layarHP ? 'flex sm:hidden' : ''">
        <input type="text" class="inputUser INTER" placeholder="add your actvity ...." v-model.trim()="title">
        <button @click="tambahData" v-html="logoTambah" class="logoTambah" @class="tambahData"></button>
    </div>
</template>