import {Config} from "~/providers/Config";

export const ConfigView = (_: unknown, config: Config) => {
  if (!config) {
    return "No config found";
  }

  return <p>Hello {config.world}</p>
}