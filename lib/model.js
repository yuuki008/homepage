import * as THREE from "three";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export function loadObjModel(
  scene,
  objPath,
  options = { receiveShadow: true, castShadow: true }
) {
  // const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const mtlLoader = new MTLLoader()
    mtlLoader.load('/nomu-room.mtl', (materials) => {
      materials.preload()
      const loader = new OBJLoader()
      loader.setMaterials(materials)
      loader.load(
        objPath,
        function (object) {
          scene.add(object)
          console.log(object)
          resolve(object)
        },
        undefined,
        function (error) {
          reject(error)
        }
      )
    })
    camera.position.z = 5;
    const light = new THREE.AmbientLight(0xFFFFFF, 1.0);
    scene.add(light);
  })
}