![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCXgqRZv7bHsKzwYBrtA9DFA?label=Youtube%20Subscribers&logo=Alaydriem&style=flat-square)

<div align="center">

  <h1>Custom MCFunctions</h1>

<a href="https://www.youtube.com/@Alaydriem"><img src="https://raw.githubusercontent.com/alaydriem/bedrock-material-list/master/docs/subscribe.png" width="140"/></a>

<a href="https://discord.gg/NMvmk9zKyP"><img src="https://raw.githubusercontent.com/alaydriem/custom-commands/master/pack/rp/pack_icon.png" width="140"/></a>

  <p>
    <strong>Execute player defined mcfunction and commands</strong>
  </p>
  <hr />
</div>

## About

This pack enables you to define your own custom commands and mcfunctions to run from a given item.

> Note, this pack is provided as a stepping stone. You are intended to redefine some behavior.

> WARNING: This pack will let any player who can run the `!give-mcfcmd-controller` command to execute any commands. Ensure that any commands you write are either restricted to a specific player using `@s` or testfor, or are benign enough to not have an impact if any player runs it. For example, don't run `kill @a`. That'd be obnoxious.

## Usage

1. Make sure the mcaddon is installed and both the resource and behavior pack is added to your world or server.
2. Run `!give-mcfcmd-controller` from the chat menu to be given the command controller.
3. Right click on the command controller to select your customc ommand.

## Defining your own custom commands

The pack comes with 5 commands pre-defined, however the real power of this pack is through the redefinition of your own commands.

All commands are stored in the behavior pack scripts/data.js file. Don't worry if you aren't familiar with JSON or JavaScript, it isn't really relevant to getting the commands to work.

The JavaScript class looks as follows:

```javascript
"use strict";

export class Data {
  data = [
    {
      text: "Say Hello",
      icon: "textures/items/diamond_shovel",
      command: "say hello",
    },
    {
      text: "Give Iron Ingot",
      icon: "textures/items/iron_ingot",
      command: "give @s iron_ingot 1",
    },
    {
      text: "Summon Iron Golemn",
      icon: "textures/blocks/iron_block",
      command: "summon iron_golem ~ ~ ~",
    },
    {
      text: "Give Strength",
      icon: "textures/items/diamond_sword",
      command: "effect @s strength 30 3",
    },
    {
      text: "Example mcfunction",
      icon: "textures/items/compass_item",
      command: "function example",
    },
  ];
}
```

And the functionality you'll be editing is the `data` array, which can contain an unlimited number of custom commands you can define.

Each command is defined as follows, and consists of a text element, an icon, and the command to run.

```javascript
{
  text: "Example mcfunction",
  icon: "textures/items/compass_item",
  command: "function example",
}
```

- The text attribute may be whatever you want.
- The icon should match to an existing icon path in your world or server. See https://github.com/ZtechNetwork/MCBVanillaResourcePack/tree/master/textures for the vanilla texture paths. As an example: `textures/items/compass_item` will show the compass.
- And finally, the command is the command without any slashes that you want to execute.

### Executing arbitrary commands

If you wish to execute an arbitrary command, simply change the command to be whatever `/` command you wish to run. This could be a summon, given item, kill player, teleport to a specific location, or whatever! Let your imagination run wild.

### Executing mcfunctions

Writing multi-line commands may be a bit chobblesome, so alternatively you can write an mcfunction in the behavior pack `functions` folder. Simple create a file ending with the .mcfunction extension (for example, give_golden_apple.mcfunction), then populate it with your desired commands. See functions/example.mcfunctions for a simple example.

## Installation

Download the latest version of the pack from the Github [releases](https://github.com/Alaydriem/custom-commands/releases) page.

Make sure that you have the following experimental flags enabled:

- Beta APIs
- Download the .mcaddon from the Github releases pack
- Double click on the .mcaddon to add it to your world
- Ensure that the behavior and resource pack are both added to your world or server.

## Mandatory Attribution

Icons provided by freepik with attribution: https://www.freepik.com/icon/papyrus_4829423#fromView=resource_detail&position=39

## Updates

This pack requires use of Beta API's, which may change from time to time. Please open a Github issue if the pack requires updating and I'll address it, or create a merge request with the appropriate fixes.
