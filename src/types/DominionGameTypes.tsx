export type DominionPlayerFullName = string;
export type DominionPlayerShortName = string;
export type DominionCard = [string, number]

export type DominionPlayerResultsList = DominionPlayerResults[]

export type ISO_String = string

export interface DominionPlayerResults {
    fullName: DominionPlayerFullName;
    shortName: DominionPlayerShortName;
    deck: DominionDeck;
    score?: number;
    turns?: number;
    date?: ISO_String;
    gameNumber: string;
    gameDuration?: number; // in milliseconds -- lol
}

export interface DominionPlayerResultsSafe {
    fullName: DominionPlayerFullName;
    shortName: DominionPlayerShortName;
    deck: DominionDeck;
    score: number;
    turns: number;
    date: ISO_String;
    gameNumber: string;
}

export interface DominionDeck {
    dataType: string;
    value: DominionCard[]
}

export interface DominionPlayerStats {
    name: DominionPlayerFullName
    wins: number
    games: number
    points: number
    averageWins: string
    averagePoints: string
    standardDeviation: string
    DominionWorldScore: number
}