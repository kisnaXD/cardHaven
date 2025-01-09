function switchBackground(e, index) {
    const active = document.querySelector('#activeBackground')
    const itemList = document.querySelector('item-list')
    const itemWidth = e.offsetWidth;

    activeBackground.style.transform = `translateX(${index * (itemWidth )}px)`;
}

function prependRupeeSign(e) {
    const rupeeSign = '₹';
    if(e.value === rupeeSign) {
        e.value = ''
    } else if(!e.value.startsWith(rupeeSign)) {
        e.value = rupeeSign + e.value;
    }
}

function changeSelected(e) {
    document.querySelector(".selected").classList.remove('selected');
    e.classList.add('selected')
}