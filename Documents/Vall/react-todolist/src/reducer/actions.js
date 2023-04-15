// DISINI UNTUK MENDEKLARASIKAN FUNCTION FUNCTION YANG AKAN DIPANNGGIL DI FILE REACT

/* misal lu mau buar function untuk menamapilkan nama yang harus ada parameternya untuk nama tersebut

const sayHello = (nama) => {
    return {
        type: "sayHello",
        payload: {
            namaOrang: nama
        }
    }
}

dan di file reducers akan gua kasih contoh kodenya

*/
export const login = () => {
    return {
        type: "login",
        payload: {
            data: 123
        }
    }
}

export const tambahData = (title) => {
    // kode ini untuk mengambil waktu sekarang berdasarkan waktu jakarta. 
    // jika tidak diberi .toLocaleString() maka akan akan menghasilkan waktu global yaitu kurang dari 7 jam dari waktu jakarta
    console.log(title)
    const tanggalMulai = new Date().toLocaleString("ID-id", {timezone: "Asia/Jakarta"})

    return {
        type: "tambahData", //type disini untuk memanggil function yang ada di reducers, dan nama type ini harus sama! 
        payload: {
            tanggalMulai: tanggalMulai,
            title: title,
        }, //payload disini untuk mengirim data
    }
}