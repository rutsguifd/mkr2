<template>
    <div class="card">
        <div>Start Point: {{trip.tripStart}}</div>
        <div>End Point: {{trip.tripEnd}}</div>

    </div>
</template>

<script>
    export default {
        name: "TripCard",
        props: ["trip"]
    }
</script>

<style lang="scss" scoped>
.card{
    margin: 10px 20px;
    border: 3px dashed pink;
}
</style>