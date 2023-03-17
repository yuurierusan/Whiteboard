<template>
    <div> </div>
</template>

<script>
export default {
    methods: {
        calculateGpa(student) {
            let totalPoints = 0
            let totalCredits = 0
            for (let i = 0; i < student.classes.length; i++) {
                const grade = student.classes[i].grade
                const credits = this.convertGradeToCredits(grade)
                totalPoints += credits * 4
                totalCredits += credits
            }
            const gpa = totalPoints / totalCredits
            return gpa.toFixed(2)
        },
        convertGradeToCredits(grade) {
            if (grade >= 90) {
                return 4
            } else if (grade >= 80) {
                return 3
            } else if (grade >= 70) {
                return 2
            } else if (grade >= 60) {
                return 1
            } else {
                return 0
            }
        },
    },
}
</script>
