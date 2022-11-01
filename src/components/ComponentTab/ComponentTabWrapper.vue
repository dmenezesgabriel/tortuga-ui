<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({
  tabs: { type: Object, required: true },
  currentTab: { type: String, required: true },
});

const emit = defineEmits(["tab-click"]);

const selectedTab = ref<string>("");

const setSelectedTab = (tab: string) => {
  selectedTab.value = tab;
  emit("tab-click", tab);
};

onMounted(() => {
  selectedTab.value = props.currentTab;
});
</script>

<template>
  <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item" v-for="tab in Object.keys(props.tabs)" :key="tab">
          <a
            class="nav-link"
            :class="[{ active: selectedTab === tab }]"
            @click="setSelectedTab(tab)"
          >
            {{ tab }}
          </a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <KeepAlive>
        <component :is="tabs[selectedTab]" :key="tabs[selectedTab]" />
      </KeepAlive>
    </div>
  </div>
</template>
