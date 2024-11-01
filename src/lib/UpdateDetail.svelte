<script>
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    function goBack() {
       console.log("goBack function triggered");
      dispatch('goBack'); 
    }

    let newComment = '';

    function addComment() {
        if (newComment.trim()) {
            console.log("Adding comment:", newComment);
            newComment = ''; 
        }
    }
  </script>


<div class=" h-[3815px] px-[18px] flex-col justify-start items-start inline-flex">
    <div class="self-stretch h-[89px] pb-12 flex-col justify-start items-start flex">
        <div class="px-[19px] py-[11.50px] bg-white border border-[#d1d1d1] justify-center items-center inline-flex">
            <div class="flex items-center justify-start">
                <div class="flex items-center justify-center w-3 h-3">
                    <div class="relative flex flex-col items-start justify-start w-3 h-3"></div>
                </div>
                <button class="inline-flex flex-col items-start justify-start pl-3" on:click={goBack}>
                    <div class="flex flex-col items-center justify-start">
                        
                        <div class="text-center text-[#222222] text-sm font-normal font-['Inter'] leading-[17.50px] flex gap-2 ml-[-10px]">
                            <svg width="13" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="icon--chevron-left">
                                <path id="Vector" d="M3.45996 6.65996L8.65996 11.86L9.65996 10.86L5.45996 6.65996L9.65996 2.45996L8.65996 1.45996" fill="black"/>
                                </g>
                                </svg>

                                All Updates</div>
                    </div>
                </button>
            </div>
        </div>
    </div>
    <div class="self-stretch h-[3135px] flex-col justify-start items-start gap-6 flex">
        <div class="self-stretch h-[187px] flex-col justify-start items-start gap-3 flex">
            <div class="inline-flex items-start self-stretch justify-start">
                <div class="self-stretch pt-[1.75px] pb-[1.25px] flex-col justify-start items-start inline-flex">
                    <div class="text-[#282828]/50 text-[13px] font-normal font-['Inter'] uppercase leading-[18px]">Update #1</div>
                </div>
            </div>
            <div class="self-stretch text-[#282828] text-[32px] font-bold font-['Inter'] leading-10">As the sun rises on Thunder Road a dice car<br/>appears on the horizon.</div>
            <div class="self-stretch h-[62px] pb-5 border-b border-[#dcdedd] flex-col justify-start items-start gap-1 flex">
                <div class="inline-flex items-center justify-start gap-3">
                    <img class="w-[42px] h-[42px] relative rounded-[42px] border border-[#dcdedd]" src="https://via.placeholder.com/42x42" alt="" />
                    <div class="w-[120.07px] flex-col justify-start items-start inline-flex">
                        <div class="inline-flex items-center self-stretch justify-start gap-2">
                            <div class="w-[57.07px] h-6 text-[#282828] text-sm font-normal font-['Inter'] leading-normal">9thLevel</div>
                            <div class="px-[5px] py-[0.25px] bg-[#05ce78] rounded-[3px] flex-col justify-center items-start inline-flex">
                                <div class="text-white text-xs font-bold font-['Inter'] leading-[18px]">Creator</div>
                            </div>
                        </div>
                        <div class="self-stretch h-[18px] text-[#282828]/50 text-[13px] font-normal font-['Inter'] leading-[18px]">October 23, 2024</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="self-stretch h-[2924px] pb-2 flex-col justify-start items-start gap-[30px] flex">
            <div class="self-stretch text-[#282828] text-base font-normal font-['Inter'] leading-[29px]">At just 24 hours in, you all smashed through so many stretch goals already, we had to add more! A<br/>reminder that the Early Backer Bonus ends Thursday October 24th at 1pm Eastern Time so spread<br/>the word if you know anyone who would be interested. </div>
            <div><span style="text-[#282828] text-base font-normal font-['Inter'] leading-[29px]">If you backed recently, take a look at </span><span style="text-[#028858] text-base font-normal font-['Inter'] underline leading-[29px]">BACKER ONLY UPDATE #1</span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-[29px]"> for something special. </span></div>
            <div class="text-[#282828] text-[28px] font-bold font-['Inter'] leading-loose">🎲🚗 Dice Car </div>
            <div class="h-[145px] flex-col justify-start items-start flex">
                <div class="text-[#282828] text-base font-normal font-['Inter'] leading-[29px]">We worked with our manufacturer for about 6 months on the dice car design. Unfortunately, it wasn't<br/>feasible to get a fully working mechanical dice car with metal axles and the spindle die ready for this<br/>campaign. However, we do have a number of 3D printed models to give you an idea. Throughout this<br/>campaign and the months to follow we'll give you details updates on the status of the d12 dice car and<br/>news on any other player facing d4,d6,d8,d10 dice cars. </div>
            </div>
            <div class="h-[58px] flex-col justify-start items-start flex">
                <div class="text-[#282828] text-base font-normal font-['Inter'] leading-[29px]">Please post below if you would buy a set of dice cars to use for players. We are considering making<br/>them. </div>
            </div>
            <div class="h-[291px] px-[47.33px] flex-col justify-center items-center flex">
                <img class="w-[700px] h-[291px] relative" src="https://via.placeholder.com/700x291" alt=""/>
            </div>
            <div class="flex flex-col items-start justify-start h-8">
                <div class="text-[#282828] text-[28px] font-bold font-['Inter'] leading-loose">Stretch Goals</div>
            </div>
            <div class="h-[29px] flex-col justify-start items-start flex">
                <div class="text-[#282828] text-base font-normal font-['Inter'] leading-[29px]">Here is a recap of what is unlocked so far and the newly unlocked ones below. </div>
            </div>
            <div class="h-[354px] pl-5 flex-col justify-start items-start gap-1.5 flex">
                <div class="flex flex-col items-start self-stretch justify-start h-12">
                    <div class="self-stretch"><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">$17K - </span><span style="text-[#282828] text-base font-bold font-['Inter'] leading-normal">Enhanced digital character sheets</span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal"> like form-fillable character sheets and printer friendly<br/></span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">sheets. Plus a </span><span style="text-[#282828] text-base font-bold font-['Inter'] leading-normal">playlist</span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal"> created by 9th Level Games! </span></div>
                </div>
                <div class="flex flex-col items-start self-stretch justify-start h-12">
                    <div class="self-stretch"><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">$20K - </span><span style="text-[#282828] text-base font-bold font-['Inter'] leading-normal">Free Zero Prep Intro adventure</span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal"> for all backers. Digitally fulfilled in December 2024, physical<br/></span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">version will be shipped with physical rewards. </span></div>
                </div>
                <div class="flex flex-col items-start self-stretch justify-start h-6">
                    <div class="self-stretch"><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">$25K - Add </span><span style="text-[#282828] text-base font-bold font-['Inter'] leading-normal">Spot UV </span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">to the RPG cover & </span><span style="text-[#282828] text-base font-bold font-['Inter'] leading-normal">Bookmark ribbon</span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal"> to the RPG book </span></div>
                </div>
                <div class="flex flex-col items-start self-stretch justify-start h-12">
                    <div class="self-stretch"><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">$30K - Add a physical </span><span style="text-[#282828] text-base font-bold font-['Inter'] leading-normal">adventure to the GM Screen</span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal"> "Kaiju V8", delivered digitally to all backers over<br/></span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">$20 pledged. </span></div>
                </div>
                <div class="flex flex-col items-start self-stretch justify-start h-12">
                    <div class="self-stretch"><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">$35K - Add </span><span style="text-[#282828] text-base font-bold font-['Inter'] leading-normal">6 more cards</span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal"> to the GM reference card deck taking it from 18 to 24 cards. Plus a </span><span style="text-[#282828] text-base font-bold font-['Inter'] leading-normal">2nd<br/></span><span style="text-[#282828] text-base font-bold font-['Inter'] leading-normal">playlist</span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal"> created by designer Dave Chalker. </span></div>
                </div>
                <div class="flex flex-col items-start self-stretch justify-start h-6">
                    <div class="self-stretch"><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">$40K - Add a plastic motel key style </span><span style="text-[#282828] text-base font-bold font-['Inter'] leading-normal">keychain</span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal"> to THE KEYS with Thunder Road art. </span></div>
                </div>
                <div class="flex flex-col items-start self-stretch justify-start h-6">
                    <div class="self-stretch"><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">$45K - Free </span><span style="text-[#282828] text-base font-bold font-['Inter'] leading-normal">digital adventure module</span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal"> "Motel V6" for all backers over $20 pledged. </span></div>
                </div>
                <div class="flex flex-col items-start self-stretch justify-start h-12">
                    <div class="self-stretch"><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">$50K - </span><span style="text-[#282828] text-base font-bold font-['Inter'] leading-normal">D2 Car Air Freshner</span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal"> "New Car Smell" for making Yes/No decisions in the game or as a cool car<br/></span><span style="text-[#282828] text-base font-normal font-['Inter'] leading-normal">accessory sent to all physical tier backers. </span></div>
                </div>
            </div>
            <div class="h-[1589px] px-[47.33px] flex-col justify-center items-center flex">
                <img class="w-[700px] h-[1589px] relative" src="https://via.placeholder.com/700x1589" alt="" />
            </div>
        </div>
    </div>
    <div class="self-stretch h-[591px] pt-[42px] pb-[60px] flex-col justify-start items-start gap-[18px] flex">
        <div class="flex flex-col items-start self-stretch justify-start h-5">
            <div class="self-stretch text-[#282828] text-base font-bold font-['Inter'] leading-tight">Comments (3)</div>
        </div>
        <div class="self-stretch h-[385px] px-[13px] pt-[15px] pb-[13px] bg-[#fbfbfa] border border-[#e8e8e8] flex-col justify-start items-start gap-3 flex">
            <div class="self-stretch h-[113px] px-[19px] pt-[19px] pb-[13px] bg-white border border-[#e8e8e8] flex-col justify-start items-start gap-[18px] flex">
                <div class="inline-flex items-start self-stretch justify-start">
                    <div class="flex items-start self-stretch justify-start gap-3">
                        <div class="inline-flex flex-col items-start justify-start h-9">
                            <img class="w-9 h-9 relative rounded-[36px] border border-[#dcdedd]" src="https://via.placeholder.com/36x36" alt=""/>
                        </div>
                        <div class="w-[195.45px] flex-col justify-start items-start inline-flex">
                            <div class="inline-flex items-center self-stretch justify-start gap-3">
                                <div class="w-[92.93px] h-[21px] text-[#282828] text-sm font-normal font-['Inter'] leading-[21px]">Gary Johnson</div>
                            </div>
                            <div class="self-stretch h-[18px] flex-col justify-start items-start flex">
                                <div class="text-[#9b9e9e] text-xs font-normal font-['Inter'] leading-[18px]">3 days ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inline-flex items-start self-stretch justify-center">
                    <div class="inline-flex flex-col items-start self-stretch justify-start grow shrink basis-0">
                        <div class="flex flex-col items-start self-stretch justify-start h-6">
                            <div class="self-stretch text-[#282828] text-sm font-normal font-['Inter'] leading-normal">YES! Would definitely buy a set or two of dice cars if produced</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="self-stretch h-[110px] px-[19px] pt-[19px] pb-[13px] bg-white border border-[#e8e8e8] flex-col justify-start items-start gap-[18px] flex">
                <div class="inline-flex items-start self-stretch justify-start">
                    <div class="flex items-start self-stretch justify-start">
                        <div class="inline-flex flex-col items-start justify-start w-12 pr-3 h-9">
                            <img class="w-9 h-9 relative rounded-[36px] border border-[#dcdedd]" src="https://via.placeholder.com/36x36" alt="" />
                        </div>
                        <div class="inline-flex flex-col items-start self-stretch justify-start">
                            <div class="text-[#282828] text-sm font-normal font-['Inter'] leading-[21px]">Phillip</div>
                            <div class="self-stretch h-[18px] flex-col justify-start items-start flex">
                                <div class="text-[#9b9e9e] text-xs font-normal font-['Inter'] leading-[18px]">5 days ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inline-flex items-start self-stretch justify-center">
                    <div class="inline-flex flex-col items-start self-stretch justify-start grow shrink basis-0">
                        <div class="flex flex-col items-start self-stretch justify-start h-6">
                            <div class="self-stretch text-[#282828] text-sm font-normal font-['Inter'] leading-normal">Yeah I would buy a dice car</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="self-stretch h-[110px] px-[19px] pt-[19px] pb-[13px] bg-white border border-[#e8e8e8] flex-col justify-start items-start gap-[18px] flex">
                <div class="w-1.5 h-[108px] bg-[#037362]"></div>
                <div class="inline-flex items-start self-stretch justify-start">
                    <div class="flex items-start self-stretch justify-start">
                        <div class="inline-flex flex-col items-start justify-start w-12 pr-3 h-9">
                            <img class="w-9 h-9 relative rounded-[36px] border border-[#dcdedd]" src="https://via.placeholder.com/36x36" alt="" />
                        </div>
                        <div class="w-[227.10px] h-9 relative">
                            <div class="w-[57.07px] h-[21px] left-0 top-[1.50px] absolute text-[#282828] text-sm font-normal font-['Inter'] leading-[21px]">9thLevel</div>
                            <div class="w-[61.54px] h-[17px] pl-1.5 pr-[5.65px] left-[68.71px] top-[3.50px] absolute bg-[#037362] justify-center items-center inline-flex">
                                <div class="w-[49.89px] h-6 text-white text-sm font-normal font-['Inter'] leading-normal">Creator</div>
                            </div>
                            <div class="h-[18px] left-0 top-[24px] absolute flex-col justify-start items-start inline-flex">
                                <div class="text-[#9b9e9e] text-xs font-normal font-['Inter'] leading-[18px]">5 days ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inline-flex items-start self-stretch justify-center">
                    <div class="inline-flex flex-col items-start self-stretch justify-start grow shrink basis-0">
                        <div class="flex flex-col items-start self-stretch justify-start h-6">
                            <div class="self-stretch text-[#282828] text-sm font-normal font-['Inter'] leading-normal">Thanks for all the dice car feedback...more to come.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</div>

<div class="flex flex-col items-start self-stretch justify-start gap-4 pt-4 pb-8 w-[90%] pl-10">
    <input
        type="text"
        bind:value={newComment}
        placeholder="Add a comment..."
        class="w-full border-2 border-[#dcdedd] rounded-lg px-4 py-2 text-base text-[#0b383c] focus:outline-none focus:border-[#0b383c] transition-colors duration-200"
    />
    <button
        on:click={addComment}
        class="w-full md:w-1/4 px-4 py-2 bg-[#0b383c] text-white text-base rounded-lg transition-colors duration-300 focus:outline-none focus:border-[#0b383c]"
    >
        Submit Comment
    </button>
</div>
