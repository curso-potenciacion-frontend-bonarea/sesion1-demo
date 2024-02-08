interface TemporalBooking {
  id: number;
  userId: number;
  destination?: string;
  people?: number;
  price?: number;
  isConfirmed?: boolean;
}

type Booking = Required<TemporalBooking>;

declare const finishBooking: (booking: Booking) => void;
