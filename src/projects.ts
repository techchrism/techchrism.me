export interface Project {
    repository: string
    name: string
    description: string
    picture?: string
}

export const projects: Project[] = [
    {
        repository: 'https://github.com/techchrism/valorant-api-docs/tree/trunk/docs',
        name: 'Valorant API Docs',
        description: 'Documentation for the Valorant API'
    }
]