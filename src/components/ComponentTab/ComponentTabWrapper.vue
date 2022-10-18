<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({
  tabs: { type: Object, required: true },
  currentTab: { type: String, required: true },
});

const emit = defineEmits(["onTabChange"]);

const selectedTab = ref<string>("");

const setSelectedTab = (tab: string) => {
  selectedTab.value = tab;
  emit("onTabChange", tab);
};

onMounted(() => {
  selectedTab.value = props.currentTab;
});
</script>

<template>
  <div class="component-tabs">
    <div class="btn-group mx-3" role="group">
      <button
        type="button"
        role="button"
        :aria-label="tab"
        v-for="tab in Object.keys(props.tabs)"
        :key="tab"
        @click="setSelectedTab(tab)"
        :class="['btn component-tabs__button', { active: selectedTab === tab }]"
      >
        {{ tab }}
      </button>
    </div>
    <!--
    Key is needed here due to vuejs error when not defining what
    you're keeping alive:
    TypeError: parentComponent.ctx.deactivate is not a
    -->
    <div class="component-tabs__tab">
      <div class="component-tabs__tab--content">
        <KeepAlive>
          <component :is="tabs[selectedTab]" :key="tabs[selectedTab]" />
        </KeepAlive>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component-tabs {
  &__button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }

  &__button:hover {
    background: #e0e0e0;
  }

  &__button.active {
    background: #e0e0e0;
  }

  &__tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
}

[data-mode="dark"] .dark {
  .component-tabs {
    &__button {
      border: 1px solid var(--bs-gray-600);
      background: var(--bs-gray-700);
    }

    &__button:hover {
      background: var(--bs-gray-500);
    }

    &__button.active {
      background: var(--bs-gray-500);
    }

    &__tab {
      border: 1px solid var(--bs-gray-600);
    }
  }
}
</style>
