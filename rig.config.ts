import { defineConfig, host } from "rig";
import { development } from "./modules/development";
import { archCleanup } from "./modules/arch-cleanup";

const hosts = {
  localhost: host({
    os: "arch",
    modules: [archCleanup, development],
  }),
};

export default defineConfig({
  hosts,
  defaults: { user: "john" },
});
