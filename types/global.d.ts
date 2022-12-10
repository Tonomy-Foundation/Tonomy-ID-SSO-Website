declare global {
    interface Window {
        chrome: any; // this will be your variable name
        mobileCheck: () => boolean;
    }
}

// declare global {
//     namespace globalThis {
//         const mobileCheck: () => boolean;
//         const mobileAndTabletCheck: () => boolean;
//     }
// }
declare const window: Window &
    typeof globalThis & {
        mobileCheck: () => boolean;
        mobileAndTabletCheck: () => boolean;
    };
