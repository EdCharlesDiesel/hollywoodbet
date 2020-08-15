export interface IEvent{
    id:number,
    tournamentId
    eventName: string,
    eventNumber:number,
    eventDate: Date,
    eventEndDate?: Date,
    autoClose: boolean
}