document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('spinner').style.display = 'flex';
    setTimeout(() => {
        window.location.href = 'mailto:umarashfaq519@gmail.com';
        document.getElementById('spinner').style.display = 'none';
    }, 1000);
});

document.getElementById('nextSectionButton').addEventListener('click', function() {
    document.getElementById('webDevSection').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('previousSectionButton').addEventListener('click', function() {
    document.getElementById('profileSection').scrollIntoView({ behavior: 'smooth' });
});
