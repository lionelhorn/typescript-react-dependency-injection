// Generated file. Do not edit.
import {RouteObject} from "react-router-dom";
import {TestComponentAndList} from "~/components/TestComponentAndList";

import Alternative from '@test-components/alternative.js';
import Existing1 from '@test-components/existing-1.js';
import Existing2 from '@test-components/existing-2.js';
import Existing3 from '@test-components/existing-3.js';

const testRoutes: RouteObject[] = [{
  path: "/alternative",
  Component: () => <Alternative/>,
},
  {
    path: "/existing1",
    Component: () => <Existing1/>,
  },
  {
    path: "/existing2",
    Component: () => <Existing2/>,
  },
  {
    path: "/existing3",
    Component: () => <Existing3/>,
  }]

export const allRoutesPaths = ["alternative",
  "existing1",
  "existing2",
  "existing3"];

export const allRoutes: RouteObject[] = [
  {
    path: "/",
    Component: () => <div>
      <TestComponentAndList/>
    </div>,
    children: testRoutes

  },
]