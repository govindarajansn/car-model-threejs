const shoeColorConfigs = [
  {
    modelUrl: '/model/sportCar.glb',
    name: 'Car',
    id: 'nike-converse-low-top',
    src: '/images/shoes/nike-converse-low-top.jpeg',
    colorConfigs: [
      {
        colors: [
          '#22005D',
          '#F9F1DF',
          '#FF0000',
          '#008FD2',
          '#FFC000',
          '#00008B',
          '#221E1F',
        ],
        types: ['outer-body', 'outer-body-parts', 'left-door-paint', 'right-door-paint'],
        title: 'Car Body',
        show: true,
        modelPosition: {
          x: 3.5278410968518297,
          y: 1.034328461078682,
          z: 2.1886489037005443
        },
      },
      // {
      //   colors: [
      //     '#F4F6EF',
      //     '#F9F1DF',
      //     '#B50024',
      //     '#127048',
      //     '#008FD2',
      //     '#34394B',
      //     '#9A9B9D',
      //     '#44312E',
      //     '#221E1F',
      //   ],
      //   types: ['left-door-paint', 'right-door-paint'],
      //   title: 'Car Door',
      //   show: true,
      //   modelPosition: {
      //     x: 3.5278410968518297,
      //     y: 1.034328461078682,
      //     z: 2.1886489037005443
      //   },
      // },
      {
        colors: [
          '#F9F1DF',
          '#FF0000',
          '#008FD2',
          '#34394B',
          '#9A9B9D',
          '#44312E',
          '#000000',
        ],
        types: ['back-bumbper'],
        title: 'outer-line Body',
        show: true,
        modelPosition: {
          x: 2.792094620445568, y: 2.69567217362244, z: 1.3310710734699898
        },
      },
      {
        colors: ['#FF0000', '#000000', '#FFE900', '#9A9B9D'],
        types: ['seat-belt', 'gear-rest', 'gauge-color', 'Seat-holder', 'red-1', 'red-2', 'red-4', 'red-5'],
        title: 'Interior Car Body',
        show: false,
        modelPosition: {
          x: 1.948441045552817,
          y: 3.3688745925112467,
          z: 0.03381660898002415
        },
      },
      {
        colors: ['#00008B', '#000', '#22005D'],
        types: ['side-black-door'],
        title: 'Side Stripes',
        show: true,
        modelPosition: {
          x: 4.264783568063599, y: 1.1205317219655524, z: 0.5793072706007855
        },
      },
      // {
      //   colors: ['#000', '#5C4033', '#BEE2D4', '#5480A3'],
      //   types: ['left-mirror', 'right-mirror'],
      //   title: 'Rear mirror',
      //   show: false,
      //   modelPosition: {
      //     x: 1.091550198705638, y: 2.412066848266626, z: 2.5344727421319986
      //   },
      // },
      {
        colors: ['#5C4033', '#000', '#BEE2D4', '#5480A3'],
        types: ['Secondary-base'],
        title: 'Secondary-base',
        show: false,
        modelPosition: {
          x: 1.0297888674402929, y: 2.7122584585064744, z: -2.2119599177283398
        },
      },
      {
        colors: ['#624a2e', '#F9B7AB', '#BEE2D4', '#5480A3'],
        types: ['Steering-wheel'],
        title: 'Steering wheel',
        show: false,
        modelPosition: {
          x: 3.002587821439075, y: 1.749056032366268, z: -1.389404553421024
        },
      },
      {
        colors: ['#7596A4', '#F9B7AB', '#BEE2D4', '#5480A3'],
        types: ['Steering-handle'],
        title: 'Steering-handle',
        show: false,
        modelPosition: {
          x: 3.002587821439075, y: 1.749056032366268, z: -1.389404553421024
        },
      },
      {
        colors: ['#3E92CC', '#7FCDCD', '#F48FB1', '#2D728F', '#6B5B95', '#F7CAC9', '#F5F5DC'],
        types: ['Front-seats', 'right-inner-door', 'left-door-inside'],
        title: 'Front Seat',
        show: false,
        modelPosition: {
          x: -0.4354405601616895,
          y: 2.832152187505139,
          z: -0.04914204560550159,
        },
      },
      {
        colors: ['#3E92CC', '#7FCDCD', '#F48FB1', '#2D728F', '#6B5B95', '#F7CAC9', '#F5F5DC'],
        types: ['chrome'],
        title: 'symbol-color',
        show: false,
        modelPosition: {
          x: 1.2804794647833, y: 1.649099151785669, z: 3.0743785156377066
        },
      },
      {
        colors: [
          '#A569BD',
          '#F1C40F',
          '#3498DB',
          '#EC407A',
          '#2ECC71',
          '#E74C3C',
          '#1ABC9C',
          '#F39C12',
          '#1E824C',
          '#95A5A6',
        ],
        types: [
          'rim-1', 'rim-2', 'rim-3'
        ],
        title: 'Rim',
        show: true,
        modelPosition: {
          x: 4.254315223613636, y: 1.043988829818961, z: 0.7546653222255745,
        },
      },
      {
        colors: [
          '#A569BD',
          '#F1C40F',
          '#3498DB',
          '#EC407A',
          '#2ECC71',
          '#E74C3C',
          '#1ABC9C',
          '#F39C12',
          '#1E824C',
          '#95A5A6',
        ],
        types: [
          'outer-rim-1', 'outer-rim-2', 'outer-rim-3'
        ],
        title: 'Outer Rim',
        show: true,
        modelPosition: {
          x: 4.254315223613636, y: 1.043988829818961, z: 0.7546653222255745,
        },
      },
      {
        colors: [
          '#A569BD',
          '#F1C40F',
          '#3498DB',
          '#EC407A',
          '#2ECC71',
          '#E74C3C',
          '#1ABC9C',
          '#F39C12',
          '#1E824C',
          '#95A5A6',
        ],
        types: [
          'front-bumper'
        ],
        title: 'Front Bumper',
        show: true,
        modelPosition: {
          x: 1.1291325898144255, y: 1.386593584843068, z: 3.2110255382724557
        },
      },
      {
        colors: ['#3E92CC', '#7FCDCD', '#F48FB1', '#2D728F', '#6B5B95', '#F7CAC9', '#F5F5DC'],
        types: ['light-stripe'],
        title: 'Gear box + display',
        show: false,
        modelPosition: {
          x: 1.0024611270806856, y: 3.0984092213909897, z: -1.6278372890595647
        },
      },
      {
        colors: ['#3E92CC', '#7FCDCD', '#F48FB1', '#2D728F', '#6B5B95', '#F7CAC9', '#F5F5DC'],
        types: ['Object_96'],
        title: 'floor mat',
        show: false,
        modelPosition: {
          x: 2.1602019395083447, y: 3.1288215462611144, z: -1.0556548636810237
        },
      },
    ],
  }
];

export default shoeColorConfigs;
