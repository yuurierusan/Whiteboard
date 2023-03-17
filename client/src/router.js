import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage'
import CourseDetails from './pages/CourseDetails'
import StudentDetails from './pages/StudentDetails'
import CoursesPage from './pages/CoursesPage'
import StudentsPage from './pages/StudentsPage'

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'HomePage',
    },
    {
        path: '/about',
        component: AboutPage,
        name: 'AboutPage',
    },
    {
        path: '/courses',
        component: CoursesPage,
        name: 'CoursesPage',
    },
    {
        path: '/students',
        component: StudentsPage,
        name: 'StudentsPage',
    },
    {
        path: '/:id',
        component: CourseDetails,
        name: 'CourseDetails',
    },
    {
        path: '/:studentId',
        component: StudentDetails,
        name: 'StudentDetails',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
