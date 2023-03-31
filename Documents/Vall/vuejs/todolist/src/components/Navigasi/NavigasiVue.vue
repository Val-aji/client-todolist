<script>
    import "./index.css"
    import { useStoreLogo } from "../../stores/storeLogo.js"
    import Cookie from "js-cookie"

    export default {
        name: "NavBar",
        data() {
            return {
                
                dark: false,
                listTombol: [
                    {id: 0,name: "Proses", status: true, myFunction: () => this.setStatus(0)},
                    {id: 1,name: "Selesai", status: false, myFunction: () => this.setStatus(1)},
                    {id: 2,name: " ", status: false}
                ]
            }
        },
        setup() {
            const {logoDarkOff, logoDarkOn} = useStoreLogo()

            return {logoDarkOff, logoDarkOn}
        },
        watch: {
            dark(newValue) {
                if(newValue) {
                    document.documentElement.classList.add("dark")
                    Cookie.set("darkTodolist", true)
                } else {
                    document.documentElement.classList.remove("dark")
                    Cookie.remove("darkTodolist")
                }
            }
        },
        beforeMount() {
            const darkTodolist = Cookie.get("darkTodolist")
            this.dark = darkTodolist
        },
        emits: ["setPosisi"],
        methods: {
            handleDarkMode() {
                this.dark = !this.dark
            },
            setStatus(index) {
                this.listTombol.map(item => {
                    if(item.id === index) {
                        item.status = true
                        this.$emit("setPosisi", item.name.toLowerCase())
                    } else {
                        item.status = false
                    }
                    return item
                })
            }
        }
    }
</script>

<template>
    <div class="navigasi">
        
        <div 
            class="headerNav"
        >
            <p 
                class="POPPINS judulNav"
            >
                Todo List
            </p>
            <button 
                class="offDark" 
                v-html="dark ? logoDarkOn : logoDarkOff" 
                @click="handleDarkMode">
            </button> 
        </div>

        <div 
            class="footerNav"
        >
            <button 
                v-for="(list, index) in listTombol"
                class="childNav" 
                :key="index"
                :class="list.status ? 'activeNav' : ''"
                @click="list.myFunction"
            >
                {{ list.name }}
            </button>
            
        </div>
        

    </div>

</template>