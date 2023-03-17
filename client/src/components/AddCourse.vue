<template>
  <div class="addstudent">
    <h1>Add a Course</h1>
    <div class="courseform">
      <form v-on:submit.prevent="createCourse">
        <div>
          <label for="name">Name:</label>
          <input @input="handleChange" v-model="name" name="name" type="name" placeholder="Course Name" />
        </div>
        <button class="add" type="submit">Add Course</button>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  

  export default {
    name: 'AddCourse',
    data: () => ({
      name: '',
    }),
    methods: {
      async createCourse() {
        let newCourse = {
          name: this.name,
          
        } 
          const response = await axios.post('http://localhost:3001/api/courses/create', newCourse)
          console.log(response.data)
          this.$router.push(`/courses`)
      },
      handleChange(event) {
            this[event.target.name] = event.target.value
           
        },
    }
  }
</script>

<style>
  .addstudent {
    color: yellow;
  }
</style>
