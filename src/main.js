import { createApp } from "vue";
import VNetworkGraph from "v-network-graph";
import "v-network-graph/lib/style.css";
import App from "./App.vue";
// app.use(VNetworkGraph)

// createApp(App).mount('#app')
const app = createApp(App);

app.use(VNetworkGraph);
app.mount("#app");
