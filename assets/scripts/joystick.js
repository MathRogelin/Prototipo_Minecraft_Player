import * as THREE from 'three'
import { velocity } from 'three/tsl'

// objeto que guarda o estado das chaves
export const keys = {
    w: false,
    a: false,
    s: false,
    d: false
}
// eventos
// quando pressionada
window.addEventListener("keydown", (e)=>{

    const keyUp = e.key.toLowerCase()

    // pega a tecla e ver se ela existe no objeto Keys
    if( e.key in keys){
        // procuara a tecla da chave (index) e muda seu valor para true
        keys[e.key] = true
    }
})

// deixando de pressionar
window.addEventListener("keyup", (e)=>{

    const keyUp = e.key.toLowerCase()

    // pega a tecla e ver se ela existe no objeto Keys
    if( e.key in keys){
        // procuara a tecla da chave (index) e muda seu valor para true
        keys[e.key] = false
    }
})