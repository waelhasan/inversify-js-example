import { provide } from "inversify-binding-decorators";
import { IService } from "./IService";
import { TYPES } from "../types";

@provide(TYPES.service)
export class Service implements IService {
    public test() {
        console.log('From the service class');
    }
}
