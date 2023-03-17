<template>
    <div class="courses-card"
        ><h2>{{ course.name }}</h2>
        <p>{{ course.grade }}</p>
    </div>
</template>

<script>
export default {
    name: 'CourseCard',
    props: {
        course: {},
    },
    methods: {
        getCourse(id) {
            this.$emit('getCourse', id)
        },
    },
}
</script>
