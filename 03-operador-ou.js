//exemplo 1 retorna o primeiro valor veradeiro
console.log("nome preenchido: ","Davi"||"Visitante"); // "Davi"
console.log("nome nulo: ", null||"Visitante"); // "Visitante"

//exemplo 2 comportamento com 0 e string vazia (valores falsy)
// 0 || considera 0  e "" como falsos e substitui pelo valor padrao
const pontuacao = 0;
   console.log("0 co || (troca por 10):", pontuacao || 10); // 10
 
   const apelido = "";
   console.log("String vazia com || (troca por padrao):", apelido || "Anonimo"); // "Anonimo
 
   // Exemplo 3: Comparacao direta entre || e ?? com o numero 0
   console.log("0 com || :", 0 || 10); // 10 (porque 0 e falsy)
  console.log("0 com ?? :", 0 ?? 10); // 0 (porque 0 nao e null nem undefined)
