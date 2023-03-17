<template>
  <div class="addstudent">
    <h1>Add a Student</h1>
    <div class="studentform">
      <form v-on:submit.prevent="createStudent">
        <div>
          <label for="name">Name:</label>
          <input @input="handleChange" v-model="name" name="name" type="text" />
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
          const response = await axios.post('http://localhost:3001/api/students/create')
          this.name = response.data.name
          this.email = response.data.email
      },
      handleChange(event) {
            this.name = event.target.name
            this.email = event.target.email
        },
      // async handleSubmit(name, value) {
      //     this[name] = ''
      //     this[value] = ''
      //     this.$emit('handleSubmit')
      //     this.$router.push(`/students`)
      // },
    }
  }
</script>

<style>
  .addstudent {
    color: yellow;
  }
</style>
