<template>
    <div class="container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
        <h2 class="font-bold mb-6" id="projects">A few of my favorite projects:</h2>
        <ul class="text-lg sm:text-xl space-y-6 mb-8">
            <li v-for="project of $static.projects.edges" :key="project.node.name" class="flex">
                <div class="project-image mr-4 mt-2 inline-block">
                    <g-image
                        v-if="project.node.image"
                        :alt="project.node.name"
                        class="project-image rounded-full text-white shadow-solid "
                        :src="project.node.image"
                    />
                </div>

                <div class="flex-1">
                    <div>
                        <span class="font-bold">{{project.node.name}}</span>
                        <a v-if="project.node.url" class="inline-block font-normal text-lg ml-4" :href="project.node.url">
                            <font-awesome icon="link"/>
                            URL
                        </a>
                        <a v-if="project.node.source" class="inline-block font-normal text-lg ml-4" :href="project.node.source">
                            <font-awesome :icon="['fab', 'github']"/>
                            Source
                        </a>
                    </div>
                    <p class="text-lg">
                        {{project.node.description}}
                    </p>
                </div>
            </li>
        </ul>
        <p>
            My other projects can be found on <a href="https://github.com/techchrism?tab=repositories">my repository list</a>
        </p>
    </div>
</template>

<static-query>
query {
    projects: allProject {
        edges {
            node {
                name
                description
                url
                source
                image (width: 64)
            }
        }
    }
}
</static-query>

<script>
    export default {
        name: 'Projects',
        data: () => ({
        })
    };
</script>

<style scoped>
    .project-image
    {
        height: 4rem;
        width: 4rem;
    }
</style>
