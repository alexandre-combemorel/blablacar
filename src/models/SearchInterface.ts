export interface TripsReqParamInterface {
  from_coordinate: string
  to_coordinate: string
  from_country: string
  to_country: string
  locale: string
  start_date_local: Date
  currency: string
  next_cursor?: string
}

export interface TripsResultsInterface {
  link: string
  next_cursor: string
  search_info: {
    count: number
    full_trip_count: number
  }
  trips: TripType[]
}

export type TripType = {
  distance_in_meters: number
  duration_in_seconds: number
  link: string
  price: {
    amount: string
    currency: string
  }
  waypoints: WayPointsType[]
}

type WayPointsType = {
  date_time: string
  place: {
    address: string
    city: string
    country_code: string
    latitude: number
    longitude: number
  }
}