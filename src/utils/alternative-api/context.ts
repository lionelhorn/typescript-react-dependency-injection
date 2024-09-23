import {InjectorModule, ProviderWithScope} from "@deepkit/injector";
import {ClassType} from "@deepkit/core";
import {createContext} from "react";

export type ServiceContainerContextType = { providers?: ProviderWithScope[], module?: InjectorModule, state?: ClassType, children?: React.ReactNode }
export const ServiceContainerContext = createContext<ServiceContainerContextType | null>(null);

