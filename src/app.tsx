import "./style.css"
import {ServiceContainer} from "@deepkit/injector";
import {dk, ServiceContainerContext} from "./alternative-api.tsx";
import {FC} from "react";
import ErrorBoundary from "./ErrorBoundary.tsx";

class Config {
  hello = "world";
}

export const ConfigView = (_: any, config: Config) => {
  if (!config) {
    return "No config found";
  }

  return <p>{config.hello}</p>
}

export const ConfigViewWrapped: FC = dk((_, config: Config) => {
  if (!config) {
    return "No config found";
  }

  return <div>{config.hello}</div>
});

export const App = () => {
  return (
   <div className={"di-apis"}>
     <div className={"existing-di-api"}>
       Existing api. Component is direct children of {"<ServiceContainer>"}
       <ServiceContainer providers={[Config]}>
         <ConfigView/>
       </ServiceContainer>
     </div>

     <div className={"existing-di-api"}>
       Existing api. Component is wrapped in {"<>"}
       <ErrorBoundary>
         <ServiceContainer providers={[Config]}>
           <>
             <ConfigView/>
           </>
         </ServiceContainer>
       </ErrorBoundary>
     </div>

     <div className={"existing-di-api"}>
       Existing api. Component is wrapped in {"<div>"}
       <ErrorBoundary>
         <ServiceContainer providers={[Config]}>
           <div>
             <ConfigView/>
           </div>
         </ServiceContainer>
       </ErrorBoundary>
     </div>

     <div className={"alternative-di-api"}>
       Alternative api. Using dk() and component is wrapped in div
       <ServiceContainerContext.Provider value={{providers: [Config]}}>
         <div>
           <ConfigViewWrapped/>
         </div>
       </ServiceContainerContext.Provider>
     </div>
   </div>
  );
}