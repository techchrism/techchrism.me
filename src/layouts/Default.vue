<template>
    <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen"
         :class="theme">
        <header class="border-t-14 border-blue-800">
            <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
                <div>
                    <g-link to="/"
                            active-class="home-link"
                            exact-active-class="home-link"
                            class="text-copy-primary uppercase tracking-wide font-bold w-full block text-xl hover:text-gray-600">
                        techchrism
                    </g-link>
                </div>
                <theme-switcher :theme="theme" @themeChanged="updateTheme"/>
            </nav>
        </header>

        <div class="flex-grow">
            <slot/>
        </div>
        <footer class="bg-blue-800 text-white">
            <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
                <div class="mb-8 lg:mb-0">
                    <div>Copyright {{ new Date().getFullYear() }}. All rights reserved.</div>
                </div>
            </div>
        </footer>
    </div>
</template>

<static-query>
    query {
    metadata {
    siteName
    }
    }
</static-query>

<script>
    import ThemeSwitcher from '../components/ThemeSwitcher';

    export default {
        components: {ThemeSwitcher},
        mounted()
        {
            this.theme = localStorage.getItem('theme') || 'theme-light';
        },
        data()
        {
            return {
                theme: ''
            };
        },
        methods:
        {
            updateTheme(theme)
            {
                this.theme = theme;
            }
        }
    };
</script>

<style src="../css/main.css"/>
