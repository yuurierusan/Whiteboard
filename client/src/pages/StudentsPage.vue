<template>
    <div class="greaterdiv">

        <div class="student-card" v-for="student in students" :key="student.id" >
            <h2>{{ student.name }}</h2>
            <p>{{ student.email }} </p>

            <h3 class="coursetext">Courses:</h3>

            <h3 > <StudentGPA :student="student" :courses="student.courses"/> </h3>
            
        </div>
    </div>
    </template>

<script>
import axios from 'axios'
import StudentGPA from '@/components/StudentGPA.vue'

export default {
    name: 'StudentsPage',

    components: {
    StudentGPA
    },
    data: () => ({
        students: [],
        studentGPA: null
        

    }) ,
    mounted: function() {
    this.getAllStudents()
    },
    methods: {
        async getAllStudents() {
            const response = await axios.get('http://localhost:3001/api/students/all')
          

            this.students = response.data
           console.log(response.data)
        },
        async getAllTablesById () {
            const response = await axios.get(`http://localhost:3001/api/scr/${this.students}`)
            console.log(response)
        }
        
        
        
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
