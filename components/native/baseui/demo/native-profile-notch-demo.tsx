"use client";

import { NativeProfileNotch } from "@/components/native/baseui/native-profile-notch-baseui";

export function NativeProfileNotchDefault() {
  return (
    <div className="h-[500px] w-full flex items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50 rounded-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <NativeProfileNotch
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        name="Base UI"
        username="base-ui"
      >
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-center p-3 rounded-xl bg-primary-accent/5 border border-primary-accent/5">
            <span className="text-xs text-primary-accent/40 uppercase tracking-wider font-semibold">
              Role
            </span>
            <span className="text-sm text-primary-accent font-medium mt-1 text-center">
              Maintainer
            </span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-primary-accent/5 border border-primary-accent/5">
            <span className="text-xs text-primary-accent/40 uppercase tracking-wider font-semibold">
              Commits
            </span>
            <span className="text-sm text-primary-accent font-medium mt-1 text-center">
              1,240
            </span>
          </div>
        </div>
      </NativeProfileNotch>
    </div>
  );
}

export function NativeProfileNotchCustom() {
  return (
    <div className="h-[500px] w-full flex items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50 rounded-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <NativeProfileNotch
        imageSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        name="Sarah Chen"
        username="sarahc_design"
      >
        <div className="border-t border-primary-accent/10 pt-4 mt-2">
           <p className="text-sm text-primary-accent/70 text-center italic">
             "Designing experiences that matter. Passionate about UI/UX and accessibility."
           </p>
           <div className="flex justify-center gap-2 mt-4">
              <span className="px-2 py-1 rounded-md bg-primary-accent/10 text-xs text-primary-accent/80">UI Design</span>
              <span className="px-2 py-1 rounded-md bg-primary-accent/10 text-xs text-primary-accent/80">React</span>
              <span className="px-2 py-1 rounded-md bg-primary-accent/10 text-xs text-primary-accent/80">Motion</span>
           </div>
        </div>
      </NativeProfileNotch>
    </div>
  );
}
