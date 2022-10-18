<script setup lang="ts">
import { computed, type PropType } from "vue";
import { ref } from "vue";

const props = defineProps({
  fields: { type: Array as PropType<Array<string>>, required: true },
  data: {
    type: Array as PropType<Array<string | number | boolean>>,
    required: true,
  },
});

const sortedData = ref<any>(null);
const rowsPerPage = [5, 10, 15, 25, 50, 75, 100];
const currentRowsPerPage = ref<string>("5");
const currentPage = ref<number>(1);

const numberOfPages = computed(() => {
  return Math.ceil(props.data.length / parseInt(currentRowsPerPage.value));
});

const tableData = computed((): Array<any> => {
  /**
   * Returns sorted table data if sorted, else return original table data
   * @returns {Array<any>}
   */
  let _data: any;
  if (sortedData.value && props.data.length === sortedData.value.length) {
    _data = sortedData.value;
  } else {
    _data = props.data;
  }
  const pageSize = parseInt(currentRowsPerPage.value);
  const pageNumber = currentPage.value;
  return paginate(_data, pageSize, pageNumber);
});

const paginationItems = computed(() => {
  // Since the array is initialized with `undefined` on each position,
  // the value of `value` below will be `undefined`
  const availablePageNumbers = Array.from(
    { length: numberOfPages.value },
    (value, index) => index + 1
  );

  function pageRange(page: number, pageCount: number) {
    let start = page - 2,
      end = page + 2;

    if (end > pageCount) {
      start -= end - pageCount;
      end = pageCount;
    }
    if (start <= 0) {
      end += (start - 1) * -1;
      start = 1;
    }

    end = end > pageCount ? pageCount : end;

    return [...availablePageNumbers.slice(start - 1, end)];
  }
  return pageRange(currentPage.value, numberOfPages.value);
});

const sortTable = (attribute: string, ascending = true): void => {
  /**
   * Sort table data crescently
   * @param {string} attribute field name
   * @returns {void}
   */
  const newData = [...props.data].sort((a: any, b: any) => {
    const first = a[attribute];
    const second = b[attribute];
    return first < second ? -1 : first > second ? 1 : 0;
  });
  if (!ascending) newData.reverse();
  sortedData.value = newData;
};

const pageFoarwrd = () => {
  if (currentPage.value < numberOfPages.value) currentPage.value++;
};

const setPage = (pageNumber: number) => {
  currentPage.value = pageNumber;
};

const pageBackarwrd = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const paginate = (array: Array<any>, pageSize: number, pageNumber: number) => {
  /**
   * Paginate Array
   * @param {Array<any>} array
   * @param {number} pageSize
   * @param {number} pageNumber
   * @returns {Array<any>}
   */
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};
</script>

<template>
  <!-- number of rows to show -->
  <div class="mb-1">
    <label for="pageNumberSelector">Rows Per Page:</label>
    <select
      id="pageNumberSelector"
      v-model="currentRowsPerPage"
      aria-label="Number of records to show on table"
      class="form-select-sm mx-3"
    >
      <option
        :value="rowsNumber"
        v-for="rowsNumber in rowsPerPage"
        :key="rowsNumber"
      >
        {{ rowsNumber as number }}
      </option>
    </select>
  </div>
  <!-- number of rows to show -->
  <!-- Table -->
  <div class="table-responsive mb-3">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" v-for="(field, index) in props.fields" :key="index">
            <div class="d-flex flex-row align-items-center">
              {{ field }}
              <div class="d-flex flex-column justify-content-centerr mx-2">
                <span class="sort-field">
                  <i
                    class="bi bi-chevron-up"
                    aria-label="Sort Icon"
                    @click="sortTable(field, true)"
                  ></i>
                </span>
                <span class="sort-field">
                  <i
                    class="bi bi-chevron-down"
                    aria-label="Sort Icon"
                    @click="sortTable(field, false)"
                  ></i>
                </span>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <TransitionGroup tag="tbody" name="fade">
        <tr v-for="item in tableData" :key="item">
          <td class="text-nowrap" v-for="field in props.fields" :key="field">
            {{ item[field] }}
          </td>
        </tr>
      </TransitionGroup>
    </table>
    <!-- Table -->
  </div>
  <!-- Pagination -->
  <nav
    aria-label="Table pagination"
    class="d-flex flex-row justify-content-end"
  >
    <ul class="pagination">
      <li class="page-item">
        <span class="page-link" @click="pageBackarwrd">
          <i class="bi bi-chevron-double-left"></i>
        </span>
      </li>
      <li class="page-item" v-for="page in paginationItems" :key="page">
        <span
          class="page-link"
          :class="{ active: currentPage == page }"
          @click="setPage(page)"
        >
          {{ page as number }}
        </span>
      </li>
      <li class="page-item">
        <span class="page-link" @click="pageFoarwrd">
          <i class="bi bi-chevron-double-right"></i>
        </span>
      </li>
    </ul>
  </nav>
  <!-- Pagination -->
</template>

<style lang="scss" scoped>
i {
  cursor: pointer;
}

.page-item {
  .active {
    background-color: var(--bs-secondary);
    color: var(--bs-white);
  }
}

.sort-field {
  i {
    color: var(--bs-gray-600);
  }
}

// Animation
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}

// Animation end

// Dark mode
[data-mode="dark"] .dark {
  .table {
    background-color: var(--bs-dark);
    color: white;
  }

  .sort-field {
    i {
      color: var(--bs-white);
    }
  }

  select,
  option {
    background-color: var(--bs-dark-alt);
    color: var(--bs-white);
  }
}
</style>
