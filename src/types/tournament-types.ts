type TextAndWikiLink ={
    text: string;
    href?: string;
};

export type Tournament = {
    date: TextAndWikiLink;
    gs: TextAndWikiLink;
    location: TextAndWikiLink;
    p: TextAndWikiLink;
    prizepool: TextAndWikiLink;
    winner: TextAndWikiLink;
    "runner-up": TextAndWikiLink;
    tier: TextAndWikiLink;
    tournament: TextAndWikiLink;
};
