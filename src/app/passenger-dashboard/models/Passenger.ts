export interface Passenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number | null
    // checkInDate?: number  <-optional property
    baggage: string
}