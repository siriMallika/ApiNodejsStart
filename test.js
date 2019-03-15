console.log('Hello HHH');

const name=0.2;

let me ={
    'firstname':'Mallika',
    'lastname':'Siri',
    'gender': 'Female',
    'mobile' : 987855678
}
console.log(me);

var students=[
    {firstName: 'A',lastName:'B'},
    {firstName: 'A',lastName:'N'}
];

var ids = [1,2,3,true,'Hello'];
ids.push('Nodejs');
ids[100]=99;

for (let i=0;i<ids.length;i++){
    console.log(ids[i]);
}
ids.forEach(a => console.log(a));

//ชื่อฟังก์ชันต้องไม่ขึ้นต้นด้วยตัวเลข
function sum(nums){
    let total =0 ;
    nums.forEach(a=> total+=a);
    return total;
}
let numbers=[1,2,3,4];
console.log(sum(numbers))