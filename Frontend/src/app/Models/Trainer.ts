export interface Trainer {
  UserId: number;
  FirstName: string;
  LastName: string;
  CityOfWork: string;
  isRemoteAllowed: boolean;
  DisciplinesIds: number[];
  Rate: number;
  Bio: string;
}
