export type DominionPlayerFullName = string;
export type DominionPlayerShortName = string;
export type DominionCard = [string, number]

export type DominionPlayerResultsList = DominionPlayerResults[]

export interface DominionPlayerResults {
    fullName: DominionPlayerFullName;
    shortName: DominionPlayerShortName;
    deck: DominionDeck;
    score?: number;
    turns?: number;
}

export interface DominionDeck {
    dataType: string;
    value: DominionCard[]
}