function transformarATipos(arr) {
    return arr.map(elemento => typeof elemento);
  }
  
  // Ejemplo
  console.log(transformarATipos([1, "casa", {}])); // Imprime ["number", "string", "object"]
  console.log(transformarATipos([function(){}, true])); // Imprime ["function", "boolean"]
  