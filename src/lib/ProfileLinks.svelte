<script>
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  export let user;
</script>

<Card class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
  <CardHeader class="border-b border-gray-200 bg-gradient-to-r from-teal-50 to-emerald-50 p-8">
    <CardTitle class="text-3xl font-bold text-gray-900">Links & Social</CardTitle>
    <p class="mt-3 text-base text-gray-600">
      Connect your profile with social media and development platforms
    </p>
  </CardHeader>
  <CardContent class="p-8">
    <div class="space-y-8">
      <!-- X (Twitter) -->
      <div class="space-y-3">
        <Label for="twitter" class="text-base font-semibold text-gray-800">
          X (Twitter) Profile
        </Label>
        <Input
          type="text"
          id="twitter"
          name="twitter"
          value={user.twitter}
          placeholder="username"
          class="h-14 w-full rounded-xl border-2 border-gray-200 px-4 text-base focus:border-teal-500"
        />
        <p class="text-sm text-gray-500">Share updates and engage with the community</p>
      </div>

      <!-- GitHub -->
      <div class="space-y-3">
        <Label for="github" class="text-base font-semibold text-gray-800">GitHub Profile</Label>
        <Input
          id="github"
          type="text"
          name="github"
          value={user.github}
          placeholder="username"
          class="h-14 w-full rounded-xl border-2 border-gray-200 px-4 text-base focus:border-teal-500"
        />
        <p class="text-sm text-gray-500">Showcase your code repositories and contributions</p>
      </div>

      <!-- Discord -->
      <div class="space-y-3">
        <Label for="discord" class="text-base font-semibold text-gray-800">Discord Username</Label>
        <Input
          type="text"
          id="discord"
          name="discord"
          value={user.discord}
          placeholder="username#1234"
          class="h-14 w-full rounded-xl border-2 border-gray-200 px-4 text-base focus:border-teal-500"
        />
        <p class="text-sm text-gray-500">Connect with the developer community on Discord</p>
      </div>

      <!-- Website -->
      <div class="space-y-3">
        <Label for="website" class="text-base font-semibold text-gray-800">Personal Website</Label>
        <Input
          type="url"
          id="website"
          name="web"
          value={user.website}
          placeholder="https://yourwebsite.com"
          class="h-14 w-full rounded-xl border-2 border-gray-200 px-4 text-base focus:border-teal-500"
        />
        <p class="text-sm text-gray-500">Your personal website or portfolio</p>
      </div>
    </div>
  </CardContent>
</Card>
