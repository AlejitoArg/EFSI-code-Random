//dado un array multiplicar todos sus valores por el anterior menos el siguiente, sin modificar el array original

const data = [2, 3, 5, 12, 54, 5, -1, 0, 4, 23, 66, 7];
let newArray = [];

for(let i=1;i<data.length-1;i++){
    newArray.push((data[i]*(data[i-1]))-(data[i+1]));
}
console.log("DATA ARRAY: " + data);
console.log("NUEVO ARRAY:" + newArray)