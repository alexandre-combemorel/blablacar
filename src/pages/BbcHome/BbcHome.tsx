import React, {useEffect, useState} from 'react'
// Style
import './BbcHome.scss'
// Components
import {BbcError} from "../../components/Error/BbcError";
import {BbcTrip} from "./components/BbcTrip/BbcTrip";
// API
import SearchApiRessource from "../../services/apiRessource/SearchApiRessource";
// Constants && types
import {error} from "../../services/contants/errorContent";
import {TripType} from "../../models/SearchInterface";
import {BbcShowMore} from "./components/BbcShowMore/BbcShowMore";


const tripsApi = new SearchApiRessource()
export function BbcHome() {

  // List of states
  const [errorText, setErrorText] = useState<string | undefined>()
  const [listTrips, setListTrips] = useState<TripType[]>([])
  const [nextCursor, setNextCursor] = useState<string | undefined>()
  const [isLoading, setIsLoading] = useState(true)

  const clearError = () => {
    setErrorText(undefined)
  }

  // Fetch trips according to cities location and page cursor availability
  const getTrips = async () => {
    setIsLoading(true)
    const coordinates = {
      from: '48.8566,2.3522',
      to: '45.764043,4.835659'
    }
    try {
      const {data} = await tripsApi.getTrips(coordinates, nextCursor)
      setNextCursor(data.next_cursor)
      setListTrips([...listTrips, ...data.trips])
    } catch (e) {
      if (e instanceof Error) {
        e.message.includes('400') && setErrorText(error['400'])
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Make sure first load provide the first 10 results
  useEffect(() => {
    getTrips()
  }, [])

  return <div className="bbc-home">
    <h2>Trips from Paris to Lyon</h2>
    {errorText && <BbcError text={errorText} onConfirm={clearError}/>}
    <div className="bbc-home__trips">
      {listTrips.map((trip, index) => <BbcTrip key={`${trip.link}${index}`} trip={trip}/>)}
    </div>
    <div className="bbc-home__pagination">
      {nextCursor && <BbcShowMore onShowMoreClick={getTrips} isLoading={isLoading}/>}
    </div>
  </div>
}