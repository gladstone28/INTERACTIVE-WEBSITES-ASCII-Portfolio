const artPieces = {
    cat: `
      /\\_/\\  
     ( o.o ) 
      > ^ <
    `,
    dog: `
      / \\__
    (    @\\___
    /         O
   /   (_____/
  /_____/   U
    `,
    tree: `
       /\\
      /  \\
     /    \\
    /______\\
      ||||
      ||||
    `
};

function displayArt(type) {
    const art = artPieces[type];
    const artDisplay = document.getElementById('ascii-art');
    artDisplay.textContent = art;
}
