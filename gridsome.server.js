// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api, options)
{
    api.loadSource(actions =>
    {
        const projects = actions.addCollection('Project');
        projects.addNode({
            name: 'Firefox Password Decrypt',
            source: 'https://github.com/techchrism/firefox-password-decrypt',
            description: 'Powershell script to reflectively load Mozilla\'s nss3 dll and use it to decrypt Firefox passwords without writing to disk'
        });
        projects.addNode({
            name: 'Discord Impersonator',
            source: 'https://github.com/techchrism/discord-impersonator',
            description: 'Discord bot that uses GPT-2 AI to interactively "impersonate" members of a Discord server based on their typing patterns'
        });
        projects.addNode({
            name: 'Gravity Gun',
            source: 'https://github.com/techchrism/gravity-gun',
            description: 'Plugin for Minecraft servers to add a Gravity Gun to the game'
        });
        projects.addNode({
            name: 'Comet',
            source: 'https://github.com/techchrism/comet',
            description: 'Command-line text editor in C++ with fancy animations and mouse interactions',
            image: require.resolve('./src/assets/projects/comet.png')
        });
        projects.addNode({
            name: 'URL Lengthener',
            source: 'https://github.com/techchrism/url-lengthener',
            url: 'https://techchrism.github.io/url-lengthener/',
            description: 'Webapp that encodes a url into its own hash and can decode and redirect all client-side (meant as a joke)',
            image: require.resolve('./src/assets/projects/url-lengthener.png')
        });
        projects.addNode({
            name: 'Chill',
            source: 'https://github.com/techchrism/chill',
            url: 'https://techchrism.github.io/chill/',
            description: 'Relaxing website with animations, music, and sound effects',
            image: require.resolve('./src/assets/projects/chill.png')
        });
    });
};
