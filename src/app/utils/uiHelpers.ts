export function disablePageScroll() {
    let el = document.getElementsByTagName('html')[0];
    el.style.overflow = 'hidden';
}

export function enablePageScroll() {
    let el = document.getElementsByTagName('html')[0];
    el.style.overflow = 'auto';
}