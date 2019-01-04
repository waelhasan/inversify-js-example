import getDecorators from "inversify-inject-decorators";

import { container } from "./ioc";

const { lazyInject } = getDecorators(container);
export { lazyInject };
