document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    
    document.body.classList.add(currentTheme);

    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
