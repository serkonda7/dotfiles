import { module } from "rig";

export const development = module("development", ({ pkg }) => {
  pkg(["yay", "code", "opencode", "claude-code", "brave-bin"]);
  pkg.aur(["t3code-nightly-bin"]);
});
