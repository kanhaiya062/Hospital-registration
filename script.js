document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('popup').style.display = 'block';
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    window.location.href = 'login.html'; 
  });