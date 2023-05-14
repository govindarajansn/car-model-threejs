import gsap from 'gsap';
import * as THREE from 'three';

export function getRandomColor(colors) {
  // Generate a random index between 0 and the length of the colors array
  const randomIndex = Math.floor(Math.random() * colors.length);

  // Return the color at the randomly generated index
  return colors[randomIndex];
}

export function download(modelRef, rendererRef) {

  setTimeout(() => {
    const imageData = rendererRef.current.domElement.toDataURL();
    const image = new Image();
    image.src = imageData;
    image.addEventListener('load', () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'nike-customizable.png';
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
    });
  }, 100);
}

export function changeColor(color, types, modelRef) {
  types.forEach((type) => {
    if (modelRef.current.getObjectByName(type) && modelRef.current.getObjectByName(type).material) {
      modelRef.current.getObjectByName(type).material = modelRef.current
        .getObjectByName(type)
        .material.clone();

      gsap.to(modelRef.current.getObjectByName(type).material.color, {
        r: new THREE.Color(color).r,
        g: new THREE.Color(color).g,
        b: new THREE.Color(color).b,
        duration: 0.3,
      });
    }
  });
}

export const blinkAnimation = (type, modelRef) => {
  if (!modelRef.current.getObjectByName(type)) {
    console.log(type);
  }
  modelRef.current.getObjectByName(type).material = modelRef.current
    .getObjectByName(type)
    .material.clone();
  var mesh = modelRef.current.getObjectByName(type);

  if (!mesh) {
    return;
  }

  // create a GSAP animation for the color transition
  var colorTween = gsap.to(mesh.material, {
    envMapIntensity: 20,
    duration: 0.5,
    onComplete: function () {
      // create another GSAP animation to transition back to the old color
      var oldColorTween = gsap.to(mesh.material, {
        envMapIntensity: 3,
        duration: 0.5,
      });
      oldColorTween.play();
    },
  });

  colorTween.play();
};
