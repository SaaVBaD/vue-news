<template>
    <div class="skeleton">
        <div class="skeleton__image"></div>
        <div class="skeleton__main">
            <div class="skeleton__title"></div>
            <div class="skeleton__text"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
@keyframes pulse {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0.6;
    }
}

@keyframes pulse2 {
    0% {
        transform: translateX(0);
        opacity: 0.3%;
    }
    50% {
        opacity: 0.6;
    }
    100% {
        transform: translateX(50rem);
        opacity: 0.3%;
    }
}

.skeleton {
    width: 1000px;
    height: 181px;
    border-radius: 10px;
    background-color: var(--white);
    position: relative;
    padding: 10px;
    display: flex;
    gap: 20px;
    animation: pulse 1.2s linear infinite alternate;
}

.skeleton__image {
    width: 343px;
    border-radius: 7px;
    background-color: var(--item-bg);
}

.skeleton__main {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.skeleton__title {
    width: 600px;
    height: 25px;
    border-radius: 5px;
    background-color: var(--item-bg);
}

.skeleton__text {
    width: 600px;
    height: 108px;
    border-radius: 5px;
    background-color: var(--item-bg);
}
</style>