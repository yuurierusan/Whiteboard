<template>

<div>
  <h3 v-for="course in courses" :key="course.id"> {{ course.name }} : {{ course.StudentCourse.grade }}  </h3>
  <h4></h4>
</div>

</template>

<script>


export default {
  name: 'StudentGPA',
  props: {
    courses: {}
  },
  data: () => ({
    grade: null
  }),
  mounted: function() {
this.gradeMap()
  },
  methods: {
   async gradeMap () {
      this.courses.map((course) => {
       this.grade = course.StudentCourse.grade
      })
      
      
      
    },
 
    
   },
   
    }

  
</script>