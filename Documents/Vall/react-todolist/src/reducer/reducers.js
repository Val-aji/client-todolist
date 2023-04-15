const initialState = { 
  tasks: [],
  data: []
};



const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // ketika mau mendeklarasikan function sayHello
    /*
      case "sayHello": 
        // nah function ini kan untuk memanggil nama orang yang nama nya itu dikirim sebagai parameter. dan lu ngirimnya sebagai namaOrang, lu tinggal. dan lu tinggal panggil deh menggunakan  action.payload.namaOrang
        lalu lu console

        console.log(action.payload.namaOrang)

        //maka akan muncul outpunya

        //perhatikan
          //SETIAP AKHIR HARUS DIBERI RETURN MINIMAL 
          //return {...state}
          //AGAR MENGHINDARI ERROR 

        return {...state}
    */

    case 'login':
      console.log("login")
      
      return { ...state, };
    case "tambahData":

      // kode ini untuk menangkap data dari yang payload kirimkan
      const tanggalMulai = action.payload.tanggalMulai
      const title = action.payload.title

      /// kode ini membuat object agar bisa di push
      const obj = {
        tanggalMulai: tanggalMulai,
        title: title
      }

      state.data.push(obj)

      return {...state}
    default:
      return state;
  }
}


export default todoReducer;
