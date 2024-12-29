document.addEventListener('DOMContentLoaded', () => {
    let items = Array.from(document.querySelectorAll('.carousel-item'));
    let items1 = ['Nykaa', 'Westside', "PVR", "KFC", "Amazon Prime"]
    let currentIndex = 2;
    const descriptionElement = document.querySelector('.description');
    let intervalId;
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const closeSidebarButton = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');

    toggleSidebarButton.addEventListener('click', () => {
        sidebar.classList.add('sidebar-open');
    });

    closeSidebarButton.addEventListener('click', () => {
        sidebar.classList.remove('sidebar-open');
    });

    function updateCarousel(newIndex, activeText) {
        items.forEach(item => item.classList.remove('active'));
        items[newIndex].classList.add('active');
        currentIndex = newIndex;

        items.forEach((item, index) => {
            const relativeIndex = (index - currentIndex + items.length) % items.length;
            item.style.transform = `translateX(${getTranslateX(relativeIndex)}) translateY(${getTranslateY(relativeIndex)}) ${relativeIndex === 2 ? 'scale(1.1)' : ''} rotate(${getRotate(relativeIndex)})`;
            item.style.opacity = getOpacity(relativeIndex);
        });

        const activeItem = items[newIndex];
        descriptionElement.classList.add('fade-out');
        
        setTimeout(() => {
            descriptionElement.textContent = items1[newIndex];
            descriptionElement.classList.remove('fade-out');
        }, 700);
    }

    function startInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            const newIndex = (currentIndex + 1) % items.length;
            updateCarousel(newIndex);
        }, 3500);
    }

    updateCarousel(currentIndex);
    startInterval();

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            const relativeIndex = (index - currentIndex + items.length) % items.length;
            if (relativeIndex !== 2) {
                const newIndex = (currentIndex + relativeIndex - 2 + items.length) % items.length;
                console.log(items[newIndex].innerText)
                updateCarousel(newIndex, items[newIndex].innerText);
                startInterval();
            }
        });
    });

    function getTranslateX(index) {
        const positions = [-600, -300, 0, 300, 600];
        return positions[index] + 'px';
    }

    function getTranslateY(index) {
        const positions = [150, 50, -50, 50, 150];
        return positions[index] + 'px';
    }

    function getRotate(index) {
        const rotations = ['-10deg', '-5deg', '0deg', '5deg', '10deg'];
        return rotations[index];
    }

    function getOpacity(index) {
        const opacities = [0.5, 0.75, 1, 0.75, 0.5];
        return opacities[index];
    }
});
