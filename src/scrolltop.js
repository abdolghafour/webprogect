import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
const { y: pageYOffset } = useWindowScroll();
const [visible, setVisiblity] = useState(false);

useEffect(() => {
if (pageYOffset > 400) {
setVisiblity(true);
} else {
setVisiblity(false);
}
}, [pageYOffset]);

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

if (!visible) {
return false;
}

return (
<div className="scroll-to-top cursor-pointer text-center" onClick={scrollToTop}>
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
</div>
);
};

export default ScrollToTop;