// Constants
const TOTAL_BLOCKS = 1300;
const TOTALCLUSTERS = 12800 + ~~(Math.random() * 4250);
const CLUSTERSPERBLOCK = ~~(TOTALCLUSTERS / TOTAL_BLOCKS);

// DOM
const modals = document.querySelectorAll('.testing.dialog, .reading.dialog, .analyzing.dialog, .finished.dialog');
const screens = document.querySelectorAll('.surface, .info');
const surface = document.querySelector('.surface');
const currentCluster = document.querySelector('.currentcluster');
const percent = document.querySelector('.percent');
const fill = document.querySelector('.fill');
const elapsedTime = document.querySelector('.elapsedtime');

// Block generator
const genBlock = () => {
  const num = ~~(Math.random() * 500);

  if (num < 1)
  return 'bad';
  if (num < 2)
  return 'unmovable';
  if (num < 175)
  return 'used frag';else

  return 'unused';
};

// Generate surface
for (let i = 0; i < TOTAL_BLOCKS; i++) {
  const span = document.createElement('span');
  span.className = `block ${genBlock()}`;
  surface.appendChild(span);
}

document.querySelector('.clustersperblock').textContent = CLUSTERSPERBLOCK.toLocaleString('en');

// Time Counter
let time = 0;
const updateTime = () => {
  elapsedTime.textContent = new Date(time * 1000).toISOString().substr(11, 8);
  time++;
};

// Ending phase
const endDefrag = () => {
  modals[3].hidden = false;
  clearInterval(timer);
};

// Reading phase
const readBlock = () => {
  currentCluster.textContent = CLUSTERSPERBLOCK * currentBlock;
  if (blocks[currentBlock].classList.contains('frag')) {
    console.log(currentBlock, 'fragment detected');
    blocks[currentBlock].classList.remove('frag');
  } else
  if (blocks[currentBlock].classList.contains('unused')) {
    const fragments = document.querySelectorAll('.used.frag');
    const p = ~~(currentBlock * 100 / totalBlocks);
    percent.textContent = p;
    fill.style.setProperty('width', `${p}%`);
    if (fragments.length == 0) {
      endDefrag();
      return;
    }
    const num = ~~(Math.random() * fragments.length);
    fragments[num].classList.remove('used', 'frag');
    fragments[num].classList.add('unused', 'reading');
    setTimeout(() => fragments[num].classList.remove('reading'), 200 + ~~(Math.random() * 800));
    blocks[currentBlock].classList.remove('unused');
    blocks[currentBlock].classList.add('used');
  } else

  currentBlock++;

  setTimeout(readBlock, 50 + ~~(Math.random() * 50) + [0, 0, 0, 50, 200][~~(Math.random() * 5)]);
};

let currentBlock = 0;
const totalBlocks = document.querySelectorAll('.used.frag').length;
const blocks = document.querySelectorAll('.block');
const folders = document.querySelector('.folders');

const startDefrag = () => {
  timer = setInterval(updateTime, 1000);
  setTimeout(readBlock, 500);
};

const TAGS = ['GAMES', 'DOS', 'WINDOWS', 'AUTODESK', 'EMM386', 'PCSHELL',
'ZIP', 'RAR', 'PORN', 'COREL', 'WOLF3D', 'TRACKERS', 'WORM',
'NORTON', 'DOSHELL', 'INDY', 'MONKEY', 'SIMON', 'WORKS', '2DISK'];

const startDialogs = () => {
  setTimeout(() => {
    modals[0].hidden = true;
    modals[1].hidden = false;
  }, 3000);

  setTimeout(() => {
    modals[1].hidden = true;
    modals[2].hidden = false;
    extractTags(TAGS);
  }, 5000);

  setTimeout(() => {
    modals[2].hidden = true;
    screens[0].classList.remove('off');
    screens[1].classList.remove('off');
    startDefrag();
  }, 7000);
};

const extractTags = tags => {
  if (tags.length > 0)
  setTimeout(() => {
    folders.textContent = tags.shift();
    extractTags(tags);
  }, 100);
};

startDialogs();