const student_name = document.getElementById('student_name');
const assign1 = document.getElementById('assign1');
const assign2 = document.getElementById('assign2');
const cat = document.getElementById('cat');
const exam = document.getElementById('final_exam');

const submit = document.getElementById('submit');

// const assign1Value = parseInt(assign1.value);
// const assign2Value = parseInt(assign2.value);
// const catValue = parseInt(cat.value);
// const examValue = parseInt(exam.value);

var student = {}
var students_data = []


submit.addEventListener('click', () => {
    event.preventDefault();

    const assign1Value = parseInt(assign1.value);
    const assign2Value = parseInt(assign2.value);
    const catValue = parseInt(cat.value);
    const examValue = parseInt(exam.value);
    
    if (assign1Value > 10 || assign1Value < 0 || assign2Value > 10 || assign2Value < 0 || catValue > 30 || catValue < 0 || examValue > 50 || examValue < 0 || student_name.value === '') {
        alert('Assignments should be between 0 and 10, CAT should be between 0 and 30, Exam should be between 0 and 50, and Student Name should not be empty');
        return;
    }
    else {
        student = {
            name: student_name.value,
            assign1Value: parseInt(assign1.value),
            assign2Value: parseInt(assign2.value),
            catValue: parseInt(cat.value),
            examValue: parseInt(exam.value),
            totalScore: assign1Value + assign2Value + catValue + examValue
        }
        students_data.push(student);
        console.log(student);
        console.log(students_data);
    }

    alert(`Total marks: ${assign1Value + assign2Value + catValue + examValue}`);
    alert(student.assign1);
    // Rest of your code here
});

console.log(students_data)
