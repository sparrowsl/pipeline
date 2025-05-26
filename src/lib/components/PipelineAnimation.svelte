<script>
  import { onMount } from 'svelte';
  import { animate } from 'animejs';

  let animationContainer;

  onMount(() => {
    // Create the main pipeline structure
    const pipeline = document.createElement('div');
    pipeline.className = 'pipeline-main';
    animationContainer.appendChild(pipeline);

    // Create flowing particles
    const particles = [];
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: 8px;
        height: 8px;
        background: linear-gradient(45deg, #10b981, #34d399);
        border-radius: 50%;
        opacity: 0;
        box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
      `;
      animationContainer.appendChild(particle);
      particles.push(particle);
    }

    // Create geometric shapes for elegance
    const shapes = [];
    for (let i = 0; i < 6; i++) {
      const shape = document.createElement('div');
      shape.className = 'geometric-shape';
      shape.style.cssText = `
        position: absolute;
        width: ${20 + i * 8}px;
        height: ${20 + i * 8}px;
        border: 2px solid rgba(16, 185, 129, 0.3);
        border-radius: ${i % 2 === 0 ? '50%' : '4px'};
        opacity: 0;
      `;
      animationContainer.appendChild(shape);
      shapes.push(shape);
    }

    // Create spark elements
    const sparks = [];
    for (let i = 0; i < 8; i++) {
      const spark = document.createElement('div');
      spark.className = 'spark';
      spark.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: #fbbf24;
        border-radius: 50%;
        opacity: 0;
        box-shadow: 0 0 8px rgba(251, 191, 36, 0.8);
      `;
      animationContainer.appendChild(spark);
      sparks.push(spark);
    }

    // Create main pipeline lines
    const lines = [];
    for (let i = 0; i < 3; i++) {
      const line = document.createElement('div');
      line.className = 'pipeline-line';
      line.style.cssText = `
        position: absolute;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.6), transparent);
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
      `;
      animationContainer.appendChild(line);
      lines.push(line);
    }

    // Position elements responsively
    const positionElements = () => {
      const rect = animationContainer.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Position shapes in a flowing pattern
      shapes.forEach((shape, i) => {
        const angle = (i / shapes.length) * Math.PI * 2;
        const radius = 80 + i * 20;
        shape.style.left = `${centerX + Math.cos(angle) * radius - 25}px`;
        shape.style.top = `${centerY + Math.sin(angle) * radius - 25}px`;
      });

      // Position pipeline lines
      lines.forEach((line, i) => {
        line.style.left = `${centerX - 150}px`;
        line.style.top = `${centerY - 20 + i * 20}px`;
        line.style.width = '300px';
      });

      // Position particles at start
      particles.forEach((particle, i) => {
        particle.style.left = `${centerX - 150}px`;
        particle.style.top = `${centerY - 40 + i * 8}px`;
      });

      // Position sparks randomly
      sparks.forEach((spark, i) => {
        spark.style.left = `${centerX + Math.random() * 200 - 100}px`;
        spark.style.top = `${centerY + Math.random() * 200 - 100}px`;
      });
    };

    positionElements();

    // Animate geometric shapes appearing
    animate(shapes, {
      opacity: [
        { to: 0.6, ease: 'outElastic', duration: 800 },
        { to: 0.3, ease: 'inOutSine', duration: 1000 },
      ],
      scale: [
        { to: 1, ease: 'outElastic', duration: 1000 },
        { to: 0.8, ease: 'inOutSine', duration: 1200 },
      ],
      rotate: [
        { to: 180, ease: 'inOutQuad', duration: 2000 },
        { to: 360, ease: 'inOutQuad', duration: 2000 },
      ],
      delay: (_, i) => i * 200,
      loop: true,
      loopDelay: 1000,
    });

    // Animate pipeline lines
    animate(lines, {
      opacity: [
        { to: 1, ease: 'outQuart', duration: 800 },
        { to: 0.5, ease: 'inOutSine', duration: 1000 },
      ],
      scaleX: [
        { to: 1, ease: 'outQuart', duration: 1000 },
        { to: 0.7, ease: 'inOutSine', duration: 1200 },
      ],
      delay: (_, i) => 500 + i * 300,
      loop: true,
      loopDelay: 2000,
    });

    // Animate flowing particles
    animate(particles, {
      opacity: [
        { to: 1, ease: 'outQuad', duration: 500 },
        { to: 0, ease: 'inQuad', duration: 1000 },
      ],
      x: [{ to: 300, ease: 'inOutSine', duration: 2500 }],
      y: (_, i) => [{ to: Math.sin(i) * 50, ease: 'inOutSine', duration: 2500 }],
      scale: [
        { to: 1, ease: 'outQuad', duration: 500 },
        { to: 0.5, ease: 'inQuad', duration: 1000 },
      ],
      delay: (_, i) => 1000 + i * 150,
      loop: true,
      loopDelay: 1500,
    });

    // Animate sparks
    animate(sparks, {
      opacity: [
        { to: 1, ease: 'outQuart', duration: 300 },
        { to: 0, ease: 'inQuart', duration: 700 },
      ],
      scale: [
        { to: 1.5, ease: 'outBack', duration: 400 },
        { to: 0, ease: 'inQuart', duration: 600 },
      ],
      x: (_, i) => [{ to: Math.cos(i * 0.8) * 80, ease: 'outQuart', duration: 800 }],
      y: (_, i) => [{ to: Math.sin(i * 0.8) * 80, ease: 'outQuart', duration: 800 }],
      delay: (_, i) => 2000 + i * 100,
      loop: true,
      loopDelay: 3000,
    });

    // Reposition on resize
    const resizeObserver = new ResizeObserver(positionElements);
    resizeObserver.observe(animationContainer);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  });
</script>

<div
  bind:this={animationContainer}
  class="relative h-full w-full overflow-hidden"
  style="min-height: 300px;"
>
  <!-- Background gradient overlay for depth -->
  <div class="absolute inset-0 bg-gradient-to-br from-transparent"></div>
</div>

<style>
  :global(.particle) {
    filter: blur(0.5px);
  }

  :global(.spark) {
    filter: blur(0.3px);
  }

  :global(.geometric-shape) {
    backdrop-filter: blur(1px);
  }

  :global(.pipeline-line) {
    filter: blur(0.2px);
  }
</style>
