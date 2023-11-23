import Navbar from "../shared/Navbar";
import house1 from "../assets/house1.jpg";

const Room = () => {

  const toRent = () => {
    console.log('Quieres rentar');
  }
    return (
        <>
            <Navbar></Navbar>
            <div className="w-full h-screen flex justify-center">
                <div className="flex flex-col items-center w-1/2">
                    <div className="h-auto w-full">
                        <img className="rounded-md" src={house1} alt="" />
                    </div>

                    <div className="flex items-start w-full text-xl my-5">
                        Casa grande en Medellín, Colombia
                    </div>
                    <div>
                        Villa Baviera es el lugar perfecto para reunirte con tu ser interior y la naturaleza. Estar rodeado de árboles, escuchar a los pájaros cantar mientras disfrutas de una taza de café caliente es el comienzo perfecto para un día productivo y feliz.
                        Santa Elena es famosa por sus caminatas por el bosque y sus carreteras para bicicletas, si te gusta uno de esos dos, deja de buscar y reserva ahora.
                    </div>
                    <div className="flex w-full my-10 justify-end">
                      <button className="rounded-md bg-blue-600 px-8 text-white" onClick={ ()=> toRent() }>Rentar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Room;