<template>
    <div class="greaterdiv">
        <div class="search">
            <form @submit.prevent="getSearchResults">
                <input
                    @input="handleChange"
                    type="text"
                    :value="searchQuery"
                    placeholder="Search Students" />
                <button type="submit">Search</button>
            </form>
            <h2>Search Results</h2>
            <section class="search-results container-grid">
                <div
                    class="student-card"
                    v-for="student in students"
                    :key="student.id"
                    ><h2>{{ student.name }}</h2>
                    <p>{{ student.gpa }}</p>
                    <h3 class="coursetext">Courses:</h3>
                    <h3 v-for="course in student.courses" :key="course.id"
                        >{{ course.name }}
                    </h3>
                </div>
            </section>
        </div>
        <div v-if="!searched" class="show--hide">
            <h1 class="course-text">Courses:</h1>
            <div
                class="courses-card"
                v-for="course in courses"
                :key="course.id">
                <CourseCard :course="course" @click="selectCourse(course.id)" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CourseCard from '@/components/CourseCard.vue'

export default {
    name: 'CoursesPage',
    components: { CourseCard },
    data: () => ({
        courses: [],
        searchQuery: [],
        searched: false,
    }),
    mounted: function () {
        this.getAllCourses()
    },
    methods: {
        async getAllCourses() {
            const res = await axios.get('http://localhost:3001/api/courses/all')
            console.log(res.data)
            this.courses = res.data
        },
        async selectCourse(id) {
            this.$router.push(`/${id}`)
        },
        async getStudentsFromCourses() {},
    },
}
</script>

<style>
    .courses-card {
        cursor: pointer;
    }
    .course-text {
    color: yellow;
    }
</style>