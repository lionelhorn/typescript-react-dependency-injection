import { InjectorModule, ProviderWithScope, provideServices } from "@deepkit/injector";
import { ClassType } from "@deepkit/core";
import {createContext, useContext} from "react";

export type ServiceContainerContextType = { providers?: ProviderWithScope[], module?: InjectorModule, state?: ClassType, children?: any }
export const ServiceContainerContext = createContext<ServiceContainerContextType | null>(null);

export function dk<P>(fn: React.FC<P>) {  // Have to wrap initial fn component in another FunctionComponent to respect react hooks rules and to avoid :
  // Warning: Invalid hook call. Hooks can only be called inside of the body of a function component.
  function useWrapped<WP extends P>(props: WP): any {
    const ctx = useContext(ServiceContainerContext);
    if (!ctx) {
      throw new Error("No service container context found. Is the component wrapped in a ServiceContainerContext.Provider?");
    }

    if(!ctx.providers) {
      throw new Error("No providers found in the service container context.");
    }

    const componentWitServices = provideServices(fn, ctx?.providers);
    return componentWitServices(props);
  }

  return useWrapped;
}