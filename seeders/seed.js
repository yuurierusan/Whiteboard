const { sequelize } = require('sequelize')
const { User, Course, Student, StudentCourse } = require('../models')

const userData = [
    {
        email: 'admin@whiteboard.com',
        passwordDigest: 'admin',
    },
]

const getRandomGrade = () => {
    return Math.floor(Math.random() * (100 - 50 + 1) + 50)
}

const courseData = [
    {
        name: 'Mathematics',
        studentId: 1,
        grade: getRandomGrade(),
    },
    {
        name: 'English',
        studentId: 2,
        grade: getRandomGrade(),
    },
    {
        name: 'Science',
        studentId: 3,
        grade: getRandomGrade(),
    },
    {
        name: 'History',
        studentId: 4,
        grade: getRandomGrade(),
    },
    {
        name: 'Art',
        studentId: 5,
        grade: getRandomGrade(),
    },
    {
        name: 'Physics',
        studentId: 6,
        grade: getRandomGrade(),
    },
    {
        name: 'Chemistry',
        studentId: 7,
        grade: getRandomGrade(),
    },
    {
        name: 'Biology',
        studentId: 8,
        grade: getRandomGrade(),
    },
    {
        name: 'Geography',
        studentId: 9,
        grade: getRandomGrade(),
    },
    {
        name: 'Computer Science',
        studentId: 10,
        grade: getRandomGrade(),
    },
]

const studentData = [
    {
        name: 'John Smith',
        email: 'john.smith@example.com',
    },
    {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
    },
    {
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
    },
    {
        name: 'Samantha Lee',
        email: 'samantha.lee@example.com',
    },
    {
        name: 'Michael Chen',
        email: 'michael.chen@example.com',
    },
    {
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
    },
    {
        name: 'David Wilson',
        email: 'david.wilson@example.com',
    },
    {
        name: 'Stephanie Rodriguez',
        email: 'stephanie.rodriguez@example.com',
    },
    {
        name: 'Daniel Kim',
        email: 'daniel.kim@example.com',
    },
    {
        name: 'Avery Jones',
        email: 'avery.jones@example.com',
    },
][
    ({
        studentId: 1,
        courseId: 2,
        grade: 85,
    },
    {
        studentId: 2,
        courseId: 1,
        grade: 90,
    },
    {
        studentId: 3,
        courseId: 3,
        grade: 75,
    },
    {
        studentId: 4,
        courseId: 2,
        grade: 92,
    },
    {
        studentId: 5,
        courseId: 1,
        grade: 80,
    },
    {
        studentId: 6,
        courseId: 3,
        grade: 88,
    },
    {
        studentId: 7,
        courseId: 1,
        grade: 78,
    },
    {
        studentId: 8,
        courseId: 2,
        grade: 93,
    },
    {
        studentId: 9,
        courseId: 3,
        grade: 70,
    },
    {
        studentId: 10,
        courseId: 1,
        grade: 95,
    })
]

sequelize.transaction(async (t) => {
    try {
        // Insert data into the grades table
        await Grade.bulkCreate(userData, { transaction: t })

        console.log('User seed data inserted successfully')
    } catch (error) {
        console.log('Error inserting user seed data!', error)
    }
})

sequelize.transaction(async (t) => {
    try {
        // Insert data into the courses table
        await Course.bulkCreate(courseData, { transaction: t })

        console.log('Course seed data inserted successfully!')
    } catch (error) {
        console.log('Error inserting course seed data!', error)
    }
})

sequelize.transaction(async (t) => {
    try {
        // Insert data into the students table
        await Student.bulkCreate(studentData, { transaction: t })

        console.log('Student seed data inserted successfully!')
    } catch (e) {
        console.log('Error inserting student seed data!', e)
    }
})

sequelize.transaction(async (t) => {
    try {
        // Insert data into the grades table
        await Grade.bulkCreate(studentCourse, { transaction: t })

        console.log('Student course seed data inserted successfully!')
    } catch (e) {
        console.log('Error inserting student course seed seed data!', e)
    }
})
