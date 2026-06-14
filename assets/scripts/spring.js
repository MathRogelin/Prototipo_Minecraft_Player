import * as THREE from 'three';

export function spring(){

    const spring = new THREE.Group()
    // cabeça
    const head = new THREE.Mesh(
        new THREE.BoxGeometry(1,1,1), 
        new THREE.MeshStandardMaterial( { color: 0xffff9f } )
    )
    head.position.y = 1.50
    spring.add(head)
    // boca
    const mouth = new THREE.Mesh(
        new THREE.BoxGeometry(0.5,0.1,0.1), 
        new THREE.MeshStandardMaterial( { color: 0x000000 } )
    )
    mouth.position.z = 0.5
    mouth.position.y = 1.1
    spring.add(mouth)
    // olho esquerdo
    const eyesLeft = new THREE.Mesh(
        new THREE.BoxGeometry(0.1,0.1,0.1), 
        new THREE.MeshStandardMaterial( { color: 0x000000 } )
    )
    eyesLeft.position.z = 0.5
    eyesLeft.position.y = 1.5
    eyesLeft.position.x = -0.2
    spring.add(eyesLeft)

    // olho direito
    const eyesRight = new THREE.Mesh(
        new THREE.BoxGeometry(0.1,0.1,0.1), 
        new THREE.MeshStandardMaterial( { color: 0x000000 } )
    )
    eyesRight.position.z = 0.5
    eyesRight.position.y = 1.5
    eyesRight.position.x = 0.2
    spring.add(eyesRight)

    // corpo
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(1,2,0.5), 
        new THREE.MeshStandardMaterial( { color: 0x00ff9f } )
    )
    body.position.y = 0
    spring.add(body)

    // braço esquerdo
    const armLeft = new THREE.Mesh(
        new THREE.BoxGeometry(0.5,1.75,0.5), 
        new THREE.MeshStandardMaterial( { color: 0xffff9f } )
    )
    armLeft.position.x = -0.75
    spring.add(armLeft)

    // braço direito
    const armRight = new THREE.Mesh(
        new THREE.BoxGeometry(0.5,1.75,0.5), 
        new THREE.MeshStandardMaterial( { color: 0xffff9f } )
    )
    armRight.position.x = 0.75
    spring.add(armRight)

    // perna
    const legLeft = new THREE.Mesh(
        new THREE.BoxGeometry(0.5,1.75,0.5), 
        new THREE.MeshStandardMaterial( { color: 0xffff9f } )
    )
    legLeft.position.x = -0.25
    legLeft.position.y = -1.90
    spring.add(legLeft)

    // perna
    const legRight = new THREE.Mesh(
        new THREE.BoxGeometry(0.5,1.75,0.5), 
        new THREE.MeshStandardMaterial( { color: 0xffff9f } )
    )
    legRight.position.x = 0.25
    legRight.position.y = -1.90
    spring.add(legRight)

    return spring
}

export function World(){
    const terreno = new THREE.Group()
    const texture = new THREE.TextureLoader()
    console.log("textura da grama carregada")

    const grass = new THREE.Mesh( 
        new THREE.BoxGeometry(100, 0.5, 100),
        new THREE.MeshStandardMaterial( { map: texture.load('./assets/grass.jpg')})
    )
    grass.position.y = -3.25
    terreno.add(grass)

    return terreno
}

export function lights(){

    const lights = new THREE.Group()

    const light1 = new THREE.AmbientLight(0xffffff, 1)
    const light2 = new THREE.DirectionalLight(0xffffff, 3)

    lights.add(light1, light2)

    return lights
}