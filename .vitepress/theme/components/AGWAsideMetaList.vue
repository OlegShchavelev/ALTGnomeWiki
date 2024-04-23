<script setup lang="ts">
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { getDomainName } from './../composables/link'

export interface Lists {
    label?: string;
    name?: string;
    link: string;
}

const props = defineProps<{
    lists: Lists[]
}>();

</script>

<template>
    <dl>
        <template v-for="list in lists">
            <dt v-if="list.label">
                {{ list.label }}
            </dt>
            <dd>
                <VPLink :href="list.link">{{ list?.name ?? getDomainName(list.link) }} </VPLink>
            </dd>
        </template>
    </dl>
</template>

<style scoped>
dl {
    margin-top: 0;
    margin-bottom: 0;
}

dt,
dd {
    padding-left: 16px;
    padding-right: 16px;
}

dt {
    font-size: 12px;
    color: var(--vp-c-text-2);
    font-weight: 500;
}

dd {
    margin-left: 0;
    font-size: 14px;
    padding-bottom: 8px;
    margin-bottom: 8px;
}

dd:not(:last-child) {
    border-bottom: 1px solid var(--vp-c-divider);
}
</style>