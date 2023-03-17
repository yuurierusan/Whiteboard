<template>
  <div class="addstudent">
    <h1>Add a Student</h1>
    <div class="studentform">
      <form v-on:submit.prevent="createStudent">
        <div>
          <label for="name">Name:</label>
          <input @input="handleChange" v-model="name" name="name" type="name" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input @input="handleChange" v-model="email" email="email" type="email" />
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
        let newStudent = {
          name: this.name,
          email: this.email
        } 
          const response = await axios.post('http://localhost:3001/api/students/create', newStudent)
          console.log(response.data)
          this.$router.push(`/students`)
      },
      handleChange(event) {
            this[event.target.name] = event.target.value
           
        },
      async handleSubmit() {
          this.name = ''
          this.email = ''
          
          
      },
    }
  }
</script>

<style>
  .addstudent {
    color: yellow;
  }
</style>
