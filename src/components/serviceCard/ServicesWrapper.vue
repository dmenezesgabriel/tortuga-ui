<script setup lang="ts">
import ServiceContent from "@/components/serviceCard/ServiceContent.vue";
import ServicePicture from "@/components/serviceCard/ServicePicture.vue";
import type IService from "@/interfaces/IService";

const props = defineProps({
  services: {
    type: Array<IService>,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <div
      :class="service.reverse ? 'd-flex flex-row-reverse flex-wrap' : 'row'"
      v-for="(service, index) in props.services"
      :key="index"
    >
      <ServiceContent
        :title="service.title"
        :icon="service.icon"
        :buttonText="service.buttonText"
        :buttonTo="service.buttonTo"
      >
        {{ service.description as string }}
      </ServiceContent>
      <ServicePicture
        :imageSrc="service.imageSrc"
        :imageAlt="service.imageAlt"
        :imagePosition="service.imagePosition"
      />
    </div>
  </div>
</template>
