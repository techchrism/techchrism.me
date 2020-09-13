<template>
    <Layout>
        <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-3">
            <div class="text-4xl font-bold w-full text-center sm:text-left">
                <div class="leading-tight mb-4">Hey there! I'm Chris</div>
            </div>
        </div>

        <div class="container-inner mx-auto mb-16 text-lg sm:text-xl">
            <p class="mb-4">
                I enjoy making websites, plugins for Minecraft servers, shenanigans, Discord bots, and just about everything else!
            </p>
            <p class="mb-4">
                I'm active on Github at <a href="https://github.com/techchrism">@techchrism</a> and I sometimes go by Techdoodle.
            </p>
            <p>
                You can email me at <a href="mailto:chris@techchrism.me">chris@techchrism.me</a> or contact me on Discord at Techdoodle#2641
            </p>
        </div>

        <div class="overflow-x-hidden border-gray-200 border-b">
            <projects/>
        </div>
    </Layout>
</template>

<script>
    import Projects from '../components/Projects';
    export default {
        components: {Projects},
        metaInfo: {
            title: 'Home'
        }
    };
</script>

