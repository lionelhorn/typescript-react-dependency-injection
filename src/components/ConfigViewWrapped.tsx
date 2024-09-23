import {FC} from "react";
import {Config} from "~/providers/Config";
import {dk} from "~/utils/alternative-api/dk";


export const ConfigViewWrapped: FC = dk((_, config: Config) => {
  if (!config) {
    return "No config found";
  }

  return <p>Hello {config.world}</p>
});