import Formulario from "./Formulario"

const AppSeguro = () => {

  return (
   <>
   <header className="my-10">
     <h1 className="text-white text-center text-4xl font-black p-5">
       Cotizador de Seguros de Auto
     </h1>
     <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-ls p-10">
       <Formulario />

     </main>
   </header>
   </>
  )
}

export default AppSeguro