<script>
  import ProfileForm from '$lib/ProfileForm.svelte';
  import ProfileLinks from '$lib/ProfileLinks.svelte';
  import Settings from '$lib/Settings.svelte';
  import Interests from '$lib/Interests.svelte';
  import Icon from '@iconify/svelte';
  import { applyAction, enhance } from '$app/forms';
  import { toast } from 'svelte-sonner';

  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import { Textarea } from '$lib/components/ui/textarea';

  let activeNavItem = 'Profile';
  let loading = false;
  export let data;
  let user = data.user;
</script>

<!-- Main Content Container -->
<div class="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
  <!-- Content Section -->
  <section class="mx-auto max-w-7xl py-20">
    <form
      action="?/updateProfile"
      method="POST"
      class="flex w-full flex-col items-center"
      enctype="multipart/form-data"
      use:enhance={() => {
        return async ({ result }) => {
          loading = true;
          if (result.type === 'failure') {
            toast.error(result?.data?.error || 'failed to edit profile');
          } else if (result.type === 'error') {
            toast.error('could not update profile');
          }
          toast.success('Profile updated successfully');
          loading = false;
          await applyAction(result);
        };
      }}
    >
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <!-- Left Column - Profile Information -->
        <div class="space-y-8">
          <ProfileForm {user} />
        </div>

        <!-- Right Column - Links & Social -->
        <div class="space-y-8">
          <ProfileLinks {user} />
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-16">
        <Button
          type="submit"
          class="h-12 rounded-xl bg-teal-600 px-8 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-teal-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-teal-600"
          disabled={loading}
        >
          {loading ? 'Updating Profile...' : 'Update Profile'}
        </Button>
      </div>
    </form>
  </section>
</div>

<style>
  .selected {
    transform: scale(1.05);
    font-weight: 600;
  }
</style>
