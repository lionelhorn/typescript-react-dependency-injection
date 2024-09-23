import ErrorBoundary from "../utils/ErrorBoundary";
import {ServiceContainer} from "@deepkit/injector";
import {Config} from "~/providers/Config";
import {ConfigView} from "~/components/ConfigView";

export const Cmp = () => <div>
  Existing api. Component is direct child of {"<ServiceContainer>"} and with sibling
  <ErrorBoundary>
    <ServiceContainer providers={[Config]}>
      <ConfigView/>
    </ServiceContainer>
  </ErrorBoundary>
</div>

export default Cmp;