<script>
  import DateTimeFormat from './DateTimeFormat.svelte';
  import UpdateDetail from '../lib/UpdateDetail.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function showDetail() {
    dispatch('showDetail', { update });
  }

  export let update;

  const maxLength = 850;

  function truncateContent(content) {
    const strippedContent = content.replace(/<\/?[^>]+(>|$)/g, '');
    return strippedContent.length > maxLength
      ? strippedContent.slice(0, maxLength) + '...'
      : strippedContent;
  }

  const truncatedContent = truncateContent(update.body);
</script>

<div class="inline-flex h-[567.35px] flex-col items-start justify-start bg-white p-9">
  <div class="flex h-[495.35px] flex-col items-start justify-start gap-6 self-stretch">
    <div class="flex h-[188.35px] flex-col items-start justify-start gap-[13.30px] pt-[1.75px]">
      <div class="self-stretch font-['Inter'] text-[32px] font-bold leading-10 text-[#282828]">
        {update.title}
      </div>
      <div
        class="flex h-[62px] flex-col items-start justify-start gap-1 self-stretch border-b border-[#dcdedd] pb-5"
      >
        <div class="inline-flex items-center justify-start gap-3">
          <img
            class="relative h-[42px] w-[42px] rounded-[42px] border border-[#dcdedd]"
            src="https://via.placeholder.com/42x42"
            alt=""
          />
          <div class="inline-flex w-[120.07px] flex-col items-start justify-start">
            <div class="inline-flex items-center justify-start gap-2 self-stretch">
              <div
                class="h-6 w-[57.07px] font-['Inter'] text-sm font-normal leading-normal text-[#282828]"
              >
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
              <DateTimeFormat date={update.created_at} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex h-[216px] flex-col items-start justify-start gap-1 self-stretch">
      <div class="flex h-[216px] flex-col items-start justify-start gap-[30px] self-stretch pb-2">
        <div
          class="self-stretch font-['Inter'] text-base font-normal leading-[29px] text-[#282828]"
        >
          {@html truncatedContent}
        </div>
      </div>
    </div>
    <div class="h-[120px] w-[744.66px] bg-gradient-to-b from-white to-white"></div>
    <div class="inline-flex w-[744.66px] items-center justify-between">
      <div class="flex items-center justify-start gap-6">
        <div class="flex items-center justify-start gap-2">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0403 4.61998C20.5296 4.10899 19.9231 3.70363 19.2557 3.42707C18.5882 3.1505 17.8728 3.00816 17.1503 3.00816C16.4278 3.00816 15.7124 3.1505 15.045 3.42707C14.3775 3.70363 13.7711 4.10899 13.2603 4.61998L12.2003 5.67998L11.1403 4.61998C10.1086 3.58829 8.70935 3.00869 7.25031 3.00869C5.79128 3.00869 4.39201 3.58829 3.36031 4.61998C2.32862 5.65167 1.74902 7.05095 1.74902 8.50998C1.74902 9.96901 2.32862 11.3683 3.36031 12.4L12.2003 21.24L21.0403 12.4C21.5513 11.8892 21.9567 11.2828 22.2332 10.6153C22.5098 9.94788 22.6521 9.23247 22.6521 8.50998C22.6521 7.78749 22.5098 7.07209 22.2332 6.40463C21.9567 5.73717 21.5513 5.13074 21.0403 4.61998Z"
              stroke="#8C8C8C"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div
            class="h-6 w-[15.54px] font-['Inter'] text-sm font-normal leading-normal text-[#9b9e9e]"
          >
            13
          </div>
        </div>
        <div class="flex items-center justify-start gap-2">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6602 11.51C21.6636 12.8298 21.3552 14.1319 20.7602 15.31C20.0546 16.7217 18.9699 17.9092 17.6276 18.7393C16.2853 19.5694 14.7384 20.0094 13.1602 20.01C11.8403 20.0134 10.5383 19.705 9.36016 19.11L3.66016 21.01L5.56016 15.31C4.96509 14.1319 4.65671 12.8298 4.66016 11.51C4.66077 9.93173 5.10077 8.38483 5.93088 7.04253C6.76098 5.70023 7.94841 4.61554 9.36016 3.90998C10.5383 3.31491 11.8403 3.00654 13.1602 3.00998H13.6602C15.7445 3.12497 17.7132 4.00474 19.1893 5.48084C20.6654 6.95693 21.5452 8.92563 21.6602 11.01V11.51Z"
              stroke="#8C8C8C"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.82031 15.01L12.8203 10.01L7.82031 5.00998"
            stroke="#282828"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
