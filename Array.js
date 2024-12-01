function microwave(food, time) {
  return new Promise((resolve, reject) => {
      if (time === undefined || time < 1) {
          reject("Error: Invalid cooking time");
      } else {
          console.log(`We're microwaving ${food}`);
          console.log(`Start cooking ${time} seconds`);
          let countdown = time;
          const timer = setInterval(() => {
              console.log(countdown);
              countdown--;
              if (countdown === 0) {
                  clearInterval(timer);
                  console.log("Done!");
                  resolve(`We've got food Cooked ${food}`);
              }
          }, 1000);
      }
  });
}

async function cookFood(PIZZA, time) {
  try {
      const result = await microwave(PIZZA, time);
      console.log(result);
  } catch (error) {
      console.log(error);
  }
}


cookFood("Meat", 3);

// function Microwave(item, time) {
//   return new Promise((resolve, reject) => {
//     if (!time || time < 1) {
//       reject(new Error("Invalid time parameter")); 
//     } else {
//       console.log(`Microwaving ${item} for ${time} seconds...`);
//       let countdown = time;
//       let interval = setInterval(() => {
//         console.log(countdown);
//         countdown--;
//         if (countdown <= 0) {
//           clearInterval(interval);
//           resolve(`Cooked ${item}`);
//         }
//       }, 1000);
//     }
//   });
// }
// async function cookFood(){
//   try{
//     console.log("we'are microwaving food")
//     const result = await Microwave("Pizza,5")
//     console.log(`We've got food ${result}`)
//   } catch(error) {
//     console.log(`Error ${error}`)
//   }
// }
// cookFood()
// Microwave("Pizza", 5)
//   .then(result => console.log(result))
//   .catch(error => console.error(error));
 




// function microwave(food, timeInSeconds) {
//   return new Promise((resolve, reject) => {
//     if (timeInSeconds === undefined || timeInSeconds < 1) {
//       reject("Invalid time provided. Please specify a valid time (>= 5 second).");
//     } else {
//       console.log(`Microwaving ${food} for ${timeInSeconds} seconds...`);
//       setTimeout(() => {
//         resolve(`Cooked ${food}`);
//       }, timeInSeconds * 5000); 
//     }
//   });
// }


// microwave("Pizza", )
//   .then(result => {
//     console.log(result); 
//   })
//   .catch(error => {
//     console.error("Error:", error); 
//   });


// Promise Error...
// microwave ("Meat") ;
// Promise Error...
// let timerId = setInterval(function, millisecond);
// clearInterval (timerId) ;
// setTimeout(function, millisecond);
// let timerId = setInterval( () => console.1og("Hello") , 1000);
// setTimeout(() => clearInterval(timerId), 5000 );

// function testPromise() {
//   return new Promise( (resolve,reject) => {
//     const value = math .random()
//     value >= 0.5 ? resolve(value) : reject(value)
//   })
// }
// async function doPromise() {
//   try {
//     const Result = await testPromise()
//     console.log(`Success with result: ${Result}`)
//   } catch(error) {
//     console.log(`Failed with result: ${Result}`)
//   }
// }
// doPromise()



// const Obj1 = {Name:"John",age: 25};
// const Obj2 = {hasCar:true};

// const objectmerge = (o1,o2) => {
//   return {...o1,...o2};
// };
// console.log(objectmerge(Obj1,Obj2))


// let students = [
//   { id: 1, name: "Alice", score: 63 },
//   { id: 2, name: "Bob", score: 80 }
// ];

// function createDropdownData(studentArray) {
//   return studentArray.map(student => ({
//     key: student.id,
//     value: student.id,
//     text: `${student.name} (${student.score})`
//   }));
// }

// let dropdownData = createDropdownData(students);
// console.log(dropdownData);








// let arr = ['Ed','Shareen','singer',]
// let[firstname,,occupation] = arr;
// console.log(firstname);
// console.log(occupation)

//Destructuring for object
// let student = {
//   FristName : " Johny",
//   lastName: "Smith",
//   grade:3.5

// };
// let{FristName,lastName,grade} = student;
// console.log(`FristName :${FristName} lastName :${lastName} grade:${grade}`);






//let scores = [80, 90, 70, 85, 65, 75, 95, 60, 85, 90];

// function countGrades(scoreArray) {
//   let grades = scoreArray.map(score => {
//     if (score >= 80) return 'A';
//     if (score >= 70) return 'B';
//     if (score >= 60) return 'C';
//     if (score >= 50) return 'D';
//     return 'F';
//   });

// let gradeCount = grades.reduce((acc, grade) => {
//   acc[grade] = (acc[grade] || 0) + 1;
//   return acc;
// }, { A: 0, B: 0, C: 0, D: 0, F: 0 });

// return gradeCount;
// }

// function calculateAverage(scoreArray) {
// let totalScore = scoreArray.reduce((acc, score) => acc + score, 0);

// return totalScore / scoreArray.length;
// }

// let gradeCount = countGrades(scores);
// let averageScore = calculateAverage(scores);

// console.log(gradeCount);
// console.log("Average Score:", averageScore);

// const scores = [60,82,20,98,39]

// const Result = score.reduce((grades, score) => {
//   if(score >= 80) {grades['A']++ }
//   else if(score >= 70) {grades['B']++ }
//   else if(score >= 60) {grades['C']++ }
//   else if(score >= 50) {grades['D']++ }
//   else {grades['F']++ }
//   return grades
// }, {'A':0,'B':0,'C':0,'D':0,'F':0})

// console.log(Result)

// const  numbers = '["1","2","3"]'
// console.log(JSON.parse(numbers));

