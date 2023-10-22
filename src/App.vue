<template>
  <div>
    <h1>South American Animal Network</h1>
    <v-network-graph :nodes="nodes" :edges="edges"  :configs="config" :event-handlers="eventHandlers" class="graph">
			<template #override-node="{ nodeId, scale, config, ...slotProps }">
            <circle class="face-circle" :r="config.radius * scale" fill="#ffffff" v-bind="slotProps" />
            <image class="face-picture" :x="-config.radius * scale" :y="-config.radius * scale"
                :width="config.radius * scale * 2" :height="config.radius * scale * 2"
                :xlink:href="`${nodes[nodeId].face}`" clip-path="url(#faceCircle)" />
            <circle class="face-circle" :r="config.radius * scale" fill="none" stroke="#808080"
                :stroke-width="1 * scale" v-bind="slotProps" />
        </template>
	</v-network-graph>
  </div>
</template>

<script setup>
import { VNetworkGraph } from "v-network-graph";
import "v-network-graph/lib/style.css";
import { ForceLayout } from "v-network-graph/lib/force-layout";
				
const nodes = {
  jaguars: { name: "Jaguars" , face: "https://b.fssta.com/uploads/application/nfl/team-logos/Jaguars.png" },
  harpy_eagles: { name: "Harpy Eagles" },
  ocelots: { name: "Ocelots" },
  opossum: { name: "Opossum" },
  "two-toed_sloths": { name: "Two-Toed Sloths" },
  spectacled_owls: { name: "Spectacled Owls" },
  quail: { name: "Quail" },
  guinea_pigs: { name: "Guinea Pigs" },
  capybara: { name: "Capybara" },
  iguana: { name: "Iguana" },
  insects: { name: "Insects" },
  plants: { name: "Plants" , face: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RQELm0ZKN5PimYe5nYQJuQDnL6qhae2ovQ&usqp=CAU"},
  capybaras: { name: "Capybaras" },
  pacas: { name: "Pacas" },
  agoutis: { name: "Agoutis" },
  livestock: { name: "Livestock" },
  rabbits: { name: "Rabbits" },
  armadillos: { name: "Armadillos" },
  caimans: { name: "Caimans" },
  turtles: { name: "Turtles" },
  reptiles: { name: "Reptiles" },
  birds: { name: "Birds" },
  fish: { name: "Fish" },
  sloths: { name: "Sloths" },
  monkeys: { name: "Monkeys" },
  rodents: { name: "Rodents" },
  snakes: { name: "Snakes" },
  iguanas: { name: "Iguanas" },
  peccaries: { name: "Peccaries" },
  deer: { name: "Deer" },
  crabs: { name: "Crabs" },
  worms: { name: "Worms" },
  carrion: { name: "Carrion" },
  amphibians: { name: "Amphibians" },
  bird_eggs: { name: "Bird Eggs" },
  crustaceans: { name: "Crustaceans" },
  berries: { name: "Berries" },
  fruits: { name: "Fruits" },
  small_mammals: { name: "Small Mammals" },
  eggs: { name: "Eggs" },
  lizards: { name: "Lizards" },
  bats: { name: "Bats" },
  skunks: { name: "Skunks" },
  possums: { name: "Possums" },
};

for (const nodeId in nodes) {
  if (!nodes[nodeId].face) {
    nodes[nodeId].face = "https://i.redd.it/k90fdk2hma3a1.jpg";
  }
}

const edges = {
  edge1: { source: "jaguars", target: "peccaries" },
  edge2: { source: "jaguars", target: "capybaras" },
  edge3: { source: "jaguars", target: "pacas" },
  edge4: { source: "jaguars", target: "agoutis" },
  edge5: { source: "jaguars", target: "deer" },
  edge6: { source: "jaguars", target: "opossum" },
  edge7: { source: "jaguars", target: "rabbits" },
  edge8: { source: "jaguars", target: "armadillos" },
  edge9: { source: "jaguars", target: "caimans" },
  edge10: { source: "jaguars", target: "turtles" },
  edge11: { source: "jaguars", target: "livestock" },
  edge12: { source: "jaguars", target: "reptiles" },
  edge13: { source: "jaguars", target: "birds" },
  edge14: { source: "jaguars", target: "fish" },
  edge15: { source: "harpy_eagles", target: "sloths" },
  edge16: { source: "harpy_eagles", target: "monkeys" },
  edge17: { source: "harpy_eagles", target: "opossums" },
  edge18: { source: "ocelots", target: "sloths" },
  edge19: { source: "ocelots", target: "rodents" },
  edge20: { source: "ocelots", target: "birds" },
  edge21: { source: "ocelots", target: "snakes" },
  edge22: { source: "ocelots", target: "iguanas" },
  edge23: { source: "ocelots", target: "peccaries" },
  edge24: { source: "ocelots", target: "deer" },
  edge25: { source: "ocelots", target: "rabbits" },
  edge26: { source: "ocelots", target: "fish" },
  edge27: { source: "ocelots", target: "crabs" },
  edge28: { source: "opossum", target: "insects" },
  edge29: { source: "opossum", target: "worms" },
  edge30: { source: "opossum", target: "carrion" },
  edge31: { source: "opossum", target: "reptiles" },
  edge32: { source: "opossum", target: "amphibians" },
  edge33: { source: "opossum", target: "birds" },
  edge34: { source: "opossum", target: "bird_eggs" },
  edge35: { source: "opossum", target: "crustaceans" },
  edge36: { source: "opossum", target: "berries" },
  edge37: { source: "opossum", target: "fruits" },
  edge38: { source: "opossum", target: "small_mammals" },
  edge40: { source: "two-toed_sloths", target: "eggs" },
  edge41: { source: "two-toed_sloths", target: "lizards" },
  edge42: { source: "spectacled_owls", target: "sloths" },
  edge43: { source: "spectacled_owls", target: "mice" },
  edge44: { source: "spectacled_owls", target: "rodents" },
  edge45: { source: "spectacled_owls", target: "bats" },
  edge46: { source: "spectacled_owls", target: "skunks" },
  edge47: { source: "spectacled_owls", target: "possums" },
  edge48: { source: "quail", target: "plants" },
  edge49: { source: "guinea_pigs", target: "plants" },
  edge50: { source: "capybara", target: "plants" },
  edge51: { source: "iguana", target: "plants" },
  edge52: { source: "insects", target: "plants" },
  edge53: { source: "plants", target: "" },
};

const config = {
  view: {
    scalingObjects: true,
    layoutHandler: new ForceLayout({
      positionFixedByDrag: false,
      positionFixedByClickWithAltKey: true,
    }),
  },
  node: {
    normal: {
      radius: 12,
      color: (node) => node.color,
      strokeWidth: 5,
      strokeColor: (node) => node.color,
    },
    label: {
      visible: true,
      margin: 0,
    },
  },
  edge: {
    normal: {
      width: 1,
      color: (edge) => edge.color,
    },
    gap: 50,
    type: "curve",
    marker: {
      target: {
        type: "arrow",
      },
    },
    label: {
      fontSize: 9,
      background: {
        visible: true,
        color: "#f7fafa",
      },
    },
  },
};

const eventHandlers = {
  'node:click': ({ node }) => {
    const nodeId = node;
    const wikipediaURL = `https://en.m.wikipedia.org/wiki/${nodeId}`;
    window.open(wikipediaURL, '_blank');
  },
};
</script>


<style>
.graph {
  width: 1000px;
  height: 1000px;
}
</style>