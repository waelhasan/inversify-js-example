import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";

require("./consumer/Consumer");
require("./service/Service");

const container = new Container();
container.load(buildProviderModule());

export { container };
