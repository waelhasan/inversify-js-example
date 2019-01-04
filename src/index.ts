import "reflect-metadata";
import { provide } from "inversify-binding-decorators";
import { container } from "./ioc";
import { TYPES } from "./types";
import { IService } from "./service/IService";
import { Consumer } from "./consumer/Consumer";

const consumer1 = new Consumer(); // From the service class
consumer1.test();

container.unbind(TYPES.service);
@provide(TYPES.service)
class ServiceMock {
  test() {
    console.log("MOCK !!");
  }
}
container.bind<IService>(TYPES.service).to(ServiceMock);

const consumer2 = new Consumer();
consumer2.test(); // MOCK !!
