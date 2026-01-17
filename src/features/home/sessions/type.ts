export type Session = {
  id: string;
  date: string;
  time: string;
  title: string;
  description: string;
  type: 'upcoming' | 'previous';
}