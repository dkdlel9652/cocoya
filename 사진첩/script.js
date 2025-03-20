const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
const yearMenu = document.getElementById('year-menu');
const photoContainer = document.getElementById('photo-container');

// 연도별 메뉴 동적 생성
years.forEach(year => {
    const yearItem = document.createElement('li');
    yearItem.textContent = year;

    const submenu = document.createElement('ul');
    submenu.classList.add('submenu');

    // 예시 월 목록
    for (let month = 1; month <= 12; month++) {
        const monthItem = document.createElement('li');
        monthItem.textContent = `${month}월`;
        submenu.appendChild(monthItem);

        monthItem.addEventListener('click', (e) => {
            e.stopPropagation(); // 부모 클릭 이벤트 중단
            loadPhotosForMonth(year, month);
        });
    }

    yearItem.appendChild(submenu);
    yearItem.addEventListener('click', () => {
        loadPhotosForYear(year);
    });

    yearMenu.appendChild(yearItem);
});

function loadPhotosForYear(year) {
    photoContainer.innerHTML = ''; // 기존 사진 목록 초기화
    // 예시 사진 데이터 (실제로는 서버에서 불러올 수 있습니다)
    const examplePhotos = [
        { src: 'https://via.placeholder.com/300x200.png?text=Photo+1', date: '2021-01-01' },
        { src: 'https://via.placeholder.com/300x200.png?text=Photo+2', date: '2021-02-01' },
        // 더 많은 사진 데이터 추가
    ];

    examplePhotos.forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.classList.add('photo-item');
        const img = document.createElement('img');
        img.src = photo.src;
        photoItem.appendChild(img);
        photoContainer.appendChild(photoItem);
    });
}

function loadPhotosForMonth(year, month) {
    photoContainer.innerHTML = ''; // 기존 사진 목록 초기화
    // 예시 사진 데이터 (실제로는 서버에서 불러올 수 있습니다)
    const examplePhotos = [
        { src: `https://via.placeholder.com/300x200.png?text=${year}년+${month}월+1일`, date: `${year}-${month.toString().padStart(2, '0')}-01` },
        { src: `https://via.placeholder.com/300x200.png?text=${year}년+${month}월+15일`, date: `${year}-${month.toString().padStart(2, '0')}-15` },
        // 더 많은 사진 데이터 추가
    ];

    examplePhotos.forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.classList.add('photo-item');
        const img = document.createElement('img');
        img.src = photo.src;
        photoItem.appendChild(img);
        photoContainer.appendChild(photoItem);
    });
}
