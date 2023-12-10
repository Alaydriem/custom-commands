"use strict";

import { world, system } from "@minecraft/server";
import { Events } from "./events";
import { Version } from "./version";

world.beforeEvents.chatSend.subscribe(async (event) => {
  let ch = new Events(event, event.sender);
  let v = new Version(event, event.sender);
  let cmd = event.message.split(" ");
  switch (cmd[0]) {
    default:
    case "!custom-mcfunction-cmd-version":
      event.cancel = true;
      system.run(() => {
        v.version();
      });
      break;
    case "!give-mcfcmd-controller":
      event.cancel = true;
      system.run(() => {
        ch.givePlayerFunctionController();
      });
  }
});

world.afterEvents.itemUse.subscribe(async (event) => {
  let ch = new Events(event, event.source);
  if (event.itemStack.typeId == "alaydriem_cmcfncmd:controller") {
    event.cancel = true;
    system.run(() => {
      ch.showFunctionSelector();
    });
  }
});
