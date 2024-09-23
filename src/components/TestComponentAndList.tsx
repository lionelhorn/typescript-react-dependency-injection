import {allRoutesPaths} from "~/allRoutes.gen";
import {Outlet} from "react-router-dom";

export const TestComponentAndList = () => {
  return <div className={"p-2 space-y-4"}>

    <div>
      Tested component
      <div className={"border-4 border-blue-200"} data-testid={"tested"}>
        <Outlet/>
      </div>
    </div>
    <div className={"flex flex-col gap-1 bg-gray-200 p-1 w-min"}>
      Other tests
      <div className={"flex flex-row gap-2"}>
        {allRoutesPaths.map(route => <a key={route} href={`/${route}`} className={"bg-gray-300 p-0.5"}>{route}</a>)}
      </div>
    </div>
  </div>;
}