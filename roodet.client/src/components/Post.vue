<template>
    <div class="component">
        {{ post.title }}

    </div>
</template>


<script>
import { Post } from '../models/Post';

export default {
    props: {
        post: { type: Post, required: true }
    },
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped></style>