import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useQuery } from "@tanstack/react-query";
import { fetchTournamentByTier } from "../queries/get-tournament";
import { useCallback } from "react";
import { Tournament } from "../types/tournament-types";

const sTierTournamentUrl = process.env.REACT_APP_S_TIER_URL;

const Home = () => {
    const fetchQuery = useCallback(() => {
        return fetchTournamentByTier(sTierTournamentUrl);
      }, []);
    
    const {data, isLoading, error} = useQuery(['sTierData'], fetchQuery);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error instanceof Error) {
        return <div>Error: {error.message}</div>;
    }

    const tournamentList : Tournament[] = data;

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography>Home Page</Typography>
                    {tournamentList.map((tournament : Tournament) => <Typography>{tournament.tournament.text}</Typography>)}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;