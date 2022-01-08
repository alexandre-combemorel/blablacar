import BaseApiRessource from "./BaseApiRessource";
import {tripsReqParamInterface, tripsResultsInterface} from "../../models/SearchInterface";

class SearchApiRessource extends BaseApiRessource {

    public getRessourceName() {
        return "trips";
    }

    public getTrips({from, to}: {from: string, to: string}, cursor?: string) {
        const params: tripsReqParamInterface = {
            from_coordinate: from,
            to_coordinate: to,
            from_country: 'FR',
            to_country: 'FR',
            locale: 'en-GB',
            start_date_local: new Date(),
            currency: 'EUR'
        }
        if (cursor) params.next_cursor = cursor
        return this.get<tripsResultsInterface>('', {params});
    }
}

export default SearchApiRessource;