<template>
    <div id="feedback">
        <form class="form" id="module_feedback" @submit.prevent="submit">
            <input
                id="interface"
                class="feedback_info"
                type="range"
                name="interface"
                min="1"
                max="10"
                v-model="inter_value"
                value="5"
            />
            <input
                id="content"
                class="feedback_info"
                type="range"
                name="content"
                min="1"
                max="10"
                v-model="content_value"
                value="5"
            />
            <input
                id="design"
                class="feedback_info"
                type="range"
                name="design"
                min="1"
                max="10"
                v-model="design_value"
                value="5"
            />
            <input
                id="usability"
                class="feedback_info"
                type="range"
                name="usability"
                min="1"
                max="10"
                v-model="usability_value"
                value="5"
            />
            <input
                id="overall"
                class="feedback_info"
                type="range"
                name="overall"
                min="1"
                max="10"
                v-model="overall_value"
                value="5"
            />
            <input
                id="comment"
                class="feedback_info"
                type="text"
                name="comment"
                placeholder="Comment"
                v-model="comment"
            />

        </form>
    </div>
</template>

<script>
export default {
    name: 'feedback',
    data() {
        return {
            inter_value: 5,
            content_value: 5,
            design_value: 5,
            usability_value: 5,
            overall_value: 5,
            comment: '',
        };
    },
}
</script>