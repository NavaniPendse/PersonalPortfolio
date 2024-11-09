const toggleSwitch = document.getElementById('theme-switch');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  document.documentElement.classList.add(currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }
});

// Animated Text Effect
const text = document.querySelector('.animated-text');
const phrases = ['Web Developer', 'Programmer', 'Designer'];
let i = 0;
let j = 0;
let currentPhrase = '';
let isDeleting = false;

const loop = () => {
  const currentLetter = phrases[i].charAt(j);

  if (isDeleting) {
    text.textContent = currentPhrase.slice(0, -1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  } else {
    text.textContent += currentLetter;
    j++;
    if (j === phrases[i].length) {
      isDeleting = true;
    }
  }

  setTimeout(loop, 100);
};

loop();
