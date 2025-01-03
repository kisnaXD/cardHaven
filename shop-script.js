// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    
    const items = document.querySelectorAll('.item');
    const items2 = document.querySelectorAll('.item-2');
    const hoverCircle = document.createElement('div');
    hoverCircle.classList.add('hover-circle');
    const hoverCircle2 = document.createElement('div');
    hoverCircle2.classList.add('hover-circle-2');
    document.querySelector('.item-list').appendChild(hoverCircle);
    document.querySelector('.item-list-2').appendChild(hoverCircle2);
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const closeSidebarButton = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const heroItems = document.querySelectorAll('.hero-items');
    console.log(heroItems)
    toggleSidebarButton.addEventListener('click', () => {
        sidebar.classList.add('sidebar-open');
    });

    closeSidebarButton.addEventListener('click', () => {
        sidebar.classList.remove('sidebar-open');
    });

    const updateCirclePosition = (item) => {
        const rect = item.getBoundingClientRect();
        const itemListRect = document.querySelector('.item-list').getBoundingClientRect();
        const circleWidth = rect.width;
        const circleX = rect.left - itemListRect.left;
        const circleY = rect.top - itemListRect.top;

        hoverCircle.style.width = `${circleWidth}px`;
        hoverCircle.style.left = `${circleX}px`;
        hoverCircle.style.top = `${circleY}px`;
    };

    const updateCirclePosition2 = (item) => {
        const rect = item.getBoundingClientRect();
        const itemListRect = document.querySelector('.item-list-2').getBoundingClientRect();
        const circleWidth = rect.width;
        const circleX = rect.left - itemListRect.left;
        const circleY = rect.top - itemListRect.top;

        hoverCircle2.style.width = `${circleWidth}px`;
        hoverCircle2.style.left = `${circleX}px`;
        hoverCircle2.style.top = `${circleY}px`;
    };
    updateCirclePosition(document.querySelector('.item-selected'));
    updateCirclePosition2(document.querySelector('.item-selected-2'));
    let activeItem = 0;
    items.forEach(item => {
        console.log(activeItem)
        item.addEventListener('click', () => {
            if(item.textContent === 'Gaming') {
                heroItems[0].classList.remove('hidden')
                document.querySelector('.active').classList.add('hidden');
                document.querySelector('.active').classList.remove('active');
                heroItems[0].classList.add('active');
            } else if(item.textContent === "Shopping") {
                heroItems[1].classList.remove('hidden')
                document.querySelector('.active').classList.add('hidden');
                document.querySelector('.active').classList.remove('active');
                heroItems[1].classList.add('active');
            } else if(item.textContent === "Entertainment") {
                heroItems[2].classList.remove('hidden')
                document.querySelector('.active').classList.add('hidden');                
                document.querySelector('.active').classList.remove('active');
                heroItems[2].classList.add('active');
            } else if(item.textContent === "Food") {
                heroItems[3].classList.remove('hidden')
                document.querySelector('.active').classList.add('hidden');
                document.querySelector('.active').classList.remove('active');
                heroItems[3].classList.add('active');
            } else {
                heroItems[4].classList.remove('hidden');
                document.querySelector('.active').classList.add('hidden');
                document.querySelector('.active').classList.remove('active');
                heroItems[4].classList.add('active');
            }
            document.querySelector('.item-selected').classList.remove('item-selected');
            item.classList.add('item-selected');
            updateCirclePosition(item);
        });
    });

    items2.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.item-selected-2').classList.remove('item-selected-2');
            item.classList.add('item-selected-2');
            updateCirclePosition2(item);
        })
    })

    window.addEventListener('resize', () => {
        const selectedItem = document.querySelector('.item-selected');
        if (selectedItem) {
            updateCirclePosition(selectedItem);
        }
        const selectedItem2 = document.querySelector('.item-selected-2');
        if (selectedItem2) {
            updateCirclePosition2(selectedItem2);
        }
    });

    window.addEventListener('scroll', () => {
        const selectedItem = document.querySelector('.item-selected');
        if (selectedItem) {
            updateCirclePosition(selectedItem);
        }
        const selectedItem2 = document.querySelector('.item-selected-2');
        if (selectedItem2) {
            updateCirclePosition2(selectedItem2);
        }
    });
});
