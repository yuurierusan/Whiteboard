<template>
    <div class="coursedetails">
        <h2 class="course-name">{{ courseDetails.name }}</h2>
        <h3>Students</h3>
        <div class="coursestudents" v-for="student in students" :key="student.id">
            <h5>
                Name: {{ student.name }} |
                Grade: {{ student.StudentCourse.grade }}
            </h5>
        </div>
        <div>
            <button class="back" @click="back">Back</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'CourseDetails',
        components: {},
        data: () => ({
            students: [],
            courseDetails: {}
        }),
        mounted() {
            this.getCourseDetailsById()
        },
        methods: {
            async getCourseDetailsById() {
                const response = await axios.get(`http://localhost:3001/api/courses/${this.$route.params.id}`)
                console.log(response.data.students)
                this.courseDetails = response.data
                this.students = response.data.students
            },
            back() {
                this.$router.push('/courses')
      }
        }
    }
</script>
