import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";
import getDecorators from "inversify-inject-decorators";

import "./service/Service";

const container = new Container();
container.load(buildProviderModule());

const { lazyInject } = getDecorators(container);
export { container, lazyInject };
