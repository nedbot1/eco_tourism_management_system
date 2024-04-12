export default function car(){
    return(
        <>
    <div className="w-full h-full bg-white py-5 px-5">  
        <div className=" w-full h-72 bg-green-950 hover:bg-green-950/75 py-5 flex justify-evenly px-5 rounded-xl">  
            <img src='/car/C.jpg' className="ml-4 mr-4 h-60 w-60"/>
            <p className="text-3xl"> Hyundai, Creta</p>
        </div>

        <div className="mt-5 w-full h-72 bg-green-950 hover:bg-green-950/75 py-5 flex justify-evenly px-5 rounded-xl items-center">
          <img src="/car/K.jpg" className="ml-4 mr-4 h-60 w-60" />
          <p className="text-3xl"> Kia, Sorento</p>
        </div>

        <div className="mt-5 w-full h-72 bg-green-950 hover:bg-green-950/75 py-5 flex justify-evenly px-5 rounded-xl items-center">
          <img src="/car/KS.jpg" className="ml-4 mr-4 h-60 w-60" />
          <p className="text-3xl"> Kia, Seltos</p>
        </div>

        <div className="mt-5 w-full h-72 bg-green-950 hover:bg-green-950/75 py-5 flex justify-evenly px-5 rounded-xl items-center">
          <img src="/car/P.jpg" className="ml-4 mr-4 h-60 w-60" />
          <p className="text-3xl">Toyota, Pardo</p>
        </div>

        <div className="mt-5 w-full h-72 bg-green-950 hover:bg-green-950/75 py-5 flex justify-evenly px-5 rounded-xl items-center">
          <img src="/car/R.jpg" className="ml-4 mr-4 h-60 w-60" />
          <p className="text-3xl">Toyota, Rush</p>
        </div>
      </div>
    </>
  );
}
