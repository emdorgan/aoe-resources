export const fetchTournamentByTier = async (tier : string | undefined) => {
    if(!tier) {
        throw new Error('invalid URL')
    }
    const response = await fetch(tier, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}