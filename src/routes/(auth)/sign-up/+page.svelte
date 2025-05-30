<script>
  import { applyAction, enhance } from '$app/forms';
  import { toast } from 'svelte-sonner';

  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Checkbox } from '$lib/components/ui/checkbox';

  let loading = false;
  export let form;

  $: if (form?.error) {
    toast.error(form.error);
  }
</script>

<form
  method="POST"
  class="mx-auto flex w-[60%] flex-col max-md:w-[90%]"
  use:enhance={() => {
    loading = true;

    return async ({ result }) => {
      if (result.type === 'redirect') {
        toast.success('login successful');
      }

      await applyAction(result);
      loading = false;
    };
  }}
>
  <h2 class="mb-2 text-display-lg text-dashboard-black">Register</h2>
  <p class="mb-8 text-body-lg text-gray-600">Enter your Info to signup for Pipeline</p>

  <div class="flex flex-col gap-3 font-medium">
    <Label for="name" class="block text-label-lg font-medium text-dashboard-black">Name</Label>
    <Input
      type="text"
      id="name"
      name="name"
      required
      class="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-dashboard-black shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-dashboard-purple-500 focus:shadow-md focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      placeholder="Enter your full name"
    />
  </div>

  <div class="mt-6 flex flex-col gap-3 font-medium">
    <Label for="email" class="block text-label-lg font-medium text-dashboard-black">Email</Label>
    <Input
      type="email"
      id="email"
      name="email"
      required
      class="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-dashboard-black shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-dashboard-purple-500 focus:shadow-md focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      placeholder="Enter your email"
    />
  </div>

  <div class="mt-6 flex flex-col gap-3 font-medium">
    <Label for="password" class="block text-label-lg font-medium text-dashboard-black"
      >Password</Label
    >
    <Input
      type="password"
      id="password"
      name="password"
      required
      class="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-dashboard-black shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-dashboard-purple-500 focus:shadow-md focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      placeholder="Enter your password"
    />
  </div>

  <div class="mt-8 flex w-full flex-wrap items-center justify-between gap-6 text-sm leading-none">
    <span class="text-gray-600">Already have an account?</span>
    <a
      href="/sign-in"
      class="font-semibold text-dashboard-purple-500 transition-colors hover:text-dashboard-purple-600"
      >Sign In</a
    >
  </div>

  <Button
    type="submit"
    disabled={loading}
    variant="default"
    class="mt-8 w-full rounded-xl bg-dashboard-purple-500 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-dashboard-purple-600 hover:shadow-xl disabled:bg-gray-400 disabled:shadow-none"
  >
    {loading ? 'Signing up...' : 'Sign up'}
  </Button>

  <div class="mt-6 flex w-full gap-2 text-sm font-light">
    <Checkbox id="remember" name="rememberMe" />
    <Label for="remember" class="font-light text-gray-600">Remember me</Label>
  </div>
</form>
