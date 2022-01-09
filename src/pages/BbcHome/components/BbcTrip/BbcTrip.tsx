import React, {useState} from 'react'
// style
import './BbcTrips.scss'
// Api
import TripsApiRessource from "../../../../services/apiRessource/TripApiRessource";
// Types & constants
import {TripType} from "../../../../models/SearchInterface";
import {TripResultInterface} from "../../../../models/TripInterface";
import {app} from "../../../../services/contants/textContent";
import {error} from "../../../../services/contants/errorContent";

interface BbcTripsInterface {
  trip: TripType
}

const apiTrip = new TripsApiRessource()

export function BbcTrip(props: BbcTripsInterface) {
  // Constants
  const tripId = new URL(props.trip.link).searchParams.get('id')

  // ----- States -----
  const [tripInfo, setTripInfo] = useState<TripResultInterface | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  // ----- Functions -----
  const getTripInformation = async () => {
    setIsLoading(true)
    try {
      if (tripId) {
        const {data} = await apiTrip.getTripInformation(tripId)
        setTripInfo(data)
      }
    } catch (e) {
      alert(`${error.errorInTrip} ${tripId}`)
    } finally {
      setIsLoading(false)
    }
  }

  return <div className="bbc-trip">
    <div className={"bbc-trip__line"}>
      <div className={"bbc-trip__line__title"}>{app.link_trip}:</div>
      <div className={"bbc-trip__line__content"}><a href={props.trip.link}>{props.trip.link}</a></div>
    </div>
    <div className={"bbc-trip__line"}>
      <div className={"bbc-trip__line__title"}>{app.from}:</div>
      <div className={"bbc-trip__line__content"}>{props.trip.waypoints[0].place.city}</div>
    </div>
    <div className={"bbc-trip__line"}>
      <div className={"bbc-trip__line__title"}>{app.to}:</div>
      <div className={"bbc-trip__line__content"}>{props.trip.waypoints[props.trip.waypoints.length-1].place.city}</div>
    </div>
    <div className={"bbc-trip__line bbc-trip__line--right"}>
      {!tripInfo && <button onClick={() => getTripInformation()}>{app.seeDetails}</button>}
    </div>

    {isLoading && <div>{app.loading}</div> }
    {tripInfo && <div className={"bbc-trip__details"}>
      {tripInfo.car && <div className={"bbc-trip__details__line"}>
            <div className={"bbc-trip__details__line__title"}>{app.carPicture}:</div>
            <div className={"bbc-trip__details__line__content"}><img src={tripInfo.car.picture}/></div>
        </div>}
        <div className={"bbc-trip__details__line"}>
            <div className={"bbc-trip__details__line__title"}>{app.comment}:</div>
            <div className={"bbc-trip__details__line__content"}>{tripInfo.comment}</div>
        </div>
        <div className={"bbc-trip__details__line"}>
            <div className={"bbc-trip__details__line__title"}>{app.booking_mode}:</div>
            <div className={"bbc-trip__details__line__content"}>{tripInfo.booking_mode}</div>
        </div>
        <div className={"bbc-trip__details__line"}>
            <div className={"bbc-trip__details__line__title"}>{app.seats}:</div>
            <div className={"bbc-trip__details__line__content"} title={app.seats}>{tripInfo.seats}</div>
        </div>
        <div className={"bbc-trip__details__line"}>
            <div className={"bbc-trip__details__line__title"}>{app.view_count}:</div>
            <div className={"bbc-trip__details__line__content"}>{tripInfo.view_count}</div>
        </div>
    </div>}
  </div>
}