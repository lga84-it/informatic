const itemsData = [
  // Засоби складання і виготовлення документів
  {
    id: "features-folding-preparing_item1",
    label: `<p>Комп'ютер</p><img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-upU8MIeWollnjFmwkgwNOQ6a9K7KhF-PfASH7iyokCTWrkxbEYXKzKbX8MwxTK9Y5xk&usqp=CAU" 
              alt="Комп'ютер"
              draggable="false"
              width="100px"
            >`,
    category: "features-folding-preparing"
  },
  {
    id: "features-folding-preparing_item2",
    label: `<p>Ноутбук</p><img 
              src="https://w7.pngwing.com/pngs/226/821/png-transparent-laptop-macintosh-computer-laptop-electronics-computer-computer-monitor-accessory.png" 
              alt="Ноутбук"
              draggable="false"
              width="100px"
            >`,
    category: "features-folding-preparing"
  },
  {
    id: "features-folding-preparing_item3",
    label: `<p>Диктофонна<br>техніка</p><img 
              src="https://over-shop.kz/upload/iblock/42d/o4a1tapzre0l8iivs7rq8ihz5uz6s4rl/free_icon_voice_recorder_1670833.png" 
              alt="Диктофонна техніка"
              draggable="false"
              width="100px"
            >`,
    category: "features-folding-preparing"
  },
  {
    id: "features-folding-preparing_item4",
    label: `<p>Принтер</p><img 
              src="https://img.freepik.com/premium-vector/printer-cartoon-illustration_451085-1564.jpg" 
              alt="Принтер"
              draggable="false"
              width="100px"
            >`,
    category: "features-folding-preparing"
  },
  {
    id: "features-folding-preparing_item5",
    label: `<p>Плоттер</p><img 
              src="https://img.freepik.com/premium-vector/man-worker-plotter-printing-illustration_53562-6148.jpg" 
              alt="Плоттер"
              draggable="false"
              width="100px"
            >`,
    category: "features-folding-preparing"
  },

  // Засоби зберігання документів
  {
    id: "features-save_item1",
    label: `<p>Жорсткий<br>магнітний<br>диск<br>(вінчестр)</p><img 
              src="https://pngimg.com/uploads/hard_disc/Hard%20disc%20PNG,%20hard%20drive%20PNG%20images%20free%20download,%20HDD%20PNG_PNG12042.png" 
              alt="Жорсткий магнітний диск (вінчестр)"
              draggable="false"
              width="auto" height="80px"
            >`,
    category: "features-save"
  },
  {
    id: "features-save_item2",
    label: `<p>SSD диск</p><img 
              src="https://assets.corsair.com/image/upload/f_auto,q_auto/content/CSSD-F90GB3-BK-SSDv2-F3-02.png" 
              alt="SSD диск"
              draggable="false"
              width="120px"
            >`,
    category: "features-save"
  },
  {
    id: "features-save_item3",
    label: `<p>Флеш-<br>накопичувач</p><img 
              src="https://png.klev.club/uploads/posts/2024-04/png-klev-club-4dtq-p-fleshka-png-2.png" 
              alt="Флеш-накопичувач"
              draggable="false"
              width="120px"
            >`,
    category: "features-save"
  },

  // Засоби обробки документів
  {
    id: "features-processing_item1",
    label: `<p>Маркувальні<br>машини</p><img 
              src="https://redshiftlaser.com/wp-content/uploads/laser-marking-machine.png" 
              alt="Маркувальні машини"
              draggable="false"
              width="auto" height="100px"
            >`,
    category: "features-processing"
  },
  {
    id: "features-processing_item2",
    label: `<p>Ламінатори</p><img 
              src="https://omixcdn.com/img/catalog/laminator-spectra-a4-shvidk-30-smhv-maks-tovsch-plivki-125mkm.png" 
              alt="Ламінатори"
              draggable="false"
              width="120px"
            >`,
    category: "features-processing"
  },
  {
    id: "features-processing_item3",
    label: `<p>Брошурувальні<br>машини</p><img 
              src="https://i1.adis.ws/i/canon/PIC1_1920x1080_835b5832-e472-4afc-93a2-5071355f2688?w=1920" 
              alt="Брошурувальні машини"
              draggable="false"
              width="120px"
            >`,
    category: "features-processing"
  },
  {
    id: "features-processing_item4",
    label: `<p>Палітурні<br>машини</p><img 
              src="https://a4p.com.ua/images/detailed/6/elmstok-atlas-190-metal-bind-channel-binder.jpg" 
              alt="Палітурні машини"
              draggable="false"
              width="120px"
            >`,
    category: "features-processing"
  },
  {
    id: "features-processing_item5",
    label: `<p>Паперорізальне<br>устаткування<br>(різаки)</p><img 
              src="https://www.officetime.com.ua/files/2019/05_19/09_14/u_files_store_1_757392.jpg" 
              alt="Паперорізальне устаткування (різаки)"
              draggable="false"
              width="auto" height="90px"
            >`,
    category: "features-processing"
  },
  {
    id: "features-processing_item6",
    label: `<p>Адресувальні<br>машини</p><img 
              src="https://cdn.globalso.com/free-optic/main-45.jpg" 
              alt="Адресувальні машини"
              draggable="false"
              width="auto" height="100px"
            >`,
    category: "features-processing"
  },

  // Засоби копіювання документів
  {
    id: "features-copy_item1",
    label: `<p>Багатофунк-<br>ціональний<br>пристрій</p><img 
              src="https://im.es-te.com.ua/image/cache/catalog/Kyocera%20Ecosys%20MA4500x-Photoroom-600x600.png" 
              alt="Багатофункціональний пристрій"
              draggable="false"
              width="auto" height="100px"
            >`,
    category: "features-copy"
  },
  {
    id: "features-copy_item2",
    label: `<p>Копіювальні<br>апарати</p><img 
              src="https://gamatehnika.com.ua/wp-content/uploads/Canon-i-SENSYS-MF3010-300x225.jpg" 
              alt="Копіювальні апарати"
              draggable="false"
              width="120px"
            >`,
    category: "features-copy"
  },

  // Засоби транспортування документів
  {
    id: "features-transport_item1",
    label: `<p>Ліфтові<br>транспортери</p><img 
              src="https://empirelift.com.ua/wp-content/uploads/2021/03/L%D1%96ft-malij-vantazhnij-model.png" 
              alt="Ліфтові транспортери"
              draggable="false"
              width="auto" height="100px"
            >`,
    category: "features-transport"
  },
  {
    id: "features-transport_item2",
    label: `<p>Візки</p><img 
              src="https://images.prom.ua/4248054020_w300_h300_vizok-platformennij-skladskij.jpg" 
              alt="Візки"
              draggable="false"
              width="auto" height="100px"
            >`,
    category: "features-transport"
  },
  {
    id: "features-transport_item3",
    label: `<p>Конвеєри</p><img 
              src="https://i.pinimg.com/736x/c9/2f/59/c92f593e9cebd8f2289e943401766848.jpg" 
              alt="Конвеєри"
              draggable="false"
              width="auto" height="100px"
            >`,
    category: "features-transport"
  },
  {
    id: "features-transport_item4",
    label: `<p>Електронна<br>пошта</p><img 
              src="https://lifehack.co.ua/uploads/img/elektronna-poshta-gmail-perevagi-ta-zastosuvannja.jpg" 
              alt="Електронна пошта"
              draggable="false"
              width="120px"
            >`,
    category: "features-transport"
  },
  {
    id: "features-transport_item5",
    label: `<p>Месенджери</p><img 
              src="https://freepngimg.com/save/77285-instant-mobile-telegram-app-viber-messaging-whatsapp/4883x1707" 
              alt="Месенджери"
              draggable="false"
              width="120px"
            >`,
    category: "features-transport"
  },
  {
    id: "features-transport_item6",
    label: `<p>Хмарні<br>сховища</p><img 
              src="https://w7.pngwing.com/pngs/533/5/png-transparent-cloud-technology-icon.png" 
              alt="Хмарні сховища"
              draggable="false"
              width="120px"
            >`,
    category: "features-transport"
  },
];

const totalItems = itemsData.length;
let correctCount = 0;

// Функция для перемешивания массива (Fisher–Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(itemsData);

// Создаём draggable-блоки в контейнере
const divContainer = document.getElementById("divContainer");
itemsData.forEach(item => {
  const div = document.createElement("div");
  div.id = item.id;
  div.innerHTML = item.label;
  div.className = "draggable-item";
  
  // === HTML5 Drag & Drop (Desktop) ===
  div.draggable = true;
  div.ondragstart = drag;

  // Добавляем в DOM
  divContainer.appendChild(div);

  // === Обработчики тач-событий (Mobile/Touch) ===
  div.addEventListener("touchstart", touchStart, { passive: false });
  div.addEventListener("touchmove", touchMove, { passive: false });
  div.addEventListener("touchend", touchEnd, { passive: false });

  // === Обработчики mouse-событий (Fallback для любых устройств без нативного DnD) ===
  div.addEventListener("mousedown", mouseDown, false);
});

// HTML5 Drag & Drop события
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  // Запоминаем ID того, что тянем (HTML5 drag)
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const itemId = event.dataTransfer.getData("text");
  const draggedItem = document.getElementById(itemId);
  const dropZoneId = event.currentTarget.id;

  // Добавляем элемент в drop-зону
  event.currentTarget.appendChild(draggedItem);

  // Проверяем корректность
  checkCorrect(itemId, dropZoneId, draggedItem);
}

function checkCorrect(itemId, dropZoneId, draggedItem) {
  const itemData = itemsData.find(i => i.id === itemId);

  if (itemData.category === dropZoneId) {
    if (!draggedItem.classList.contains("correct")) {
      correctCount++;
    }
    draggedItem.classList.remove("incorrect");
    draggedItem.classList.add("correct");
  } else {
    if (draggedItem.classList.contains("correct")) {
      correctCount--;
    }
    draggedItem.classList.remove("correct");
    draggedItem.classList.add("incorrect");
  }

  // Если все на местах
  if (correctCount === totalItems) {
    document.getElementById("message-classification").style.display = "block";
  }
}

// -------------------------------------------------------------
// Блок кода для тач-событий (Mobile touch)
// -------------------------------------------------------------
let currentTouchItem = null; // «draggedItem»
let cloneEl = null;          // клон элемента, который двигаем
let offsetX = 0;
let offsetY = 0;

function touchStart(e) {
  const touch = e.changedTouches[0];
  currentTouchItem = e.currentTarget;

  // Создаём клон, чтобы двигать его за пальцем
  cloneEl = currentTouchItem.cloneNode(true);
  cloneEl.classList.add("drag-clone");
  document.body.appendChild(cloneEl);

  // Сдвиг относительно пальца
  const rect = currentTouchItem.getBoundingClientRect();
  offsetX = touch.clientX - rect.left;
  offsetY = touch.clientY - rect.top;

  // Проставим позицию клона сразу
  moveClone(touch.clientX, touch.clientY);

  // Останавливаем возможный скролл
  e.preventDefault();
}

function touchMove(e) {
  const touch = e.changedTouches[0];
  if (!cloneEl) return;
  
  moveClone(touch.clientX, touch.clientY);
  e.preventDefault();
}

function touchEnd(e) {
  if (!cloneEl) return;
  const touch = e.changedTouches[0];

  // Определяем, над какой зоной отпустили
  const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);

  // Удаляем клон
  cloneEl.remove();
  cloneEl = null;

  if (dropTarget) {
    const dropZone = findDropZone(dropTarget);
    if (dropZone) {
      dropZone.appendChild(currentTouchItem);
      checkCorrect(currentTouchItem.id, dropZone.id, currentTouchItem);
    }
  }

  currentTouchItem = null;
  offsetX = 0;
  offsetY = 0;
}

function moveClone(x, y) {
  cloneEl.style.left = (x - offsetX) + "px";
  cloneEl.style.top = (y - offsetY) + "px";
}

// Вспомогательная функция - ищем родительскую drop-зону
function findDropZone(el) {
  if (!el) return null;
  if (el.classList && el.classList.contains("drop-zone")) {
    return el;
  }
  return findDropZone(el.parentElement);
}

// -------------------------------------------------------------
// Блок кода для mouse-событий (Fallback Drag)
// -------------------------------------------------------------
let isMouseDown = false;
let currentMouseItem = null;
let mouseCloneEl = null;
let mouseOffsetX = 0;
let mouseOffsetY = 0;

function mouseDown(e) {
  // Если уже идёт нативный drag (HTML5), можно прерывать
  // Но для надёжности лучше остановить «dragstart» через event.preventDefault()
  // если хотим полностью перейти на кастомную реализацию.
  
  // Сохраняем элемент, по которому кликнули
  currentMouseItem = e.currentTarget;
  isMouseDown = true;

  // Создаём клон
  mouseCloneEl = currentMouseItem.cloneNode(true);
  mouseCloneEl.classList.add("drag-clone");
  document.body.appendChild(mouseCloneEl);

  // Считаем смещение относительно верхнего левого угла элемента
  const rect = currentMouseItem.getBoundingClientRect();
  mouseOffsetX = e.clientX - rect.left;
  mouseOffsetY = e.clientY - rect.top;

  // Ставим позицию клона
  moveMouseClone(e.clientX, e.clientY);

  // Навешиваем глобальные слушатели, чтобы «ловить» движение везде
  document.addEventListener("mousemove", mouseMove, false);
  document.addEventListener("mouseup", mouseUp, false);

  e.preventDefault();
}

function mouseMove(e) {
  if (!isMouseDown || !mouseCloneEl) return;
  moveMouseClone(e.clientX, e.clientY);
  e.preventDefault();
}

function mouseUp(e) {
  if (!isMouseDown) return;
  isMouseDown = false;

  // Определяем, над каким элементом отпустили мышь
  const dropTarget = document.elementFromPoint(e.clientX, e.clientY);

  // Удаляем клон
  if (mouseCloneEl) {
    mouseCloneEl.remove();
    mouseCloneEl = null;
  }

  if (dropTarget) {
    const dropZone = findDropZone(dropTarget);
    if (dropZone) {
      dropZone.appendChild(currentMouseItem);
      checkCorrect(currentMouseItem.id, dropZone.id, currentMouseItem);
    }
  }

  // Сбрасываем
  currentMouseItem = null;
  mouseOffsetX = 0;
  mouseOffsetY = 0;

  // Убираем глобальные слушатели
  document.removeEventListener("mousemove", mouseMove, false);
  document.removeEventListener("mouseup", mouseUp, false);

  e.preventDefault();
}

function moveMouseClone(x, y) {
  mouseCloneEl.style.left = (x - mouseOffsetX) + "px";
  mouseCloneEl.style.top = (y - mouseOffsetY) + "px";
}