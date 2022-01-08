import BaseApiRessource from "./BaseApiRessource";
import {TripResultInterface} from "../../models/TripInterface";

class TripsApiRessource extends BaseApiRessource {

    constructor() {
        super();
        this.isApiV2 = true;
    }

    public getRessourceName() {
        return "trips";
    }

    public getTripInformation(id: string) {
        return this.get<TripResultInterface>(`${id}`);
    }
}

export default TripsApiRessource;