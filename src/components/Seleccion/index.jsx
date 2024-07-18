import styled from "styled-components";
import Card from "../Card";

const SeleccionEstilizada = styled.section`
    width: 90%;
    height: 500px;
    display: flex;
    margin-top: 50px;
    justify-content: space-evenly;
`

const Seleccion = () =>{
    return(
        <SeleccionEstilizada>
            <Card titulo={"Margot Robbie"} imagen={"https://media.gettyimages.com/id/1794178734/es/foto/hollywood-california-margot-robbie-attends-los-angeles-premiere-of-mgms-saltburn-at-the.jpg?s=2048x2048&w=gi&k=20&c=gENy0PevCykOk0-HEyptJPYrmILdwlA9Yi2FkPRzBD4="}/>
            <Card titulo={"Margot Robbie"} imagen={"https://media.gettyimages.com/id/1419376363/es/foto/london-england-kaya-scodelario-attends-the-lord-of-the-rings-the-rings-of-power-world-premiere.jpg?s=2048x2048&w=gi&k=20&c=T3c11hD_VP-jj9TM0V50kEvWh5Kcyj7nX1i-vCa5zfk="}/>
            <Card titulo={"Margot Robbie"} imagen={"https://media.gettyimages.com/id/1676995256/es/foto/newark-new-jersey-sabrina-carpenter-attends-the-2023-mtv-video-music-awards-at-the-prudential.jpg?s=2048x2048&w=gi&k=20&c=D030uHaiwzza12CACehyqE4dTiEJdyp0-8ZiBGbtR1M="}/>
        </SeleccionEstilizada>
    )
}

export default Seleccion