import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Container } from 'react-bootstrap';
import { GameSelector } from '~/component/GameSelector';
import type { Game } from '~/data/games.data';
import { getGames } from '~/data/games.data';

type LoaderDataResponse = {
  games: Game[]
}

export default function Index() {
  const { games } = useLoaderData() as LoaderDataResponse
  return (
    <Container>
      <GameSelector games={games} />
    </Container>
  );
}

export const loader: LoaderFunction = async () => {

  const games = await getGames()

  return {
    games
  }
}
