import AutoSumoImage from "./assets/autosumo.png";
import ValorantAPIDocsImage from "./assets/valorant-api-docs.png";
import MobileRoboticsLabTelemetryImage from "./assets/mobile-robotics-lab-telemetry.png";
import ChillImage from "./assets/chill.png";
import DiscordImpersonatorImage from "./assets/discord-impersonator.png";
import KattisImage from "./assets/kattis.png";

export interface Project {
    repository: string
    url?: string
    name: string
    description: string
    picture?: ImageMetadata
}

export const projects: Project[] = [
    {
        repository: 'https://github.com/AutoSumo',
        name: 'AutoSumo',
        description: 'Custom, open-source robotics platform enabling remote programming, automated arena tracking, and more. Robot is 3D-printed and uses inexpensive hardware.',
        picture: AutoSumoImage
    },
    {
        repository: 'https://github.com/techchrism/valorant-api-docs',
        url: 'https://valapidocs.techchrism.me/',
        name: 'Valorant API Docs',
        description: 'Automatically-generated documentation for the internal Valorant API. Includes an Insomnia workspace that integrates with a plugin to bring game values into placeholders.',
        picture: ValorantAPIDocsImage
    },
    {
        repository: 'https://github.com/techchrism/mobile-robotics-lab-web',
        name: 'Mobile Robotics Lab Telemetry',
        description: 'A remote telemetry solution for a mobile robotics lab. Connects to the robot using websockets and displays position and sensor data in real-time. Has the ability to save and replay data.',
        picture: MobileRoboticsLabTelemetryImage
    },
    {
        repository: 'https://github.com/techchrism/chill',
        name: 'Chill',
        description: 'Relaxing webapp integrating digital art, music, and ambient sound effects.',
        picture: ChillImage
    },
    {
        repository: 'https://github.com/techchrism/discord-impersonator',
        name: 'Discord Impersonator',
        description: 'A GPT-2 chatbot trained using the messages of a discord user.',
        picture: DiscordImpersonatorImage
    },
    {
        repository: 'https://github.com/techchrism/kattis-solutions',
        name: 'Kattis Solutions',
        description: 'My solutions to over 250 competitive programming problems from Kattis.',
        picture: KattisImage
    }
]