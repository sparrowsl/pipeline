<script>
  import { onMount } from 'svelte';
  import { dateTimeFormat } from '$lib/utils/dateTimeFormat.js';
  import UpdateDetail from '../lib/UpdateDetail.svelte';
  import { createEventDispatcher } from 'svelte';
  import Icon from '@iconify/svelte';

  const dispatch = createEventDispatcher();

  function showDetail() {
    dispatch('showDetail', { update });
  }

  export let update;

  console.log(update);

  const maxLength = 850;

  function truncateContent(content) {
    const strippedContent = content.replace(/<\/?[^>]+(>|$)/g, '');
    return strippedContent.length > maxLength
      ? strippedContent.slice(0, maxLength) + '...'
      : strippedContent;
  }

  const truncatedContent = truncateContent(update.body);

  const defaultImageUrl =
    'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/defaults/userProfile.png';

  let date = '';
  date = dateTimeFormat(update.created_at);
</script>

<div class="inline-flex flex-col items-start justify-start bg-white p-9">
  <div class="flex flex-col items-start justify-start gap-2 self-stretch">
    <div class=" flex flex-col items-start justify-start gap-[13.30px] pt-[1.75px]">
      <div class="self-stretch font-['Inter'] text-[32px] font-bold leading-10 text-[#282828]">
        {update.title}
      </div>
      <div
        class="flex h-[62px] flex-col items-start justify-start gap-1 self-stretch border-b border-[#dcdedd] pb-5"
      >
        <div class="inline-flex items-center justify-start gap-3">
          <img
            loading="lazy"
            src={update.userProfile.image && update.userProfile.image !== ''
              ? update.userProfile.image
              : defaultImageUrl}
            alt="User Profile"
            class="relative h-[42px] w-[42px] rounded-[42px] border border-[#dcdedd]"
          />

          <div class="inline-flex w-full flex-col justify-between">
            <div class="inline-flex items-center justify-between gap-2 self-stretch">
              <div class=" h-6 font-['Inter'] text-sm font-normal leading-normal text-[#282828]">
                {update.userProfile.name}
              </div>
              <div
                class="inline-flex flex-col items-start justify-center rounded-[3px] bg-[#05ce78] px-[5px] py-[0.25px]"
              >
                <div class="font-['Inter'] text-xs font-bold leading-[18px] text-white">
                  {update.user_id === update.userProfile.user_id ? 'Creator' : 'Member'}
                </div>
              </div>
            </div>
            <div
              class="h-[18px] self-stretch font-['Inter'] text-[13px] font-normal leading-[18px] text-[#282828]/50"
            >
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start justify-start gap-1 self-stretch">
      <div class="flex flex-col items-start justify-start gap-[30px] self-stretch pb-2">
        <div
          class="self-stretch font-['Inter'] text-base font-normal leading-[29px] text-[#282828]"
        >
          {@html truncatedContent}
        </div>
      </div>
    </div>
    <div class="w-[744.66px] bg-gradient-to-b from-white to-white"></div>
    <div class="inline-flex w-[744.66px] items-center justify-between">
      <div class="flex items-center justify-start gap-6">
        <div class="flex items-center justify-start gap-2">
          <Icon icon="mdi:chat-outline" class="text-2xl" />
          <div
            class="h-6 w-[15.25px] font-['Inter'] text-sm font-normal leading-normal text-[#9b9e9e]"
          >
            16
          </div>
        </div>
      </div>
      <button
        on:click={showDetail}
        class="flex items-center justify-center gap-1.5 border border-[#d1d1d1] bg-white px-[19px] py-[11.50px]"
      >
        <div class="text-center text-sm font-normal text-[#222222]">Read more</div>
        <Icon icon="mdi:chevron-right" class="text-2xl" />
      </button>
    </div>
  </div>
</div>
