import { module } from "rig";

export const archCleanup = module("arch-cleanup", ({ pkg }) => {
  pkg.remove([
    "alacritty",
    "btop",
    "cachyos-hello",
    "cachyos-micro-settings",
    "cachyos-zsh-config",
    "firefox",
    "haruna",
    "kdeconnect",
    "meld",
    "shelly",
  ]);
  pkg.removeOrphans();
});
