<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let activeTab: string = 'curva';
  const dispatch = createEventDispatcher<{ select: string }>();

  const tabs = [
    { id: 'curva', label: 'Curva de Rendimiento' },
    { id: 'especificaciones', label: 'Especificaciones' },
    { id: 'guia', label: 'Guía de Compra' },
    { id: 'garantia', label: 'Garantía' },
    { id: 'preguntas', label: 'Preguntas y Reviews' }
  ];
</script>

<nav class="border-b border-white/10 bg-[#0B0D1B]" aria-label="Secciones del producto">
  <div class="max-w-[1280px] mx-auto px-6">
    <div class="flex gap-8 overflow-x-auto">
      {#each tabs as tab}
        <button
          type="button"
          class="py-4 text-sm font-ui font-medium whitespace-nowrap border-b-2 transition-colors {activeTab === tab.id ? 'text-brand border-brand' : 'text-white/60 border-transparent hover:text-white'}"
          on:click={() => dispatch('select', tab.id)}
        >
          {tab.label}
        </button>
      {/each}
    </div>
  </div>
</nav>
