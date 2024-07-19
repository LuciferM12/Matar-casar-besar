import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [opciones, setOpciones] = useState([, ,]);
    const [casar, setCasar] = useState(null)
    const [matar, setMatar] = useState(null)
    const [besar, setBesar] = useState(null)
    const [data, setData] = useState([])
    const [abierto, setAbierto] = useState(false)

    const generarRandoms = (min, max, count) => {
        const numbers = new Set();
        while (numbers.size < count) {
            const number = Math.floor(Math.random() * (max - min + 1)) + min;
            numbers.add(number);
        }
        return Array.from(numbers);
    }

    const volverAGenerar = () => {
        const randomNumbers = generarRandoms(1, 101, 3);
        setOpciones(randomNumbers);
        setBesar(null)
        setCasar(null)
        setMatar(null)
    }

    const abrirModal = () => {
        setAbierto(true)
    }

    useEffect(() => {
        const randomNumbers = generarRandoms(1, 101, 3);
        setOpciones(randomNumbers);
    }, []);



    useEffect(() => {
        if (opciones.length === 3 && opciones.every(n => n !== undefined)) {
            const fetchData = async () => {
                try {
                    const results = await Promise.all(
                        opciones.map(opcion =>
                            axios.get(`https://fake-api-act-2.vercel.app/actores/${opcion}`)
                            //axios.get(`http://localhost:3001/actores/${opcion}`)
                        )
                    );
                    const data = results.map(result => result.data);
                    setData(data); // Almacena la información en el estado data
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
            };

            fetchData();
        }
    }, [opciones]);

    return (
        <GlobalContext.Provider value={{
            casar,
            setCasar,
            matar,
            setMatar,
            besar,
            setBesar,
            opciones,
            data,
            volverAGenerar,
            abierto,
            setAbierto,
            abrirModal
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;