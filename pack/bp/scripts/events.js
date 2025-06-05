"use strict";

import { ActionFormData } from "@minecraft/server-ui";
import { Data } from "./data";

export class Events {
  constructor(event, player) {
    this.event = event;
    this.player = player;
  }

  givePlayerFunctionController() {
    this.player.runCommand(
      'give "' + this.player.name + '" alaydriem:custom_commands_controller 1'
    );
  }

  showFunctionSelector() {
    let form = new ActionFormData();
    form.title("Run Command");
    form.body("Select the custom command you want to run.");

    let dds = new Data();
    let ds = dds.data;
    ds.forEach((i) => {
      form.button(i.text, i.icon);
    });

    form
      .show(this.player)
      .then((r) => {
        if (r.canceled) return;

        let response = r.selection;
        switch (response) {
          case 0:
            this.player.runCommand(ds[0].command);
            break;
          case 1:
            this.player.runCommand(ds[1].command);
            break;
          case 2:
            this.player.runCommand(ds[2].command);
            break;
          case 3:
            this.player.runCommand(ds[3].command);
            break;
          case 4:
            this.player.runCommand(ds[4].command);
            break;
          default:
            break;
        }
      })
      .catch((e) => {
        console.error(e, e.stack);
      });
  }
}
