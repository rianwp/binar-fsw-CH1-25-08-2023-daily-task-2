// 1. contoh array
const contohArray = [1, "imam", 28, 2, "Flora", 20, 3, "Gita", 22]
// console.log(arr)

// console.log(`ini index kedua dari array arr ${arr[1]}`)

for (let i = 0; i < contohArray.length; i++) {
    // console.log(`ini index ke ${i} dari contohArray yaitu : ${contohArray[i]}`)
}

// 2. contoh mainan object 
// const contohObj = {
//     id: contohArray[0],
//     name: contohArray[1],
//     age: contohArray[2],
// }

// console.log(contohObj.name)

// gimana cara nya bikin
// 1:
// print contohObj dengan key name ambil dari index 2 contohArr
// print contohObj dengan key age ambil dari index 3 contohArr
// print contohObj dengan key id ambil dari index 1 contohArr


const contohObj = {
  id: contohArray[0],
  name: contohArray[1],
  age: contohArray[2],
}

console.log(contohObj.id)
console.log(contohObj.name)
console.log(contohObj.age)


// 3
// masukkan data object dengan arr.push (Nirwana)
// tapi hanya masukkan data yang bernama imam, hafizh, syifa (pake IF dari hafizh no 2) ke dalam array kosong
// dari array kosong yang udah di masukkan data diatas, tapi cuman print yang age nya dibawah 28 dan id nya  (loping dan if2
let data = [];

const obj1 = { name: 'Imam', age: 28, id: 1 };
const obj2 = { name: 'Hafizh', age: 20, id: 2 };
const obj4 = { name: 'Ale', age: 22, id: 3 };
const obj5 = { name: 'Dimas', age: 23, id: 4 };
const obj6 = { name: 'Adella', age: 25, id: 5 };
const obj7 = { name: 'Syifa', age: 21, id: 6 };

// arr of object
// arr = [{ name: 'Imam', age: 28, id: 1 }]

const arrayOfObject = [obj1, obj2, obj4, obj5, obj6, obj7]

for(let i = 0; i < arrayOfObject.length; i++){
  if(arrayOfObject[i].name === "Imam" || arrayOfObject[i].name === "Hafizh" || arrayOfObject[i].name === "Syifa"){
    data.push(arrayOfObject[i])
  }
}

for(let i = 0; i < data.length; i++){
  if(data[i].age < 28 && data[i].id === 2){
    console.log(data[i])
  }
}

