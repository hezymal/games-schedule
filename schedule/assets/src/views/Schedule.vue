<template>
    <div class="Schedule">
        <Calendar />
    </div>
</template>

<script>
import Calendar from "@/components/Calendar.vue";

export default {
    name: "Schedule",
    components: {
        Calendar
    }
};
</script>

<style scoped lang="scss">
.Schedule {}
</style>
