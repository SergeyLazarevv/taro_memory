const canvas = document.getElementById('starBackground');
const ctx = canvas.getContext('2d');

// Устанавливаем размеры canvas равными размерам окна
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Цвета для звезд и планет
const starColors = ['#ffffff', '#ffe08c', '#c8e7ff'];
// const planetColors = ['#ff6b6b', '#6bff8c', '#8c6bff', '#ff8c6b'];

// Массивы для звезд и планет
const stars = [];
// const planets = [];

// Создаем звезду
class Star {
    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.opacity = Math.random();
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${parseInt(this.color.slice(1, 3), 16)}, ${parseInt(this.color.slice(3, 5), 16)}, ${parseInt(this.color.slice(5, 7), 16)}, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        // Мерцание звезд
        if (Math.random() < 0.003) {
            this.opacity = Math.random();
        }
        this.draw();
    }
}

// Создаем планету
// class Planet {
//     constructor(x, y, radius, color, speed) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;
//         this.speed = speed;
//         this.angle = Math.random() * Math.PI * 2;
//     }

//     draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//         ctx.closePath();
//     }

//     update() {
//         // Движение по орбите
//         this.angle += this.speed;
//         this.x = canvas.width / 2 + Math.cos(this.angle) * 200;
//         this.y = canvas.height / 2 + Math.sin(this.angle) * 200;
//         this.draw();
//     }
// }

// Инициализация звезд и планет
function init() {
    stars.length = 0;
    //planets.length = 0;

    // Создаем звезды
    for (let i = 0; i < 200; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2;
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        const speed = 0;
        stars.push(new Star(x, y, radius, color, speed));
    }

    // Создаем планеты
    // for (let i = 0; i < 4; i++) {
    //     const radius = Math.random() * 10 + 10;
    //     const color = planetColors[i];
    //     const speed = Math.random() * 0.02 + 0.01;
    //     planets.push(new Planet(canvas.width / 2, canvas.height / 2, radius, color, speed));
    // }
}

// Анимация
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => star.update());
    //planets.forEach(planet => planet.update());
    requestAnimationFrame(animate);
}

// Обработка изменения размера окна
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

// Запуск
init();
animate();