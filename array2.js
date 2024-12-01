const student = [
  {"name": "Alice", "score": 63},
  {"name": "Bob", "score": 80}
];


const totalScore = student.reduce((sum, student) => sum + student.score, 0);

const averageScore = totalScore / student.length;

console.log("ผลรวมคะแนนทั้งหมด:", totalScore);
console.log("ค่าเฉลี่ยของคะแนน:", averageScore);