import {useContext} from "react";
import {provideServices} from "@deepkit/injector";
import {ServiceContainerContext} from "~/utils/alternative-api/context";

export function dk<P>(fn: React.FC<P>) {  // Have to wrap initial fn component in another FunctionComponent to respect react hooks rules and to avoid :
  // Warning: Invalid hook call. Hooks can only be called inside of the body of a function component.
  function useWrapped<WP extends P>(props: WP) {
    const ctx = useContext(ServiceContainerContext);
    if (!ctx) {
      throw new Error("No service container context found. Is the component wrapped in a ServiceContainerContext.Provider?");
    }

    if (!ctx.providers) {
      throw new Error("No providers found in the service container context.");
    }

    const componentWitServices = provideServices(fn, ctx?.providers);
    return componentWitServices(props);
  }

  return useWrapped;
}