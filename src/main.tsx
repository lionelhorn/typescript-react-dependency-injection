import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProviderWithScope, ServiceContainer } from "@deepkit/injector";
import { Logger } from "./logger.ts";

const providers: ProviderWithScope[] = [
    Logger
];

function Wrapper(props: { children: any }) {
    return <div>{props.children}</div>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ServiceContainer providers={providers}>
          <Wrapper>
            <App/>
          </Wrapper>
        </ServiceContainer>
    </React.StrictMode>,
)
