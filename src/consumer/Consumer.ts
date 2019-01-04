import { IService } from "../service/IService";
import { IConsumer } from "./IConsumer";
import { TYPES } from "../types";
import { lazyInject } from "../ioc";

export class Consumer implements IConsumer {
  @lazyInject(TYPES.service) private _service: IService;

  public test() {
    this._service.test();
  }
}
