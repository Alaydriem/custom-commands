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
