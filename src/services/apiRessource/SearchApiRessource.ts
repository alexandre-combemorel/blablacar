import BaseApiRessource from "./BaseApiRessource";
import {TripsReqParamInterface, TripsResultsInterface} from "../../models/SearchInterface";

class SearchApiRessource extends BaseApiRessource {

    public getRessourceName() {
        return "trips";
    }

    public getTrips({from, to}: {from: string, to: string}, cursor?: string) {
        const params: TripsReqParamInterface = {
            from_coordinate: from,
            to_coordinate: to,
            from_country: 'FR',
            to_country: 'FR',
            locale: 'en-GB',
            start_date_local: new Date(),
            currency: 'EUR'
        }
        if (cursor) params.next_cursor = cursor
        return this.get<TripsResultsInterface>('', {params});
    }
}

export default SearchApiRessource;