<script>
  export let user = {};

  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import Icon from '@iconify/svelte';

  let bannerImage = user.banner_url || null;
  let profileImage = user.image_url || null;

  function handleBannerUpload(event) {
    const file = event.target.files[0];
    if (file) {
      bannerImage = URL.createObjectURL(file);
    }
  }

  function handleProfileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      profileImage = URL.createObjectURL(file);
    }
  }
</script>

<Card class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
  <CardHeader class="border-b border-gray-200 bg-gradient-to-r from-teal-50 to-emerald-50 p-8">
    <CardTitle class="text-3xl font-bold text-gray-900">Profile Information</CardTitle>
    <p class="mt-3 text-base text-gray-600">Update your profile details and upload your images</p>
  </CardHeader>
  <CardContent class="p-8">
    <Input type="hidden" name="old_image" value={user.image_url} />
    <input type="hidden" name="old_banner" value={user.banner_url} />

    <!-- Image Upload Section -->
    <div class="relative mb-[100px] h-[295.61px] self-stretch">
      <label for="banner-upload" class="cursor-pointer">
        <div
          class="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-gray-100 transition-colors hover:border-teal-400 hover:bg-gray-50"
        >
          {#if bannerImage}
            <img src={bannerImage} alt="Banner" class="h-full w-full rounded-2xl object-cover" />
          {:else}
            <div class="text-center text-gray-500">
              <Icon icon="mdi:image-plus" class="mx-auto mb-2 text-4xl" />
              <div class="text-lg font-medium">Click to upload banner image</div>
              <div class="text-sm">PNG, JPG, WEBP up to 10MB</div>
            </div>
          {/if}
        </div>
      </label>
      <input
        type="file"
        id="banner-upload"
        class="hidden"
        name="banner"
        accept="image/*"
        on:change={handleBannerUpload}
      />

      <label for="profile-upload" class="cursor-pointer">
        <div
          class="absolute bottom-[-92.6px] left-[46.69px] flex h-[185.19px] w-[185.19px] items-center justify-center overflow-hidden rounded-full border-8 border-white bg-gray-100 shadow-lg transition-shadow hover:shadow-xl max-lg:left-[20.69px] max-md:left-[46.69px]"
        >
          {#if profileImage}
            <img src={profileImage} alt="Profile" class="h-full w-full rounded-full object-cover" />
          {:else}
            <div class="text-center text-gray-500">
              <Icon icon="mdi:account-plus" class="mx-auto mb-1 text-3xl" />
              <div class="text-sm font-medium">Profile Picture</div>
            </div>
          {/if}
        </div>
      </label>
      <input
        type="file"
        id="profile-upload"
        class="hidden"
        name="image"
        accept="image/*"
        on:change={handleProfileUpload}
      />
    </div>

    <!-- Form Fields -->
    <div class="space-y-8">
      <!-- Full Name -->
      <div class="space-y-3">
        <Label for="firstName" class="text-base font-semibold text-gray-800">Full Name *</Label>
        <Input
          type="text"
          id="firstName"
          name="name"
          value={user.display_name}
          required
          class="h-14 w-full rounded-xl border-2 border-gray-200 px-4 text-base focus:border-teal-500"
        />
        <p class="text-sm text-gray-500">This is how your name will appear on your profile</p>
      </div>

      <!-- Email -->
      <div class="space-y-3">
        <Label for="email" class="text-base font-semibold text-gray-800">Email Address</Label>
        <Input
          type="email"
          id="email"
          value={user.email}
          disabled
          class="h-14 w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 text-base"
        />
        <p class="text-sm text-gray-500">Email address cannot be changed</p>
      </div>

      <!-- Bio -->
      <div class="space-y-3">
        <Label for="bio" class="text-base font-semibold text-gray-800">Bio</Label>
        <Textarea
          id="bio"
          name="bio"
          value={user.bio}
          placeholder="Tell us a little bit about yourself and your interests..."
          class="min-h-[120px] w-full resize-none rounded-xl border-2 border-gray-200 px-4 py-3 text-base focus:border-teal-500"
        />
        <p class="text-sm text-gray-500">
          Share your background, interests, and what drives your work
        </p>
      </div>
    </div>
  </CardContent>
</Card>
