<script>
    import LeaderboardItem from './LeaderboardItem.svelte';
    </script>
    
    <main class="flex flex-col w-full max-md:max-w-full">
        <header class="flex flex-wrap gap-10 justify-between items-center p-3.5 w-full bg-emerald-100 rounded-2xl max-md:max-w-full">
            <h2 class="gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap w-[123px]">Rank</h2>
            <div class="self-stretch my-auto w-0 h-9 border border-teal-400 border-solid shrink-0" role="separator" aria-hidden="true"></div>
            <h2 class="gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap min-w-[240px] w-[299px]">Contributor</h2>
            <div class="self-stretch my-auto w-0 h-9 border border-teal-400 border-solid shrink-0" role="separator" aria-hidden="true"></div>
            <h2 class="gap-2.5 self-stretch p-2.5 my-auto w-[214px]">Amount Contributed</h2>
            <div class="self-stretch my-auto w-0 h-9 border border-teal-400 border-solid shrink-0" role="separator" aria-hidden="true"></div>
            <h2 class="gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap w-[123px]">Points</h2>
          </header>
      <LeaderboardItem rank="1" username="Username" amount="$50" points="5" imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e7c0c202b455fb673a473feba19d93abcab44e07b1613ae7092511d4c5bba696?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" />
      <LeaderboardItem rank="2" username="Username" amount="-" points="10" imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4b1d2ec53aedff863ac80bbba0102923259a4c3adb2f833e1ba53fe9e8c4b4e1?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" />
   
      
    </main>