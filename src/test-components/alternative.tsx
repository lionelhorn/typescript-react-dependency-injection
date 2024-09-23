import {Config} from "~/providers/Config";
import {ConfigViewWrapped} from "~/components/ConfigViewWrapped";
import ErrorBoundary from "~/utils/ErrorBoundary";
import {ServiceContainerContext} from "~/utils/alternative-api/context";

export const Cmp = () => <div>
  Alternative api. Using dk() and component is wrapped in div
  <ErrorBoundary>
    <ServiceContainerContext.Provider value={{providers: [Config]}}>
      <div>
        <ConfigViewWrapped/>
      </div>
    </ServiceContainerContext.Provider>
  </ErrorBoundary>
</div>

export default Cmp;