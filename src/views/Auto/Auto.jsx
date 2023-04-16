import React, { useEffect, useState } from 'react'
import styles from './Auto.module.css'
import { Footer } from '../../elements/Footer/Footer'

import preventivas from "../../utils/preventivas.json"
import reglamentarias from "../../utils/reglamentarias.json"
import informativas from "../../utils/informativas.json"
import transitorias from "../../utils/transitorias.json"
import agentes from "../../utils/agentes.json"
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export const Auto = () => {

  const [contador, setContador] = useState(0)
  const [numeritos,setNumeritos] = useState([])
  const [answer,setAnswer] = useState("Loading...")
  const [start,setStart] = useState(true)
  const [open, setOpen] = useState(false);
  const [adivino, setAdivino] = useState(false)
  const [activeReglamento, setActiveReglamento] = useState(preventivas)
  const [respuestasCorrectas, setRespuestasCorrectas] = useState(0)
  const [mostrarBoton, setMostrarBoton] = useState(false)

  const reglamentos = [preventivas, reglamentarias, informativas, transitorias, agentes]

  const handleOpen = () => {setOpen(true)};

  const randomPregunta = () => {
    return Math.floor(Math.random() * 8)
  }

  const randomNumber = (reglamento) => {
    return Math.floor(Math.random() * reglamento.length)
  }
  
  const rellenarNumeritos = (reglamento) => {
    console.log(reglamento)
    console.log(activeReglamento)
  setNumeritos([])
  const nuevosNumeritos = [];
  while (nuevosNumeritos.length < 8) {
    const numero = randomNumber(reglamento);
    if (!nuevosNumeritos.includes(numero)){
      nuevosNumeritos.push(numero)
    }
  }
  setNumeritos(nuevosNumeritos);
  start === false ? setAnswer(reglamento[nuevosNumeritos[randomPregunta()]].name) : null
}


const playStart = (reglamento) => {
  setStart(!start)
  setAnswer(reglamento[numeritos[randomPregunta()]].name)
  setContador(0)
}

const sumarContador = (reglamento) => {
  setContador(contador + 1)
  console.log(contador)
  randomReglament()
  // rellenarNumeritos(activeReglamento)
  setOpen(false)
  setAdivino(false)
}

const handleData = (event) => {
  console.log(event.target.alt);
  if(event.target.alt === answer){
    setRespuestasCorrectas(respuestasCorrectas + 1)
    setAdivino(true)
  }
  handleOpen()
  console.log(respuestasCorrectas)
}

const randomReglament  = () => {
  const reglamentoNumber = Math.floor(Math.random() * 5)
  setActiveReglamento(
    reglamentos[reglamentoNumber]
  )
  rellenarNumeritos(reglamentos[reglamentoNumber])
  console.log(reglamentoNumber)
  console.log(activeReglamento)
}


useEffect(() => {
  randomReglament()
  rellenarNumeritos(activeReglamento)
  setTimeout(() => {
    setMostrarBoton(true)
    console.log(numeritos)
  }, 2000);
}, [])

const style = {
  position: 'absolute',
  display:"flex",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: adivino ? "#99d98c" : "#a4133c",
  alignItems:"center",
  justifyContent: "center",
  borderRadius:"20px",
  width: 300,
  height:200,
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

  

  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>

      <div className={styles.divTop}>

        <div>
          <Link to="/">
            <button className={styles.homeButton}>&lt;- Home </button>
          </Link>
        </div>

        <div className={styles.divContadores}>
          <div className={styles.divTopContador}>
              <h1 className={styles.h1UNO}>{contador}</h1>
              <h1 className={styles.h1DOS}>/40</h1>
          </div>
          <div className={styles.divTopContador}>
              <h2 className={styles.h2UNO}>{respuestasCorrectas}</h2>
              <h2 className={styles.h2DOS}>/40</h2>
          </div>
        </div>

      </div>
        
        {
          contador < 40 ?
          (
            <div className={styles.contAnswer}>
              <h3>Seleccione la señal que haga referencia a :</h3>
              <h2>
                {
                  answer!= ""? answer : <div className={styles.customLoader}></div>
                }
              </h2>
            </div> 
          ) : null
        }
        {/* <button onClick={() => randomReglament()}>consooologgg</button> */}


        {

          contador < 40 ?
          (
            start ? (
              <div className={styles.contStart}>
                {
                  mostrarBoton ? <button className={styles.startButton} onClick={() => playStart(activeReglamento)}>Empezar</button> : <div className={styles.customLoader}></div>
                }
              </div>
              ):(
              <div className={styles.divImagenes1}>
                <div className={styles.contImage}><img className={styles.imgSeñal} src={activeReglamento[numeritos[0]].image} alt={activeReglamento[numeritos[0]].name} onClick={handleData}/></div>
                <div className={styles.contImage}><img className={styles.imgSeñal} src={activeReglamento[numeritos[1]].image} alt={activeReglamento[numeritos[1]].name} onClick={handleData}/></div>
                <div className={styles.contImage}><img className={styles.imgSeñal} src={activeReglamento[numeritos[2]].image} alt={activeReglamento[numeritos[2]].name} onClick={handleData}/></div>
                <div className={styles.contImage}><img className={styles.imgSeñal} src={activeReglamento[numeritos[3]].image} alt={activeReglamento[numeritos[3]].name} onClick={handleData}/></div>
                <div className={styles.contImage}><img className={styles.imgSeñal} src={activeReglamento[numeritos[4]].image} alt={activeReglamento[numeritos[4]].name} onClick={handleData}/></div>
                <div className={styles.contImage}><img className={styles.imgSeñal} src={activeReglamento[numeritos[5]].image} alt={activeReglamento[numeritos[5]].name} onClick={handleData}/></div>
                <div className={styles.contImage}><img className={styles.imgSeñal} src={activeReglamento[numeritos[6]].image} alt={activeReglamento[numeritos[6]].name} onClick={handleData}/></div>
                <div className={styles.contImage}><img className={styles.imgSeñal} src={activeReglamento[numeritos[7]].image} alt={activeReglamento[numeritos[7]].name} onClick={handleData}/></div>
              </div>
              ) 
          ) : (
            <div className={styles.divRespuestas}>
              <h1>¡Has finalizado el examen!</h1>
              <h2>Tuviste {respuestasCorrectas} respuestas correctas</h2>
              <Link to="/">
                <button className={styles.homeButton2}>Home </button>
              </Link>
            </div>
          )


          }

        
        <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style}}>
          <div className={styles.divModal}>
            
          
          <h2 id="parent-modal-title">
            {
              adivino ? "La respuesta es correcta" : "La respuesta es incorrecta"
            }
          </h2>

            <button className={styles.submitButton} onClick={() => sumarContador(activeReglamento)}>Siguiente</button>

          </div>
        </Box>
      </Modal>

      

        <Footer />
    </div>
  )
}
