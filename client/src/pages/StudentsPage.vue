<template>
    <div class="greaterdiv">

        <div class="student-card" v-for="student in students" :key="student.id"><h2>{{ student.name }}</h2>
            <p>{{ student.email }}</p>
            <h3 class="coursetext">Courses:</h3>
            <h3 v-for="course in student.courses" :key="course.id">{{ course.name }} : {{ course.StudentCourse.grade }} </h3>
            
        </div>
    </div>
    </template>

<script>
import axios from 'axios'


export default {
    name: 'StudentPage',
    data: () => ({
        students: [],

    }) ,
    mounted: function() {
    this.getAllStudents()
    },
    methods: {
        async getAllStudents() {
            const response = await axios.get('http://localhost:3001/api/students/all')
            console.log(response.data)
            this.students = response.data
        },
        
    }
    
}

</script>

<style>
.coursetext {
    color: yellow;
}
.student-card {
    border: .5vw;
    border-color: yellow;
    border-style: solid;
    width: 267.06px;
    justify-content: center;
   
    
}
.greaterdiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
}
</style>
