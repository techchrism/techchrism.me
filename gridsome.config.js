// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'techchrism.me',
    siteDescription: 'Chris\'s Personal Website',
    siteUrl: 'https://techchrism.me',
    chainWebpack: config =>
    {
        config.resolve.alias.set('@projects', '@/assets/projects')
    },
    plugins: [
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                purgeConfig: {
                    content: [
                        './src/**/*.vue',
                        './src/**/*.js',
                        './src/**/*.jsx',
                        './src/**/*.html',
                        './src/**/*.pug',
                        './src/**/*.md',
                        './docs/**/*.md',
                        './blog/**/*.md'
                    ],
                    whitelist: [
                        'body',
                        'html',
                        'img',
                        'a',
                        'g-image',
                        'g-image--lazy',
                        'g-image--loaded',
                        'active'
                    ],
                    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
                }
            }
        }
    ],
    templates: {
    
    },
    transformers: {
    
    }
};
