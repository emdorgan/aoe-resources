import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useQuery } from "@tanstack/react-query";
import { fetchTournamentByTier } from "../queries/get-tournament";
import { useCallback } from "react";
import { Tournament } from "../types/tournament-types";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './../react-big-calendar.css';

const createDateRange = (dateRange: string): {start: moment.Moment, end: moment.Moment} => {
    const dates = dateRange.split(" - ");
    const startDate = moment(dates[0], "MMM D, YYYY");
    const endDate = moment(dates[1], "MMM D, YYYY");
    return {start: startDate, end: endDate};
 }

const sTierTournamentUrl = process.env.REACT_APP_S_TIER_URL;
const localizer = momentLocalizer(moment);

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

    console.log(tournamentList);

    const tournamentEvents = tournamentList.map(tournament => {
        const dateRange = createDateRange(tournament.date.text)
        return {title: tournament.tournament.text, start: dateRange.start.format("MMMM D, YYYY"), end: dateRange.start.format("MMMM D, YYYY")}
    })

    console.log(tournamentEvents)

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography>Home Page</Typography>
                    <Calendar
                        localizer={localizer}
                        events={tournamentEvents}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                    />  
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;