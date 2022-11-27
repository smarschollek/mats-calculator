import Pocketbase from 'pocketbase'

const client = new Pocketbase(process.env.API_ENDPOINT)

export type Game = {
    id: string
    name: string
}

export const getGames = async () => {
    return await client.collection('games').getFullList<Game>()
}