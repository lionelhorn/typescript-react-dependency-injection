import {ServiceContainer} from "@deepkit/injector";
import {ConfigView} from "~/components/ConfigView";
import {Config} from "~/providers/Config";
import ErrorBoundary from "~/utils/ErrorBoundary";

export const Cmp = () => <div>
  Existing api. Component is wrapped in {"<div>"}
  <ErrorBoundary>
    <ServiceContainer providers={[Config]}>
      <div>
        <ConfigView/>
      </div>
    </ServiceContainer>
  </ErrorBoundary>
</div>

export default Cmp;