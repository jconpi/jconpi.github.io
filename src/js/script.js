function copyEmail(event) {
    event.preventDefault(); 
    const email = 'contreraspinargotejeremy@gmail.com'; 
    const el = document.createElement('textarea');
    el.value = email;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Email copied to clipboard: ' + email);
}