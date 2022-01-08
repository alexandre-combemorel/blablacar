export interface TripResultInterface {
  car: {
    category: string
    color: string
    color_hexa: string
    comfort: string
    comfort_nb_star: number
    id: string
    make: string
    model: string
    number_of_seat: number
    picture: string
  }
  seats: number
  view_count: number
  comment: string
  booking_mode: string
}
