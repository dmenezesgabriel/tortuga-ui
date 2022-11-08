<template>
  <header class="bg-gradient-primary">
    <div class="container-fluid mb-3 p-3">
      <div class="row">
        <div class="col">
          <div class="dashboard-title d-flex flex-column">
            <div class="title-wrapper">
              <h1 class="text-white">
                <slot name="title"></slot>
              </h1>
            </div>
            <hr style="width: 100px; height: 3px" class="bg-dark" />
            <small class="text-white">
              <slot name="subtitle"></slot>
            </small>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
