import ErrorBoundary from "../utils/ErrorBoundary";
import {ServiceContainer} from "@deepkit/injector";
import {Config} from "~/providers/Config";
import {ConfigView} from "~/components/ConfigView";

export const Cmp = () => <div>
  Existing api. Component is wrapped in {"<>"}
  <ErrorBoundary>
    <ServiceContainer providers={[Config]}>
      <>
        <ConfigView/>
      </>
    </ServiceContainer>
  </ErrorBoundary>
</div>

export default Cmp;