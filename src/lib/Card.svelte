<script>
  import ProgressBar from './ProgressBar.svelte';
  import ContributeButton from './ContributeButton.svelte';
  import CategoryTag from './CategoryTag.svelte';
  import DPGRating from './DPGRating.svelte';
  import { amountFormat } from '$lib/utils/amountFormat.js';
  import { Card, CardHeader, CardContent, CardFooter } from '$lib/components/ui/card';
  import { Progress } from '$lib/components/ui/progress';

  import { onMount } from 'svelte';
  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function closeDropdown(event) {
    if (event.target.closest('.dropdown-container')) return;
    isOpen = false;
  }

  export let project;

  const getImageLink = () => {
    return project.banner_image
      ? project.banner_image
      : 'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/defaults/banner.png?t=2024-11-20T15%3A45%3A51.937Z';
  };

  onMount(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  });

  function truncateText(text, maxLength = 20) {
    if (!text) return '';
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }

  // Generate a unique gradient for each card based on project id
  const getGradientColors = () => {
    const gradients = [
      'from-slate-700/30 via-gray-700/30 to-zinc-700/30',
      'from-gray-700/30 via-slate-700/30 to-stone-700/30',
      'from-zinc-700/30 via-gray-700/30 to-slate-700/30',
      'from-stone-700/30 via-zinc-700/30 to-gray-700/30',
      'from-neutral-700/30 via-slate-700/30 to-zinc-700/30',
      'from-slate-800/25 via-gray-800/25 to-zinc-800/25',
      'from-gray-800/25 via-neutral-800/25 to-slate-800/25',
      'from-zinc-800/25 via-stone-800/25 to-gray-800/25',
    ];
    const index = project.id ? project.id.length % gradients.length : 0;
    return gradients[index];
  };
</script>

<div class="perspective-1000 group relative w-full">
  <!-- Frosted Glass Card -->
  <div
    class="frosted-glass-card relative h-full w-full transform-gpu overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]"
  >
    <!-- Content Container -->
    <div class="relative flex h-full flex-col overflow-hidden rounded-3xl">
      <!-- Image Header -->
      <div class="relative h-48 overflow-hidden">
        <a href="/project/{project.id}" class="block h-full">
          <div class="relative h-full w-full">
            <img
              loading="lazy"
              src={getImageLink()}
              alt={project.title}
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <!-- Subtle overlay for text readability -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            ></div>
          </div>
        </a>

        <!-- DPG Rating Badge -->
        <div class="absolute right-4 top-4">
          <div class="frosted-badge">
            <DPGRating rating={project.dpgStatusCount} />
          </div>
        </div>
      </div>

      <!-- Content Section -->
      <div class="relative z-10 flex flex-grow flex-col space-y-4 p-6">
        <!-- Title -->
        <div>
          <a href="/project/{project.id}" class="group/title">
            <h2
              class="text-xl font-bold leading-tight text-gray-800 transition-colors duration-200 group-hover/title:text-gray-700"
            >
              {truncateText(project.title, 25)}
            </h2>
          </a>
        </div>

        <!-- SDG Tags -->
        <div class="flex flex-wrap gap-2">
          {#each project?.tags || [] as tag}
            <div class="transform transition-transform duration-200 hover:scale-110">
              <CategoryTag {tag} />
            </div>
          {/each}
        </div>

        <!-- Spacer -->
        <div class="flex-grow"></div>

        <!-- Funding Information -->
        <div class="space-y-3">
          <div class="text-gray-700">
            <div class="flex flex-wrap items-baseline gap-1">
              <span class="text-lg font-bold text-gray-800"
                >${amountFormat(project.current_funding || 0)}</span
              >
              <span class="text-sm text-gray-600">raised of</span>
              <span class="text-lg font-bold text-gray-800"
                >${amountFormat(project.funding_goal || 0)}</span
              >
            </div>
          </div>

          <!-- Custom Progress Bar -->
          <div class="relative">
            <div class="h-2 overflow-hidden rounded-full border border-gray-300/40 bg-gray-200/60">
              <div
                class="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 shadow-sm transition-all duration-1000 ease-out"
                style="width: {Math.min(
                  (project.current_funding / project.funding_goal) * 100,
                  100,
                )}%"
              ></div>
            </div>
            <!-- Progress glow effect -->
            <div
              class="absolute top-0 h-2 rounded-full bg-gradient-to-r from-blue-400/50 to-blue-300/50 blur-sm transition-all duration-1000 ease-out"
              style="width: {Math.min(
                (project.current_funding / project.funding_goal) * 100,
                100,
              )}%"
            ></div>
          </div>
        </div>

        <!-- Contribute Button -->
        <div class="pt-2">
          <ContributeButton {project} />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .frosted-glass-card {
    transform-style: preserve-3d;
    /* Main frosted glass effect */
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 24px;

    /* Subtle shadow for depth */
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.08),
      0 4px 16px rgba(0, 0, 0, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.6),
      inset 0 -1px 0 rgba(255, 255, 255, 0.2);
  }

  .frosted-badge {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    padding: 8px 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  }

  .perspective-1000 {
    perspective: 1000px;
  }

  /* Enhanced frosted glass texture */
  .frosted-glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
    border-radius: 24px 24px 0 0;
    z-index: 10;
  }

  .frosted-glass-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    bottom: 0;
    background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    border-radius: 24px 0 0 24px;
    z-index: 10;
  }

  /* Hover effects for enhanced frosted glass */
  .group:hover .frosted-glass-card {
    background: rgba(255, 255, 255, 0.35);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.12),
      0 8px 24px rgba(0, 0, 0, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 0.7),
      inset 0 -1px 0 rgba(255, 255, 255, 0.3);
  }

  /* Enhanced glass reflection on hover */
  .frosted-glass-card:hover::before {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
  }

  .frosted-glass-card:hover::after {
    background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.7), transparent);
  }

  /* Subtle texture pattern for frosted effect */
  .frosted-glass-card {
    background-image: radial-gradient(
        circle at 20% 80%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  }
</style>
