import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage'
import CourseDetails from './pages/CourseDetails'
import StudentDetails from './pages/StudentDetails'
import CoursesPage from './pages/CoursesPage'
import StudentsPage from './pages/StudentsPage'
import AddStudent from './components/AddStudent'
import AddCourse from './components/AddCourse'

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'HomePage'
  },
  {
    path: '/about',
    component: AboutPage,
    name: 'AboutPage'
  },
  {
    path: '/courses',
    component: CoursesPage,
    name: 'CoursesPage'
  },
  {
    path: '/students',
    component: StudentsPage,
    name: 'StudentsPage'
  },
  {
    path: '/:id',
    component: CourseDetails,
    name: 'CourseDetails'
  },
  {
    path: '/:studentId',
    component: StudentDetails,
    name: 'StudentDetails'
  },
  {
    path: '/addStudent',
    component: AddStudent,
    name: 'AddStudent'
  },
  {
    path: '/addCourse',
    component: AddCourse,
    name: 'AddCourse'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
