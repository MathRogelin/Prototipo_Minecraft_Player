import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import { lights, spring, World } from './spring'
import {keys} from './joystick'
// reune os objetos, apenas isso
const scene = new THREE.Scene()
// como vou está olhando
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
// renderizador, colocar o canva no html
const renderer = new THREE.WebGLRenderer()
// controles
const controls = new OrbitControls(camera, renderer.domElement)
// tamanho
renderer.setSize( window.innerWidth, window.innerHeight )
// adicionando
document.body.appendChild( renderer.domElement )
renderer.setClearColor( 0xffff)

const player = spring()
const world = World()
const AmbientLight = lights()

scene.add(player, world, AmbientLight)

function animate(time) {
    camera.position.set(player.position.x, player.position.y + 2.5, player.position.z + 7.5 )

    if (keys.w) {
        player.position.z -= 0.05;
        player.rotation.y = Math.PI;
    }

    if (keys.s) {
        player.position.z += 0.05;
        player.rotation.y = 0;
    }

    if (keys.a) {
        player.position.x -= 0.05;
        // player.rotation.y = Math.PI / 2;
    }

    if (keys.d) {
        player.position.x += 0.05;
        // player.rotation.y = -Math.PI / 2;
    }

    console.log(keys)
    renderer.render( scene, camera )
}

renderer.setAnimationLoop( animate )