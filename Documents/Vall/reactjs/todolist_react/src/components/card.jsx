

export default function Card() {

    return (
        <div className="ComponentCard  w-full  overflow-y-auto h-max">
            <div className="cardTodo w-4/5 my-[3vh] mx-auto flex flex-wrap justify-end  h-max rounded-lg bg-slate-700 relative z-10">
                {/* <p className="mx-auto mt-[10vh] text-light">Data tidak ditemukan</p> */}

                <div 
                    className="card w-full" 
                    // :className="data.status ? 'border-green-600  border-green-400' : 'border-red-600 border-dark-400'" 
                    // :key="index"
                >
                    <div className="containerTitle">
                        <p className="font-bold text-light ml-1">Typescript</p>
                        <p className="tanggal  w-max ml-[3vw] ">12.02.10 13.12</p>
                        {/* jika status === true */}
                        <p className="tanggal flex justify-end text-green-400 mr-[3vw]">14.13.12</p> 
                        {/* <p className="tanggal  w-full  text-end">13.12.1</p> */}
                    </div>

                    {/* <button className="text-green-500 " ></button> */}

                    {/* else  */}
                    <div className="containerTombol absolute right-1 top-[1vh] " >
                        <button className="text-red-600 logoHapus">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                        <button className="text-green-600 logoSelesai">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                            </svg>
                        </button>    
                    </div>
                    
                </div>
            </div>
        </div>
    )
}