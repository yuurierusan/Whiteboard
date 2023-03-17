const students = [
  {
    id: 1,
    name: 'Valentino Puentes',
    email: 'vpuentes@gmail.com',
    createdAt: '2023-03-17T03:34:05.614Z',
    updatedAt: '2023-03-17T03:34:05.614Z',
    courses: [
      {
        id: 3,
        name: 'Geography 101',
        createdAt: '2023-03-17T03:30:41.333Z',
        updatedAt: '2023-03-17T03:30:41.333Z',
        StudentCourse: {
          grade: 87
        }
      },
      {
        id: 2,
        name: 'English 101',
        createdAt: '2023-03-17T03:29:30.969Z',
        updatedAt: '2023-03-17T03:29:30.969Z',
        StudentCourse: {
          grade: 90
        }
      },
      {
        id: 1,
        name: 'Algebra 101',
        createdAt: '2023-03-17T00:33:41.578Z',
        updatedAt: '2023-03-17T00:33:41.578Z',
        StudentCourse: {
          grade: 78
        }
      },
      {
        id: 4,
        name: 'Interplanetary Exploration 2001',
        createdAt: '2023-03-17T03:30:58.926Z',
        updatedAt: '2023-03-17T03:30:58.926Z',
        StudentCourse: {
          grade: 90
        }
      }
    ]
  },
  {
    id: 2,
    name: 'Josh Owens',
    email: 'joshy@gmail.com',
    createdAt: '2023-03-17T03:34:19.127Z',
    updatedAt: '2023-03-17T03:34:19.127Z',
    courses: [
      {
        id: 4,
        name: 'Interplanetary Exploration 2001',
        createdAt: '2023-03-17T03:30:58.926Z',
        updatedAt: '2023-03-17T03:30:58.926Z',
        StudentCourse: {
          grade: 80
        }
      },
      {
        id: 1,
        name: 'Algebra 101',
        createdAt: '2023-03-17T00:33:41.578Z',
        updatedAt: '2023-03-17T00:33:41.578Z',
        StudentCourse: {
          grade: 60
        }
      }
    ]
  },
  {
    id: 3,
    name: 'Crico Jasper',
    email: 'crico.j@gmail.com',
    createdAt: '2023-03-17T03:34:35.824Z',
    updatedAt: '2023-03-17T03:34:35.824Z',
    courses: [
      {
        id: 4,
        name: 'Interplanetary Exploration 2001',
        createdAt: '2023-03-17T03:30:58.926Z',
        updatedAt: '2023-03-17T03:30:58.926Z',
        StudentCourse: {
          grade: 80
        }
      },
      {
        id: 1,
        name: 'Algebra 101',
        createdAt: '2023-03-17T00:33:41.578Z',
        updatedAt: '2023-03-17T00:33:41.578Z',
        StudentCourse: {
          grade: 76
        }
      },
      {
        id: 3,
        name: 'Geography 101',
        createdAt: '2023-03-17T03:30:41.333Z',
        updatedAt: '2023-03-17T03:30:41.333Z',
        StudentCourse: {
          grade: 75
        }
      }
    ]
  },
  {
    id: 4,
    name: 'John Smith',
    email: 'john.smith@example.com',
    createdAt: '2023-03-17T04:36:51.381Z',
    updatedAt: '2023-03-17T04:36:51.381Z',
    courses: [
      {
        id: 2,
        name: 'English 101',
        createdAt: '2023-03-17T03:29:30.969Z',
        updatedAt: '2023-03-17T03:29:30.969Z',
        StudentCourse: {
          grade: 92
        }
      }
    ]
  },
  {
    id: 5,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    createdAt: '2023-03-17T04:36:51.381Z',
    updatedAt: '2023-03-17T04:36:51.381Z',
    courses: [
      {
        id: 1,
        name: 'Algebra 101',
        createdAt: '2023-03-17T00:33:41.578Z',
        updatedAt: '2023-03-17T00:33:41.578Z',
        StudentCourse: {
          grade: 80
        }
      }
    ]
  },
  {
    id: 6,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    createdAt: '2023-03-17T04:36:51.381Z',
    updatedAt: '2023-03-17T04:36:51.381Z',
    courses: [
      {
        id: 3,
        name: 'Geography 101',
        createdAt: '2023-03-17T03:30:41.333Z',
        updatedAt: '2023-03-17T03:30:41.333Z',
        StudentCourse: {
          grade: 88
        }
      }
    ]
  },
  {
    id: 7,
    name: 'Samantha Lee',
    email: 'samantha.lee@example.com',
    createdAt: '2023-03-17T04:36:51.381Z',
    updatedAt: '2023-03-17T04:36:51.381Z',
    courses: [
      {
        id: 1,
        name: 'Algebra 101',
        createdAt: '2023-03-17T00:33:41.578Z',
        updatedAt: '2023-03-17T00:33:41.578Z',
        StudentCourse: {
          grade: 78
        }
      },
      {
        id: 2,
        name: 'English 101',
        createdAt: '2023-03-17T03:29:30.969Z',
        updatedAt: '2023-03-17T03:29:30.969Z',
        StudentCourse: {
          grade: 78
        }
      }
    ]
  },
  {
    id: 8,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    createdAt: '2023-03-17T04:36:51.381Z',
    updatedAt: '2023-03-17T04:36:51.381Z',
    courses: [
      {
        id: 2,
        name: 'English 101',
        createdAt: '2023-03-17T03:29:30.969Z',
        updatedAt: '2023-03-17T03:29:30.969Z',
        StudentCourse: {
          grade: 93
        }
      }
    ]
  },
  {
    id: 9,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    createdAt: '2023-03-17T04:36:51.381Z',
    updatedAt: '2023-03-17T04:36:51.381Z',
    courses: [
      {
        id: 3,
        name: 'Geography 101',
        createdAt: '2023-03-17T03:30:41.333Z',
        updatedAt: '2023-03-17T03:30:41.333Z',
        StudentCourse: {
          grade: 70
        }
      }
    ]
  },
  {
    id: 10,
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    createdAt: '2023-03-17T04:36:51.381Z',
    updatedAt: '2023-03-17T04:36:51.381Z',
    courses: [
      {
        id: 1,
        name: 'Algebra 101',
        createdAt: '2023-03-17T00:33:41.578Z',
        updatedAt: '2023-03-17T00:33:41.578Z',
        StudentCourse: {
          grade: 95
        }
      },
      {
        id: 8,
        name: 'History',
        createdAt: '2023-03-17T04:36:51.374Z',
        updatedAt: '2023-03-17T04:36:51.374Z',
        StudentCourse: {
          grade: 90
        }
      },
      {
        id: 4,
        name: 'Interplanetary Exploration 2001',
        createdAt: '2023-03-17T03:30:58.926Z',
        updatedAt: '2023-03-17T03:30:58.926Z',
        StudentCourse: {
          grade: 90
        }
      }
    ]
  },
  {
    id: 11,
    name: 'Stephanie Rodriguez',
    email: 'stephanie.rodriguez@example.com',
    createdAt: '2023-03-17T04:36:51.381Z',
    updatedAt: '2023-03-17T04:36:51.381Z',
    courses: [
      {
        id: 4,
        name: 'Interplanetary Exploration 2001',
        createdAt: '2023-03-17T03:30:58.926Z',
        updatedAt: '2023-03-17T03:30:58.926Z',
        StudentCourse: {
          grade: 90
        }
      },
      {
        id: 2,
        name: 'English 101',
        createdAt: '2023-03-17T03:29:30.969Z',
        updatedAt: '2023-03-17T03:29:30.969Z',
        StudentCourse: {
          grade: 68
        }
      },
      {
        id: 7,
        name: 'Science',
        createdAt: '2023-03-17T04:36:51.374Z',
        updatedAt: '2023-03-17T04:36:51.374Z',
        StudentCourse: {
          grade: 68
        }
      }
    ]
  },
  {
    id: 17,
    name: 'Rafael',
    email: 'rafael@gmail.com',
    createdAt: '2023-03-17T07:13:51.002Z',
    updatedAt: '2023-03-17T07:13:51.002Z',
    courses: []
  },
  {
    id: 12,
    name: 'Daniel Kim',
    email: 'daniel.kim@example.com',
    createdAt: '2023-03-17T04:36:51.381Z',
    updatedAt: '2023-03-17T04:36:51.381Z',
    courses: []
  },
  {
    id: 18,
    name: 'testsss',
    email: 'testss@gmail.com',
    createdAt: '2023-03-17T07:16:11.717Z',
    updatedAt: '2023-03-17T07:16:11.717Z',
    courses: []
  },
  {
    id: 15,
    name: 'test',
    email: 'test@email.com',
    createdAt: '2023-03-17T06:55:53.334Z',
    updatedAt: '2023-03-17T06:55:53.334Z',
    courses: []
  },
  {
    id: 13,
    name: 'Avery Jones',
    email: 'avery.jones@example.com',
    createdAt: '2023-03-17T04:36:51.381Z',
    updatedAt: '2023-03-17T04:36:51.381Z',
    courses: []
  },
  {
    id: 16,
    name: '',
    email: '',
    createdAt: '2023-03-17T06:58:30.421Z',
    updatedAt: '2023-03-17T06:58:30.421Z',
    courses: []
  },
  {
    id: 14,
    name: 'Tono Lopez',
    email: 'T.L@gmail.com',
    createdAt: '2023-03-17T06:09:18.217Z',
    updatedAt: '2023-03-17T06:09:18.217Z',
    courses: []
  }
]

const getGrades = (students) => {
  students.map((student) => {
    if (student.courses.length > 0)
      return student.courses.map((course) => {
        let totalPoints = 0
        let totalCredits = 0
        for (let i = 0; i < student.courses.length; i++) {
          const grade = student.courses[i].StudentCourse.grade

          const convertGradeToCredits = (grade) => {
            if (grade >= 90) {
              return 4
            } else if (grade >= 80) {
              return 3
            } else if (grade >= 70) {
              return 2
            } else if (grade >= 60) {
              return 1
            } else {
              return 0
            }
          }
          const credits = convertGradeToCredits(grade)
          totalPoints += credits * 4

          totalCredits += credits
          const gpa = totalPoints / totalCredits
          const GPA = gpa.toFixed(2)
          console.log(totalPoints)
        }
      })
  }, {})
}
getGrades(students)
