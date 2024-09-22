import React, {FC, PropsWithChildren} from 'react'
import ReactDOM from 'react-dom/client'
import {ProviderWithScope, ServiceContainer} from "@deepkit/injector";

export class Config {
  hello = "world"
}

const providers: ProviderWithScope[] = [
  Config
];

export const ConfigView = (_: any, config: Config) => {
  return <p>{config.hello}</p>
}

export const Wrapper: FC<PropsWithChildren> = ({children}) => {
  return <div style={{
    border: "2px",
    borderColor: "red"
  }}>{children}</div>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <React.StrictMode>
   <ServiceContainer providers={providers}>
     <>
       <ConfigView/>
     </>
   </ServiceContainer>
 </React.StrictMode>,
)
