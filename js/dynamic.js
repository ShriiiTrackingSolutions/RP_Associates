function loadContent(elementId, filePath) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Could not fetch ${filePath}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading content:', error);
      });
  }
  
  // Load the header and footer dynamically
  window.addEventListener('DOMContentLoaded', () => {
    // Adjust paths to point to the "partials" folder
    loadContent('header', 'partials/header.html');
    loadContent('footer', 'partials/footer.html');
  });
  