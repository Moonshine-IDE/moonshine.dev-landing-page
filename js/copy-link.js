document.addEventListener('DOMContentLoaded', () => {
  const versionAnchors = document.querySelectorAll('.version-anchor');
  
  versionAnchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const url = window.location.origin + window.location.pathname + anchor.getAttribute('href');
      navigator.clipboard.writeText(url).then(() => {
        // Show feedback
        const feedback = document.createElement('span');
        feedback.textContent = 'Link copied!';
        feedback.className = 'copy-feedback';
        anchor.appendChild(feedback);
        
        // Remove feedback after animation
        setTimeout(() => {
          feedback.remove();
        }, 2000);
      });
    });
  });
});
