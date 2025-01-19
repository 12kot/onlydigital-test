export interface IPage {
  id: number;
  startDate: number;
  endDate: number;
  name: string;
  items: ISlide[];
}

export interface ISlide {
  date: number;
  description: string;
}
