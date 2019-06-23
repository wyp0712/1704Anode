const APIS = {
    STUDENTS: '/api/students', // 根据班级ID获取学生信息
    COURSES: '/api/courses', // 根据学生的ID获取所学的课程 
    EVALUATION: '/api/evaluation/' // 根据学生的ID获取总分
};

function fetchData(api) {
    return new Promise(resolve => {
        let data = null;
        switch (api) {
            case APIS.STUDENTS:
                data = [{
                    id: 1,
                    name: 'John',
                    classroomId: 75
                }, {
                    id: 1,
                    name: 'Tom',
                    classroomId: 75
                }, {
                    id: 1,
                    name: 'Lucy',
                    classroomId: 70
                }];
                break;
            case APIS.COURSES:
                data = [{
                    id: 'history',
                    studentId: 1
                }, {
                    id: 'algebra',
                    studentId: 1
                }];
                break;
            case APIS.EVALUATION:
                data = {
                    id: '200',
                    score: 50,
                    totalScore: 180
                };
                break;
        }
        resolve(data);
    });
}

async function count(cId) {
    let studentData = await fetchData(APIS.STUDENTS);
    studentData = studentData.filter(item => item.classroomId === cId); // 根据班级ID获取学生信息
    // 计算平均分 = 总分 / 课程数量
    console.log(studentData, 'studentData')
    let total = await fetchData(APIS.EVALUATION); //总分 {totalScore}
    let courses = await fetchData(APIS.COURSES); //课程 [].length

    let average = total.totalScore / courses.length;
    
    return studentData.map(item => {
        return {
            "id": item.id,
            "name": item.name,
            "average": average
        }
    });
}

count(75).then(res => {
    console.log(res)
})













































// async function count(classroomId) {
//     let students = await fetchData('/api/students');
//     let courses = await fetchData('/api/courses');
//     let studentId = students.find(item => item.classroomId === classroomId).id;
//     let coursesLength = courses.filter(item => item.studentId === studentId).length;
//     let evaluation = await fetchData('/api/evaluation/algebra')
//     return students.map(item => ({
//         id: studentId,
//         name: item.name,
//         average: (evaluation.totalScore / coursesLength).toFixed(2)
//     }))
// }

// count(75).then(res => {
//     console.log(res);
// })