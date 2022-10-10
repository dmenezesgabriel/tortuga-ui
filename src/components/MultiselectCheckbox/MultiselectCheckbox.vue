<script setup lang="ts">
import type { IOption } from "@/types/IFilter";
import { getAttributeValues } from "@/utils/data";
import { computed, ref, onMounted, onUnmounted, watch } from "vue";
import type { PropType } from "vue";
import { useDebouncedRef } from "@/composables/useDebouncedRef";
import vClickOutside from "@/directives/ClickOutside/clickOutside";

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  options: { type: Array as PropType<Array<IOption>>, required: true },
  exclude: { type: Array as PropType<Array<string>>, required: false },
  meta: { type: Object as PropType<Record<string, string>>, required: false },
  text: {
    type: Object as PropType<Record<string, string>>, required: false, default: {
      all: "all",
      multiple: "multiple",
      "select-option": "Select an Option",
      empty: "empty"
    }
  },
  isOriginalState: { type: Boolean, required: false, default: true }
});

const emit = defineEmits(["mounted", "apply", "revert", "unmounted"])


// runtime persistence for checkboxes values
const checkedValues = ref<Array<string>>(
  getAttributeValues(
    props.options.filter((option) => option.available === true),
    "name"
  )
);

// Dropdown opened/closed state
const isCollapsed = ref<boolean>(false);

// Search available option at dropdown
const search = useDebouncedRef("", 400, false);

// Checkbox for "select all"
const allSelected = ref<boolean>(
  props.options.every((option) => option.available === true)
);

// Filter options list according with user input at search
const filteredList = computed(() => {
  return [...props.options].filter((option) =>
    option.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

// Sort options considering its availability due to cascading filters
const sortedOptions = computed((): IOption[] =>
  [...filteredList.value].sort((x, y) => {
    return x.visible === y.visible ? 0 : x.visible ? -1 : 1;
  })
);

// Filter dropdown selection text
const selectedText = computed((): string => {
  /**
   * Show selection text
   * @returns {string}
   */
  const checkedValueContent = checkedValues.value;
  if (checkedValueContent != null) {
    if (allSelected.value) {
      return props.text["all"];
    } else if (checkedValueContent.length > 1) {
      return props.text["multiple"];
    } else if (checkedValueContent.length == 1) {
      return checkedValueContent[0];
    } else {
      return props.text["select-option"];
    }
  }
  return props.text["empty"];
});


const collapseMenu = (): void => {
  /**
   * Collapse menu
   * @returns {void}
   */
  isCollapsed.value = !isCollapsed.value;
};

const closeMenu = (): void => {
  /**
   * Close menu, function created to be used with 'click outiside' custom
   * directive
   * @returns {void}
   */
  isCollapsed.value = false;
};

const revertOptions = () => {
  const options = props.options.map((option) => ({
    name: option.name,
    available: !option.exclude,
    visible: true,
    exclude: option.exclude,
  }));

  emit("revert", {
    id: props.id,
    title: props.title,
    options: options,
    meta: props.meta,
  });
};

const selectAll = (): void => {
  /**
   * Select all values from options dropdown
   * @returns {void}
   */
  if (!allSelected.value) {
    checkedValues.value = getAttributeValues(props.options, "name");
  } else {
    checkedValues.value = [];
  }
};

const revertFilter = (): void => {
  /**
   * Revert this filter to original state
   * @returns {void}
   */
  checkedValues.value = getAttributeValues(
    props.options.filter((option) => option.exclude === false),
    "name"
  );
  revertOptions();
};

const apply = (): void => {
  /**
   * Apply current filter options based on checked values array
   * @returns {void}
   */

  const options = props.options.map((option) => ({
    name: option.name,
    available: checkedValues.value.includes(option.name),
    visible: allSelected.value ? true : option.visible,
    exclude: option.exclude,
  }));

  emit("apply", {
    id: props.id,
    title: props.title,
    options: options,
    meta: props.meta,
  });
};

watch(checkedValues, (): void => {
  /**
   * All options must be checked to "All" option be checked too
   * @returns {void}
   */
  if (props.options?.length === checkedValues.value?.length) {
    allSelected.value = true;
  } else {
    allSelected.value = false;
  }
});

watch(
  () => props.isOriginalState,
  (newValue, oldValue) => {
    /**
     * Revert filter to original state
     * @returns {void}
     */
    if (newValue == true) revertFilter();
  }
);

onMounted(() => {
  if (props.options.some((opt) => opt.exclude === true)) {
    const options = props.options.map((option) => ({
      name: option.name,
      available: !option.exclude,
      visible: true,
      exclude: option.exclude,
    }));

    emit("mounted", {
      id: props.id,
      title: props.title,
      options: options,
      meta: props.meta,
    });
  }
});

onUnmounted(() => {
  emit("unmounted");
});
</script>

<template>
  <div class="card p-1 border-0">
    <div class="card-header p-1 d-flex">
      <div class="card-title text-capitalize mb-0 me-auto">
        {{ title as string }}
      </div>
    </div>
    <div class="card-body p-0">
      <div
        class="checkbox-select"
        :class="{ show: isCollapsed }"
        v-click-outside="closeMenu"
      >
        <button
          class="button border-2"
          @click="collapseMenu"
          aria-label="colapse"
        >
          <span class="text">{{ selectedText as string }}</span>
          <span class="icon">
            <i class="bi bi-chevron-down"></i>
          </span>
        </button>
        <div class="checkbox-select__dropdown-wrapper">
          <div class="checkbox-select__dropdown w-100 shadow">
            <div class="search">
              <div class="search__input-group">
                <input
                  type="text"
                  placeholder="search..."
                  v-model="search"
                />
                <span class="input-border"></span>
              </div>
            </div>
            <TransitionGroup
              tag="ul"
              class="checkbox-select__options"
              name="fade"
            >
              <!-- Fixed li -->
              <li
                class="checkbox-select__option"
                :key="9999"
              >
                <div class="form-check">
                  <input
                    id="selectAll"
                    type="checkbox"
                    class="form-check-input"
                    v-model="allSelected"
                    @click="selectAll"
                  />
                  <label
                    class="form-check-label"
                    for="selectAll"
                  >All</label>
                </div>
              </li>
              <!-- Fixed li -->
              <li
                class="checkbox-select__option"
                v-for="(option, index) in sortedOptions"
                :key="index"
              >
                <div class="form-check">
                  <input
                    :id="option.name"
                    type="checkbox"
                    class="form-check-input"
                    :value="option.name"
                    v-model="checkedValues"
                    :disabled="!option.visible"
                  />
                  <label
                    class="form-check-label"
                    :for="option.name"
                  >
                    {{ option.name as string }}
                  </label>
                </div>
              </li>
            </TransitionGroup>
            <div class="d-flex justify-content-end">
              <button
                type="button"
                role="button"
                class="btn btn-outline-secondary btn-sm rounded-pill apply"
                @click="apply"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-header {
  background-color: var(--bs-gray-100);
}

.checkbox-select {
  border-radius: 5px;
  background-color: white;

  .checkbox-select__dropdown-wrapper {
    position: relative;
  }

  .checkbox-select__dropdown {
    padding: 10px;
    position: absolute;
    display: none;
    background-color: white;
    border-radius: 5px;
    z-index: 99;

    ul {
      list-style: none;
      padding-left: 0;
      max-height: 200px;
      overflow: auto;
    }

    .checkbox-select__option {
      padding: 0.375rem;
      border-radius: 5px;

      &:hover {
        background-color: var(--bs-gray-500);
      }
    }

    .search {
      &__input-group {
        width: 100%;
        position: relative;

        input {
          outline: 0;
          border: none;
          width: 100%;
          border-bottom: 3px solid #ccc;
        }

        input:focus {
          &+.input-border {
            width: 100%;
            transform: translateX(-50%) scale(1);
          }
        }

        .input-border {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scale(0);
          width: 0%;
          height: 3px;
          background-color: var(--bs-primary);
          transition: 0.5s;
        }
      }
    }
  }

  &.show {
    .checkbox-select__dropdown {
      display: block;
    }

    .icon {
      transform: rotate(-180deg);
    }
  }

  .button {
    display: flex;
    padding: 5px;
    width: 100%;
    justify-content: space-between;
  }
}

// Animation start
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
}

// Animation end

[data-mode="dark"] .darker {

  .button,
  .text,
  .checkbox-select__dropdown-wrapper,
  .checkbox-select__dropdown,
  input[type="text"],
  label,
  .checkbox-select__option {
    background-color: var(--bs-dark);
  }

  input[type="text"],
  .text,
  i {
    color: var(--bs-white);
  }

  .button {
    border: 1px solid var(--bs-dark-alt);
  }

  .checkbox-select__option {
    &:hover {
      background-color: var(--bs-dark-alt);

      label {
        background-color: var(--bs-dark-alt);
      }
    }
  }
}
</style>
