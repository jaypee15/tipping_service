export const CameraIconWhite = ({height, width, fill}) => {
  return (
    <div>

      <svg 
      width={width ? `${width}` : "25"}
      height={height ? `${height}` : "25"}
      viewBox="0 0 25 25" 
      fill={fill ? `${fill}` : "none"}

        xmlns="http://www.w3.org/2000/svg">
          <path d="M3.07227 6.2857C3.07227 5.43322 3.41091 4.61565 4.01371 4.01285C4.6165 3.41006 5.43407 3.07141 6.28655 3.07141H9.28741C9.45791 3.07141 9.62142 3.13914 9.74198 3.2597C9.86254 3.38026 9.93027 3.54377 9.93027 3.71427C9.93027 3.88476 9.86254 4.04828 9.74198 4.16884C9.62142 4.2894 9.45791 4.35713 9.28741 4.35713H6.28655C5.77506 4.35713 5.28452 4.56031 4.92285 4.92199C4.56117 5.28367 4.35798 5.77421 4.35798 6.2857V9.2857C4.35798 9.45619 4.29025 9.61971 4.16969 9.74027C4.04913 9.86082 3.88562 9.92855 3.71512 9.92855C3.54463 9.92855 3.38111 9.86082 3.26055 9.74027C3.13999 9.61971 3.07227 9.45619 3.07227 9.2857V6.2857ZM15.0723 3.71427C15.0723 3.54377 15.14 3.38026 15.2606 3.2597C15.3811 3.13914 15.5446 3.07141 15.7151 3.07141H18.7151C19.5676 3.07141 20.3852 3.41006 20.988 4.01285C21.5908 4.61565 21.9294 5.43322 21.9294 6.2857V9.2857C21.9294 9.45619 21.8617 9.61971 21.7411 9.74027C21.6206 9.86082 21.457 9.92855 21.2866 9.92855C21.1161 9.92855 20.9525 9.86082 20.832 9.74027C20.7114 9.61971 20.6437 9.45619 20.6437 9.2857V6.2857C20.6437 5.77421 20.4405 5.28367 20.0788 4.92199C19.7172 4.56031 19.2266 4.35713 18.7151 4.35713H15.7151C15.5446 4.35713 15.3811 4.2894 15.2606 4.16884C15.14 4.04828 15.0723 3.88476 15.0723 3.71427ZM3.71512 15.0714C3.88562 15.0714 4.04913 15.1391 4.16969 15.2597C4.29025 15.3803 4.35798 15.5438 4.35798 15.7143V18.7143C4.35798 19.2258 4.56117 19.7163 4.92285 20.078C5.28452 20.4397 5.77506 20.6428 6.28655 20.6428H9.28655C9.45705 20.6428 9.62056 20.7106 9.74112 20.8311C9.86168 20.9517 9.92941 21.1152 9.92941 21.2857C9.92941 21.4562 9.86168 21.6197 9.74112 21.7403C9.62056 21.8608 9.45705 21.9286 9.28655 21.9286H6.28655C5.43407 21.9286 4.6165 21.5899 4.01371 20.9871C3.41091 20.3843 3.07227 19.5667 3.07227 18.7143V15.7143C3.07227 15.5438 3.13999 15.3803 3.26055 15.2597C3.38111 15.1391 3.54463 15.0714 3.71512 15.0714ZM21.2866 15.0714C21.457 15.0714 21.6206 15.1391 21.7411 15.2597C21.8617 15.3803 21.9294 15.5438 21.9294 15.7143V18.7143C21.9294 19.5667 21.5908 20.3843 20.988 20.9871C20.3852 21.5899 19.5676 21.9286 18.7151 21.9286H15.7151C15.5446 21.9286 15.3811 21.8608 15.2606 21.7403C15.14 21.6197 15.0723 21.4562 15.0723 21.2857C15.0723 21.1152 15.14 20.9517 15.2606 20.8311C15.3811 20.7106 15.5446 20.6428 15.7151 20.6428H18.7151C19.2266 20.6428 19.7172 20.4397 20.0788 20.078C20.4405 19.7163 20.6437 19.2258 20.6437 18.7143V15.7143C20.6437 15.5438 20.7114 15.3803 20.832 15.2597C20.9525 15.1391 21.1161 15.0714 21.2866 15.0714ZM12.5008 14.2143C12.9555 14.2143 13.3915 14.0337 13.713 13.7122C14.0345 13.3907 14.2151 12.9546 14.2151 12.5C14.2151 12.0453 14.0345 11.6093 13.713 11.2878C13.3915 10.9663 12.9555 10.7857 12.5008 10.7857C12.0462 10.7857 11.6101 10.9663 11.2887 11.2878C10.9672 11.6093 10.7866 12.0453 10.7866 12.5C10.7866 12.9546 10.9672 13.3907 11.2887 13.7122C11.6101 14.0337 12.0462 14.2143 12.5008 14.2143ZM11.3163 7.35713C11.0774 7.35713 10.8432 7.4237 10.64 7.54936C10.4368 7.67503 10.2727 7.85481 10.166 8.06855L9.66455 9.07141H9.07227C8.61761 9.07141 8.18157 9.25202 7.86008 9.57351C7.53859 9.89501 7.35798 10.331 7.35798 10.7857V15.0714C7.35798 15.5261 7.53859 15.9621 7.86008 16.2836C8.18157 16.6051 8.61761 16.7857 9.07227 16.7857H15.9294C16.3841 16.7857 16.8201 16.6051 17.1416 16.2836C17.4631 15.9621 17.6437 15.5261 17.6437 15.0714V10.7857C17.6437 10.331 17.4631 9.89501 17.1416 9.57351C16.8201 9.25202 16.3841 9.07141 15.9294 9.07141H15.3371L14.8357 8.06855C14.729 7.85481 14.5648 7.67503 14.3617 7.54936C14.1585 7.4237 13.9243 7.35713 13.6854 7.35713H11.3163ZM12.5008 9.92855C12.8385 9.92855 13.1729 9.99507 13.4849 10.1243C13.7969 10.2535 14.0803 10.4429 14.3191 10.6817C14.5579 10.9205 14.7473 11.204 14.8765 11.5159C15.0058 11.8279 15.0723 12.1623 15.0723 12.5C15.0723 12.8377 15.0058 13.172 14.8765 13.484C14.7473 13.796 14.5579 14.0795 14.3191 14.3183C14.0803 14.557 13.7969 14.7464 13.4849 14.8757C13.1729 15.0049 12.8385 15.0714 12.5008 15.0714C11.8189 15.0714 11.1648 14.8005 10.6826 14.3183C10.2003 13.836 9.92941 13.182 9.92941 12.5C9.92941 11.818 10.2003 11.1639 10.6826 10.6817C11.1648 10.1995 11.8189 9.92855 12.5008 9.92855Z" fill="white"/>
        </svg>
    </div>
  )
}


export const CameraIconBlue = ({height, width, fill}) => {
  return (
    <div>
        <svg 
        width="20" 
        height="21" 
        viewBox="0 0 20 21" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0.652344 3.87339C0.652344 2.9782 0.992676 2.11966 1.59847 1.48666C2.20427 0.853663 3.0259 0.498047 3.88262 0.498047H6.89841C7.06976 0.498047 7.23408 0.56917 7.35524 0.69577C7.4764 0.82237 7.54447 0.994077 7.54447 1.17312C7.54447 1.35216 7.4764 1.52386 7.35524 1.65046C7.23408 1.77706 7.06976 1.84819 6.89841 1.84819H3.88262C3.36859 1.84819 2.87561 2.06156 2.51213 2.44136C2.14865 2.82116 1.94446 3.33628 1.94446 3.87339V7.02372C1.94446 7.20276 1.87639 7.37446 1.75523 7.50106C1.63407 7.62766 1.46974 7.69879 1.2984 7.69879C1.12705 7.69879 0.962728 7.62766 0.841569 7.50106C0.72041 7.37446 0.652344 7.20276 0.652344 7.02372V3.87339ZM12.7121 1.17312C12.7121 0.994077 12.7801 0.82237 12.9013 0.69577C13.0224 0.56917 13.1868 0.498047 13.3581 0.498047H16.373C17.2298 0.498047 18.0514 0.853663 18.6572 1.48666C19.263 2.11966 19.6033 2.9782 19.6033 3.87339V7.02372C19.6033 7.20276 19.5352 7.37446 19.4141 7.50106C19.2929 7.62766 19.1286 7.69879 18.9573 7.69879C18.7859 7.69879 18.6216 7.62766 18.5004 7.50106C18.3793 7.37446 18.3112 7.20276 18.3112 7.02372V3.87339C18.3112 3.33628 18.107 2.82116 17.7435 2.44136C17.3801 2.06156 16.8871 1.84819 16.373 1.84819H13.3581C13.1868 1.84819 13.0224 1.77706 12.9013 1.65046C12.7801 1.52386 12.7121 1.35216 12.7121 1.17312ZM1.2984 13.0993C1.46974 13.0993 1.63407 13.1705 1.75523 13.2971C1.87639 13.4237 1.94446 13.5954 1.94446 13.7744V16.9247C1.94446 17.4619 2.14865 17.977 2.51213 18.3568C2.87561 18.7366 3.36859 18.9499 3.88262 18.9499H6.89755C7.06889 18.9499 7.23322 19.0211 7.35438 19.1477C7.47554 19.2743 7.54361 19.446 7.54361 19.625C7.54361 19.8041 7.47554 19.9758 7.35438 20.1024C7.23322 20.229 7.06889 20.3001 6.89755 20.3001H3.88262C3.0259 20.3001 2.20427 19.9445 1.59847 19.3115C0.992676 18.6785 0.652344 17.8199 0.652344 16.9247V13.7744C0.652344 13.5954 0.72041 13.4237 0.841569 13.2971C0.962728 13.1705 1.12705 13.0993 1.2984 13.0993ZM18.9573 13.0993C19.1286 13.0993 19.2929 13.1705 19.4141 13.2971C19.5352 13.4237 19.6033 13.5954 19.6033 13.7744V16.9247C19.6033 17.8199 19.263 18.6785 18.6572 19.3115C18.0514 19.9445 17.2298 20.3001 16.373 20.3001H13.3581C13.1868 20.3001 13.0224 20.229 12.9013 20.1024C12.7801 19.9758 12.7121 19.8041 12.7121 19.625C12.7121 19.446 12.7801 19.2743 12.9013 19.1477C13.0224 19.0211 13.1868 18.9499 13.3581 18.9499H16.373C16.8871 18.9499 17.3801 18.7366 17.7435 18.3568C18.107 17.977 18.3112 17.4619 18.3112 16.9247V13.7744C18.3112 13.5954 18.3793 13.4237 18.5004 13.2971C18.6216 13.1705 18.7859 13.0993 18.9573 13.0993ZM10.1278 12.1993C10.5847 12.1993 11.023 12.0096 11.346 11.672C11.6691 11.3344 11.8506 10.8765 11.8506 10.3991C11.8506 9.92163 11.6691 9.46374 11.346 9.12614C11.023 8.78854 10.5847 8.59888 10.1278 8.59888C9.67091 8.59888 9.23271 8.78854 8.90962 9.12614C8.58652 9.46374 8.40501 9.92163 8.40501 10.3991C8.40501 10.8765 8.58652 11.3344 8.90962 11.672C9.23271 12.0096 9.67091 12.1993 10.1278 12.1993ZM8.93736 4.99851C8.69728 4.99852 8.46194 5.06842 8.25775 5.20038C8.05356 5.33234 7.88859 5.52113 7.78135 5.74559L7.27743 6.79869H6.6822C6.22528 6.79869 5.78707 6.98836 5.46398 7.32596C5.14089 7.66356 4.95938 8.12144 4.95938 8.59888V13.0993C4.95938 13.5768 5.14089 14.0347 5.46398 14.3723C5.78707 14.7099 6.22528 14.8995 6.6822 14.8995H13.5735C14.0304 14.8995 14.4686 14.7099 14.7917 14.3723C15.1148 14.0347 15.2963 13.5768 15.2963 13.0993V8.59888C15.2963 8.12144 15.1148 7.66356 14.7917 7.32596C14.4686 6.98836 14.0304 6.79869 13.5735 6.79869H12.9782L12.4743 5.74559C12.3671 5.52113 12.2021 5.33234 11.9979 5.20038C11.7937 5.06842 11.5584 4.99852 11.3183 4.99851H8.93736ZM10.1278 7.69879C10.4672 7.69879 10.8032 7.76863 11.1168 7.90433C11.4303 8.04004 11.7152 8.23894 11.9552 8.48968C12.1951 8.74042 12.3855 9.0381 12.5153 9.36571C12.6452 9.69333 12.7121 10.0445 12.7121 10.3991C12.7121 10.7537 12.6452 11.1048 12.5153 11.4324C12.3855 11.76 12.1951 12.0577 11.9552 12.3084C11.7152 12.5592 11.4303 12.7581 11.1168 12.8938C10.8032 13.0295 10.4672 13.0993 10.1278 13.0993C9.44245 13.0993 8.78514 12.8148 8.30051 12.3084C7.81587 11.802 7.54361 11.1152 7.54361 10.3991C7.54361 9.68291 7.81587 8.99608 8.30051 8.48968C8.78514 7.98328 9.44245 7.69879 10.1278 7.69879Z" fill="#1BAEDF"/>
        </svg>
    </div>
  )
}
