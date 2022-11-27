import { Link } from '@remix-run/react'
import { Dropdown } from 'react-bootstrap'
import type { Game } from '~/data/games.data'

export type GameSelectorProps = {
    games: Game[]
}

export const GameSelector = ({ games }: GameSelectorProps) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {games.map(game => (
                    <Dropdown.Item key={game.id} as={Link} to={`/game/${game.id}`}>{game.name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>

    )
}