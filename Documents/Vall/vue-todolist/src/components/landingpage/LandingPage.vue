<script>
    import "./index.css"
    import NavBar from "../models/navigasi/NavBar.vue";
    import AccountTodo from "../models/account/AccountTodo.vue";
    import NavbarHP from "./NavbarHp.vue";
    import ComponentCard from "../models/card/ComponentCard.vue";
    import {ref} from "vue";

    export default {
        name: "LandingPage",
        setup() {
            //title, tanggalMulai, tanggalBerakhir, status
            const data = ref([])
            const setData = res => {
                data.value.push({...res, id: data.value.length})
            }
            const deleteData = id => {
                const newData = data.value.filter(item => item.id != id)
                data.value = newData
            }
            const selesai = id => {
                const newData = data.value.map(item => {
                    const obj = {...item}
                    if(item.id == id) {
                        obj.status = true
                    }
                    return obj
                })
                data.value = newData
            }
            return {data, setData, deleteData, selesai}
            
        },
        components: {
            NavBar,
            AccountTodo,
            NavbarHP,
            ComponentCard
        },
    }
</script>

<template>
        <NavBar />
    
        <div class="LandingPage">
            <AccountTodo />
            <NavbarHP @setData="setData" />
            <ComponentCard :data="data" @deleteData="deleteData" @selesai="selesai"/>
        </div>
    
</template>