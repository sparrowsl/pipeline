<!--
  Interactive Pipeline Page
  
  This page provides an engaging, step-by-step explanation of how Pipeline works.
  
  Features:
  - Animated hero section with floating particles and pipeline lines
  - Interactive step overview with clickable step indicators
  - Scroll-triggered animations that reveal steps as user scrolls
  - Real-time progress tracking based on current step
  - Responsive design with mobile-optimized interactions
  - Dark theme following the dashboard design system
  - Keyboard accessibility for all interactive elements
  
  Design System:
  - Uses dashboard colors (purple and lime accents)
  - Follows typography scale from style guide
  - Implements consistent spacing and component patterns
-->

<script>
  import { onMount } from 'svelte';
  import { fly, fade, scale } from 'svelte/transition';
  import { quintOut, elasticOut } from 'svelte/easing';
  import Icon from '@iconify/svelte';

  let mounted = false;
  let activeStep = 0;
  let scrollY = 0;
  let innerHeight = 0;
  let stepsContainer;

  const steps = [
    {
      number: 1,
      title: 'Create Account',
      description:
        'Join the platform by creating an account to begin your journey as a creator, donor, or contributor.',
      icon: 'mdi:account-plus',
      benefits: ['Access to all features', 'Personal dashboard', 'Community connection'],
    },
    {
      number: 2,
      title: 'Submit Project',
      description:
        'Submit your project idea through our easy-to-use interface. Share your vision and goals.',
      icon: 'mdi:lightbulb-on',
      benefits: ['Showcase your idea', 'Attract supporters', 'Get feedback'],
    },
    {
      number: 3,
      title: 'Receive Support',
      description:
        'Once live, receive funding from donors or contributions from experts in design, engineering, or research.',
      icon: 'mdi:handshake',
      benefits: ['Financial backing', 'Expert guidance', 'Resource sharing'],
    },
    {
      number: 4,
      title: 'Engage Community',
      description:
        'Collaborate with a global network of creators, contributors, and supporters through regular updates.',
      icon: 'mdi:account-group',
      benefits: ['Global network', 'Ongoing collaboration', 'Community support'],
    },
    {
      number: 5,
      title: 'Track Progress',
      description:
        'Monitor progress and ensure your project meets the 9 key standards of a Digital Public Good.',
      icon: 'mdi:chart-line',
      benefits: ['Milestone tracking', 'DPG compliance', 'Progress visibility'],
    },
    {
      number: 6,
      title: 'Achieve DPG Status',
      description:
        'Once requirements are met, your project will be officially recognized as a Digital Public Good.',
      icon: 'mdi:certificate',
      benefits: ['Official recognition', 'Greater visibility', 'Enhanced credibility'],
    },
    {
      number: 7,
      title: 'Create Impact',
      description:
        'Your completed project can now make a lasting, global impact as a recognized Digital Public Good.',
      icon: 'mdi:earth',
      benefits: ['Global reach', 'Lasting impact', 'Open source legacy'],
    },
  ];

  // Create a unified pipeline gradient that flows from purple to lime across all steps
  function getPipelineGradient(stepIndex, totalSteps) {
    const progress = stepIndex / (totalSteps - 1);
    // Interpolate between purple and lime
    const hue1 = 260; // Purple hue
    const hue2 = 85; // Lime hue
    const currentHue = hue1 + (hue2 - hue1) * progress;

    return {
      primary: `hsl(${currentHue}, 65%, 65%)`,
      secondary: `hsl(${currentHue + 10}, 70%, 70%)`,
      bg: `hsl(${currentHue}, 45%, 15%)`,
    };
  }

  onMount(() => {
    mounted = true;

    // Intersection Observer for step animations
    const observer = new IntersectionObserver(
      (entries) => {
        // Find all intersecting entries and their positions
        const intersectingEntries = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => {
            const stepIndex = parseInt(entry.target.getAttribute('data-step-index') || '');
            const rect = entry.target.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distanceFromCenter = Math.abs(centerY - viewportCenter);

            return {
              stepIndex,
              distanceFromCenter,
              rect,
              entry,
            };
          })
          .filter((item) => !isNaN(item.stepIndex));

        if (intersectingEntries.length > 0) {
          // Sort by distance from viewport center and pick the closest one
          intersectingEntries.sort((a, b) => a.distanceFromCenter - b.distanceFromCenter);
          const closestStep = intersectingEntries[0];

          // Only update if it's actually a different step
          if (closestStep.stepIndex !== activeStep) {
            activeStep = closestStep.stepIndex;
          }
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        rootMargin: '-10% 0px -10% 0px',
      },
    );

    // Observe all step elements
    const stepElements = document.querySelectorAll('[data-step-index]');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  function handleStepClick(index) {
    // Only handle clicks on desktop
    if (window.innerWidth >= 768) {
      activeStep = index;
      const element = document.querySelector(`[data-step-index="${index}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  $: progress = ((activeStep + 1) / steps.length) * 100;

  // Backup scroll-based detection for better accuracy
  function updateActiveStepByScroll() {
    if (!mounted || !stepsContainer) return;

    const stepElements = stepsContainer.querySelectorAll('.step-container');
    const viewportCenter = window.innerHeight / 2;
    let closestStep = 0;
    let minDistance = Infinity;

    stepElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const distance = Math.abs(elementCenter - viewportCenter);

      // Check if element is reasonably visible (at least 20% in viewport)
      const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const visibilityRatio = visibleHeight / rect.height;

      if (visibilityRatio > 0.2 && distance < minDistance) {
        minDistance = distance;
        closestStep = index;
      }
    });

    if (closestStep !== activeStep) {
      activeStep = closestStep;
    }
  }

  // Throttled scroll handler
  let scrollTimeout;
  function handleScroll() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveStepByScroll, 100);
  }
</script>

<svelte:window bind:scrollY bind:innerHeight on:scroll={handleScroll} on:resize={handleScroll} />

<!-- Hero Section -->
<div class="relative overflow-hidden">
  <!-- Hero Content -->
  <div class="relative z-10 my-20 flex items-center justify-center px-8">
    <div class="mx-auto max-w-5xl space-y-8 text-center">
      {#if mounted}
        <div in:fly={{ y: 50, duration: 1000, easing: quintOut }}>
          <h1 class="mb-6 text-display-2xl leading-tight text-white">
            How <span
              class="bg-gradient-to-r from-dashboard-purple-500 to-dashboard-yellow-400 bg-clip-text text-transparent"
              >Pipeline</span
            > Works
          </h1>
          <p class="mx-auto max-w-3xl text-body-xl leading-relaxed text-gray-300">
            Discover the journey from idea to impact. Follow the 7-step process that transforms your
            project into a recognized Digital Public Good.
          </p>
        </div>
      {/if}
    </div>
  </div>
</div>

<!-- Steps Section -->
<div class="min-h-screen bg-dashboard-black py-12 md:py-20" bind:this={stepsContainer}>
  <div class="mx-auto max-w-6xl px-4 md:px-8">
    <div class="space-y-20 md:space-y-64">
      {#each steps as step, index}
        <div class="step-container" data-step-index={index} class:active={activeStep === index}>
          {#if mounted}
            <div
              class="md:grid md:items-center md:gap-12 md:gap-8 lg:grid-cols-2 lg:gap-16"
              class:lg:flex-row-reverse={index % 2 === 1}
              in:fly={{
                y: 50,
                duration: 800,
                delay: 200,
                easing: quintOut,
              }}
            >
              <!-- Content -->
              <div class="space-y-6" class:lg:order-2={index % 2 === 1}>
                <div class="flex items-center space-x-4">
                  <div
                    class="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-2xl transition-transform duration-500"
                    class:scale-110={activeStep === index}
                    style="background: linear-gradient(135deg, {getPipelineGradient(
                      index,
                      steps.length,
                    ).primary}, {getPipelineGradient(index, steps.length).secondary})"
                  >
                    <Icon icon={step.icon} class="h-8 w-8" />
                  </div>
                  <div>
                    <div class="text-label-lg font-medium text-gray-300">
                      Step {step.number}
                    </div>
                    <h2 class="text-heading-xl text-white">{step.title}</h2>
                  </div>
                </div>

                <!-- Mobile header - text only -->
                <div class="md:hidden">
                  <h2 class="mb-2 text-heading-xl text-white">{step.title}</h2>
                </div>

                <p class="text-body-lg leading-relaxed text-gray-300">
                  {step.description}
                </p>

                <!-- Benefits -->
                <div class="space-y-3">
                  <h3 class="text-heading-sm text-gray-300">Key Benefits:</h3>
                  <div class="space-y-2">
                    {#each step.benefits as benefit, benefitIndex}
                      <div
                        class="flex items-center space-x-3"
                        in:fly={{
                          x: -20,
                          duration: 400,
                          delay: 300 + benefitIndex * 100,
                          easing: quintOut,
                        }}
                      >
                        <div class="h-2 w-2 rounded-full bg-dashboard-yellow-400"></div>
                        <span class="text-body-md text-gray-400">{benefit}</span>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>

              <!-- Visual - hidden on mobile -->
              <div class="hidden justify-center md:flex" class:lg:order-1={index % 2 === 1}>
                <div class="relative">
                  <!-- Main circle - hidden on mobile -->
                  <div
                    class="absolute inset-0 hidden h-80 w-80 rounded-full opacity-20 blur-3xl transition-all duration-1000 md:block"
                    class:opacity-40={activeStep === index}
                    class:scale-110={activeStep === index}
                    style="background: linear-gradient(135deg, {getPipelineGradient(
                      index,
                      steps.length,
                    ).primary}, {getPipelineGradient(index, steps.length).secondary})"
                  ></div>

                  <!-- Interactive circle - simplified on mobile -->
                  <div
                    class="group relative flex h-48 w-48 items-center justify-center rounded-full
                           border-2 border-dashed transition-all duration-500 md:h-64
                           md:w-64 md:cursor-pointer"
                    class:border-dashboard-purple-500={activeStep === index}
                    class:border-gray-600={activeStep !== index}
                    class:md:scale-105={activeStep === index}
                    on:click={() => handleStepClick(index)}
                    role="button"
                    tabindex="0"
                    on:keydown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleStepClick(index);
                      }
                    }}
                  >
                    <!-- Inner content -->
                    <div class="space-y-4 p-8 text-center">
                      <div
                        class="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl text-white shadow-2xl transition-transform md:group-hover:scale-110"
                        style="background: linear-gradient(135deg, {getPipelineGradient(
                          index,
                          steps.length,
                        ).primary}, {getPipelineGradient(index, steps.length).secondary})"
                      >
                        <Icon icon={step.icon} class="h-10 w-10" />
                      </div>
                      <div class="text-display-lg font-bold text-white">
                        {step.number}
                      </div>
                    </div>

                    <!-- Animated ring - desktop only -->
                    {#if activeStep === index}
                      <div
                        class="absolute inset-0 hidden animate-ping rounded-full border-2 border-dashboard-purple-500 md:block"
                        in:scale={{ duration: 600, easing: elasticOut }}
                      ></div>
                    {/if}
                  </div>

                  <!-- Floating elements -->
                  {#if activeStep === index}
                    {#each Array(6) as _, i}
                      <div
                        class="orbital-particle absolute h-3 w-3 rounded-full opacity-60"
                        style="
                              --orbit-radius: 150px;
                              --orbit-duration: {8 + i * 2}s;
                              --orbit-delay: {i * 1.5}s;
                              --start-angle: {(i * Math.PI) / 3}rad;
                              background: linear-gradient(90deg, {getPipelineGradient(
                          index,
                          steps.length,
                        ).primary}, {getPipelineGradient(index, steps.length).secondary});
                            "
                        in:scale={{
                          delay: i * 100,
                          duration: 800,
                          easing: elasticOut,
                          start: 0,
                        }}
                      ></div>
                    {/each}
                  {/if}
                </div>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .step-container {
    opacity: 0.6;
    transition: opacity 0.5s ease-in-out;
  }

  .step-container.active {
    opacity: 1;
  }

  /* Orbital animation for particles - desktop only */
  @media (min-width: 768px) {
    .orbital-particle {
      left: 50%;
      top: 50%;
      transform-origin: 0 0;
      animation: orbit var(--orbit-duration, 10s) linear infinite;
      animation-delay: var(--orbit-delay, 0s);
    }
  }

  /* Static positioning for mobile */
  @media (max-width: 767px) {
    .orbital-particle {
      position: static;
      display: none; /* Hide orbital particles on mobile */
    }
  }

  @keyframes orbit {
    0% {
      transform: translate(-50%, -50%) rotate(var(--start-angle, 0rad))
        translateX(var(--orbit-radius, 150px)) rotate(calc(-1 * var(--start-angle, 0rad)));
    }
    100% {
      transform: translate(-50%, -50%) rotate(calc(var(--start-angle, 0rad) + 6.28319rad))
        translateX(var(--orbit-radius, 150px))
        rotate(calc(-1 * (var(--start-angle, 0rad) + 6.28319rad)));
    }
  }

  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }

  /* Custom animations */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
</style>
