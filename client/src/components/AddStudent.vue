<template>
    <div class="addstudent">
        <h1>Add a Student</h1>
        <div class="studentform">
            <form v-on:submit.prevent="createStudent">
                <div>
                    <label for="name">Name:</label>
                    <input
                        @input="handleChange"
                        v-model="name"
                        name="name"
                        type="text" 
                        placeholder="Student Name"/>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input
                        @input="handleChange"
                        v-model="email"
                        email="email"
                        type="email"
                        placeholder="Student Email"
                        />
                </div>
                <button class="add" type="submit">Add Student</button>
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
        email: '',
    }),
    methods: {
        async createStudent() {
            const newStudent = {
                name: this.name,
                email: this.email,
            }
            try {
                const response = await axios.post(
                    'http://localhost:3001/api/students/create',
                    newStudent
                )
                this.$router.push(`/students`)
                console.log(response.data)
                this.$router.push('/students')
            } catch (error) {
                console.log(error)
            }
        },
        handleChange(event) {
            this[event.target.name] = event.target.value
        },
        handleSubmit() {
            this.name = ''
            this.email = ''
        },
    },
}
</script>

<style>
.addstudent {
    color: yellow;
}

</style>
