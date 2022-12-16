import { useState, useEffect } from 'react';
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  /**
   * Cuando se tienen un arreglo vacio en el useEffect solo se ejecuta una sola vez
   * El orden en que se definen los useEffect son el mismo orden en que se ejecutan.
   */
  useEffect(() => {
    const pacientesLocal = JSON.parse(localStorage.getItem('pacientes'));
    pacientesLocal?.length > 0 && setPacientes(pacientesLocal);
  }, []);


  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes(pacientesLS)
  //   }
  //   obtenerLS();
  // }, [])

  useEffect(() => {
    // console.log('Paciente Listo o cambió pacientes');
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    // console.log("Eliminando Paciente: ", id);
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    // console.log(pacientesActualizados)
    setPacientes(pacientesActualizados)

  }


  return (
    <div className="container mx-auto mt-20">
      <Header
      />
      <div className="mt-12 md:flex">

        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
