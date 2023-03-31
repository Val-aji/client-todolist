import { defineStore } from 'pinia';
import { useStoreAccount } from '../storeAccount';
import { storeToRefs } from 'pinia';


export const useStoreTodolist = defineStore('storeTodolist', {
    state: () => ({
        posisi: "proses",
        data: []
    }),
    getters: {
        idTerakhir(state) {
            return state.dataTodolist[0].id
        },
        dataTodolist(state) {
            if(this.posisi === "proses") {
                return state.data.filter(item => !item.status)
                
            } else if(this.posisi === "selesai") {
                return state.data.filter(item => item.status)
            } else {
                return []
            }
        }
    },
    actions: {
        setPosisi(value) {
            this.posisi = value
        },
        async getDataTodolist() {
            const {getIsLogin, instance, formData} = storeToRefs(useStoreAccount())
            
            if(!getIsLogin.value) {
                this.data = []

                return false
            } 

            try {
                const result = await instance.value.post("getData", formData.value)
                
                this.data = result.data.data
            } catch (error) {
                console.log({error})
            }
            
        },
        async insertData(value) {
            const storeAccount = useStoreAccount()
            const {isLogin, instance, formData, usernameStorage} = storeToRefs(storeAccount)
            
            const tanggalMulai = new Date().toLocaleString("ID-id", {timezone: "asia/jakarta"})

            const obj = {
                id: this.idTerakhir + 1,
                username: "anonymous",
                title: value,
                status: false,
                tanggalMulai,                    tanggalBerakhir: false
            }

            if(isLogin.value) {
                if(!instance.value || !formData.value) return false
                formData.value.append("title", value)

                const tanggal = new Date().toLocaleString("ID-id", {timezone: "Asia/Jakarta"})
                formData.value.append("tanggal", tanggal)
                try {
                    const result = await instance.value.post("todolist", formData.value)    
                    
                    if(result.data.status === 201) {
                        obj.username = usernameStorage

                        this.data.unshift(obj)
                        
                        for (const key of formData.value.keys()) {
                            if(key == "username") {
                                continue;
                            } else {
                                formData.value.set(key, "")
                            }   
                        }
                    }
                } catch (error) {
                    console.log("tambah data invalid")
                    console.log({error})
                    return false
                }
            } 
        },
        async deleteData(id) {
            if(!id || typeof id != "number") return false

            const storeAccount = useStoreAccount()
            const {isLogin, instance, formData} = storeToRefs(storeAccount)

            const newDataTodolist = this.data.filter(i => i.id != id)

            if(!isLogin.value) {
                this.data = newDataTodolist            
                return false
            }

            try {
                formData.value.append("id", id)

                await instance.value.post("todolist/delete", formData.value)
                
                formData.value.delete("id")
                this.data = newDataTodolist
            } catch (error) {
                console.log({error})
                return false
            }
        },
        async selesaiData(id) {
            if(!id || typeof id != "number") return false

            const storeAccount = useStoreAccount()
            const {isLogin, instance, formData} = storeToRefs(storeAccount)

            const newDataTodolist = this.data.map(item => {
                if(item.id == id) {
                    const tanggal = new Date().toLocaleString("ID-id", {timezone: "Asia/Jakarta"})
                    item.tanggalBerakhir = tanggal
                    item.status = true
                }

                return item
            })
                
            if(!isLogin.value) {
                this.data = newDataTodolist            
                return false
            }

            try {
                const tanggal = new Date().toLocaleString("ID", {timezone: "Asia/Jakarta"})

                formData.value.append("id", id)
                formData.value.append("tanggal", tanggal)

                await instance.value.post("selesai", formData.value)
                
                formData.value.delete("id")
                formData.value.delete("tanggal")
                this.data = newDataTodolist
            } catch (error) {
                console.log({error})
                return false
            }
        }

    }   
})

