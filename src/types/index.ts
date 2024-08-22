export type Country = {
  name: string;
  code: string;
  latitude: number;
  longitude: number;
}

export type GetCountries = {
  countries: Country[];
}
