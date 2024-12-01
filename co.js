const person ={
    name: 'bright',
    age:25
};

const CAR1 = {
    Brand: "MG",
    Licence:'WTF 1234',
    owner: 'person',
    location:{
      lat:7.951933
      Long:98.338089
    }
}
const CAR2 = {
    Brand: "BYD",
    Licence: 'BYE 1234',
    owner:'person',
    location:{
      lat:8.195595
      Long:98.297082

    }
}



console.log (`รถคันที่ 1 ทะเบียน ${CAR1.licence} 
  เจ้าของคือ ${CAR1.owner.name}
  ตำแหน่ง(${CAR1.location.lat},${CAR1.Licence})`
)
console.log (`รถคันที่ 2 ทะเบียน ${CAR2.licence}
  เจ้าของคือ ${CAR2.owner.name}
  ตำแหน่ง(${CAR2.location.lat},${CAR2.Licence})`
)
console.log(`รถทั้งสองคันอยู่ห่างกับ ${
  distanceInkmBetweenEarthCoordinates(
    CAR1.location.lat,
    CAR1.location.Long,
    CAR2.location.lat,
    CAR2.location.Long,
  )}km.`)