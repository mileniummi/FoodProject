export interface IOffer {
  img: string;
  stars: number;
  name: string;
  author: string;
  locationName: string;
  price: number;
  reserved: boolean;
  currentParticipants: number;
  totalParticipants: number;
}
