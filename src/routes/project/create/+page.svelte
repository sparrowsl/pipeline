<script>
  import ProjectBasics from '../ProjectBasics.svelte';
  import { applyAction, enhance } from '$app/forms';
  import { toast } from 'svelte-sonner';

  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Separator } from '$lib/components/ui/separator';
  import Icon from '@iconify/svelte';

  import { goto } from '$app/navigation';

  let loading = false;
  let loadingMatchingDPGs = false;
  let project = { title: '', bio: '' };
  let matchProjects = [];
</script>

<div class="min-h-screen bg-dashboard-black">
  <!-- Breadcrumb Navigation -->
  <nav class="pt-8 mb-6">
    <div class="container px-8 mx-auto max-w-7xl">
      <div class="flex items-center gap-2">
        <a
          href="/explore"
          class="flex items-center gap-2 font-medium text-gray-300 transition-colors text-body-lg hover:text-white"
        >
          <Icon icon="lucide:arrow-left" class="w-5 h-5" />
          Explore
        </a>
        <Icon icon="lucide:chevron-right" class="w-4 h-4 text-gray-500" />
        <span class="text-gray-400 text-body-lg">Create Project</span>
      </div>
    </div>
  </nav>

  <!-- Header Section -->
  <div class="mb-12">
    <div class="container px-8 mx-auto max-w-7xl">
      <div class="text-center">
        <h1 class="mb-4 font-semibold leading-tight text-white text-display-2xl">
          Create a Project
        </h1>
        <p class="max-w-2xl mx-auto text-gray-300 text-body-xl">
          Share your project with the world and start building your community.
        </p>
      </div>
    </div>
  </div>

  <!-- Main Form Container -->
  <div class="container px-8 pb-20 mx-auto max-w-7xl">
    <form
      action=""
      method="post"
      enctype="multipart/form-data"
      use:enhance={() => {
        loading = true;
        return async ({ result }) => {
          if (result.type === 'success' && result.data.redirectTo) {
            toast.success('Project has been created successfully');
            goto(result.data.redirectTo);
          } else if (result.type === 'failure') {
            toast.info(result?.data?.error || 'Could not create project');
          } else if (result.type === 'error') {
            toast.error('Could not create a project');
          }

          await applyAction(result);
          loading = false;
        };
      }}
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <!-- Left Column - Project Basics -->
        <div class="space-y-8">
          <div
            class="p-6 border rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-900 shadow-card"
          >
            <div class="mb-6">
              <h2 class="mb-2 font-semibold text-white text-heading-xl">Project Basics</h2>
              <p class="text-gray-300 text-body-lg">
                Tell us about your project and what makes it special
              </p>
            </div>
            <ProjectBasics bind:project />
            <input type="hidden" name="matchedDPGs" value={JSON.stringify(matchProjects)} />
          </div>
        </div>

        <!-- Right Column - Links & Funding -->
        <div class="space-y-8">
          <!-- Links Section -->
          <div
            class="p-6 border rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-900 shadow-card"
          >
            <div class="mb-6">
              <h2 class="mb-2 font-semibold text-white text-heading-xl">Links & Social</h2>
              <p class="text-gray-300 text-body-lg">
                Connect your project with social media and development platforms
              </p>
            </div>

            <div class="space-y-6">
              <!-- GitHub -->
              <div class="space-y-2">
                <Label for="github" class="block font-medium text-gray-300 text-label-lg">
                  GitHub Repository
                </Label>
                <Input
                  type="url"
                  id="github"
                  name="github"
                  placeholder="https://github.com/username/repo"
                  class="w-full px-4 py-3 text-white border rounded-lg border-dashboard-gray-600 bg-dashboard-gray-800 text-body-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
                />
                <p class="text-gray-400 text-body-sm">
                  Follow
                  <a
                    href="https://docs.github.com/en/webhooks/using-webhooks/creating-webhooks"
                    target="_blank"
                    class="font-medium underline text-dashboard-purple-500 hover:text-dashboard-purple-400"
                  >
                    this guide
                  </a>
                  to add the
                  <a
                    href="https://pipeline-tau.vercel.app/api/github/webhook"
                    target="_blank"
                    class="font-medium underline text-dashboard-purple-500 hover:text-dashboard-purple-400"
                  >
                    webhook
                  </a>
                  for automatic updates
                </p>
              </div>

              <!-- Website -->
              <div class="space-y-2">
                <Label for="website" class="block font-medium text-gray-300 text-label-lg"
                  >Website</Label
                >
                <Input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="https://yourwebsite.com"
                  class="w-full px-4 py-3 text-white border rounded-lg border-dashboard-gray-600 bg-dashboard-gray-800 text-body-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
                />
                <p class="text-gray-400 text-body-sm">Official project website or landing page</p>
              </div>
            </div>
          </div>

          <!-- Funding Section -->
          <div
            class="p-6 border rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-900 shadow-card"
          >
            <div class="mb-6">
              <h2 class="mb-2 font-semibold text-white text-heading-xl">Funding Goals</h2>
              <p class="text-gray-300 text-body-lg">
                Set your funding goals and payment preferences
              </p>
            </div>

            <!-- Funding Goal -->
            <div class="space-y-2">
              <Label for="fundingGoal" class="block font-medium text-gray-300 text-label-lg">
                Funding Goal (USD)
              </Label>
              <Input
                id="fundingGoal"
                type="number"
                name="funding_goal"
                min="0"
                step="1"
                placeholder="10000"
                class="w-full px-4 py-3 text-white border rounded-lg border-dashboard-gray-600 bg-dashboard-gray-800 text-body-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
              />
              <p class="text-gray-400 text-body-sm">
                Set a realistic funding target for your project (minimum $100)
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-center mt-12">
        <Button
          type="submit"
          disabled={loading}
          class="px-8 py-3 font-medium transition-colors rounded-xl bg-dashboard-yellow-400 text-label-lg text-dashboard-black hover:bg-dashboard-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-yellow-400 disabled:pointer-events-none disabled:opacity-50"
        >
          {#if loading}
            <span class="flex items-center gap-2">
              <Icon icon="lucide:loader-2" class="w-4 h-4 animate-spin" />
              Creating Project...
            </span>
          {:else}
            Create Project
          {/if}
        </Button>
      </div>
    </form>
  </div>
</div>
