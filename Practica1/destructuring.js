const person = {
    head: {
      eyes: '8',
      mouth: {
        teeth: '7',
        tongue: '4'
      }
    },
    body: {
      shoulders: '10',
      chest: '9',
      arms: '8.5',
      hands: '9',
      legs: '10'
    }
  };
  
  // Obtener y renombrar la propiedad 'legs'
  const myLegs = person.body.legs;
  person.body.myLegs = myLegs;
  delete person.body.legs;
  
  // Obtener y renombrar la propiedad 'eyes'
  const myEyes = person.head.eyes;
  person.head.myEyes = myEyes;
  delete person.head.eyes;
  
  // Imprimir el objeto modificado
  console.log(person);
  
  