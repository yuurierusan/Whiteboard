<template>
  <div class="addstudent">
    <h1>Add a Student</h1>
    <div class="studentform">
      <form @submit.prevent="addStudent">
        <div>
          <label for="name">Name:</label>
          <input id="name" type="text" v-model="name" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" type="email" v-model="email" />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'AddStudent',
    data: () => ({
      name: '',
      email: ''
    }),
    methods: {
      async createStudent() {
        const newStudent = {
          name: this.name,
          email: this.email
        };
        try {
          const response = await axios.post('http://localhost:3001/api/students/create', newStudent)
          console.log(response.data)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>

<style>
  .addstudent {
    color: yellow;
  }
</style>
