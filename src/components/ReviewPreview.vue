<template>
<li>
    <p>name: {{review.byUser}}</P>
    <p>at: {{review.createdAt}}</P>
    <p>comment: {{review.description}}</P>
 </li>
</template>

<script>
export default {
   name: 'ReviewPreview',
    props: ['review'],
}
</script>

<style>

</style>