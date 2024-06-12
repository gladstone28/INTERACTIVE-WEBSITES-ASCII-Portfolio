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
    `,
    house: `
           /\\
          /  \\
         /____\\
        / |  | \\
       /  |  |  \\
      /___|__|___\\
      |   ____   |
      |  |    |  |
      |__|____|__|
    `,
    piano: `
    ______
   /_____ /|
  |      | |
  |  ()  | |
  |______|/
    `,
    bed: `
    ______________________
   /                      /|
  /______________________/ |
  |                      | |
  |                      | |
  |                      |/
    `
};

function displayArt(type) {
    const art = artPieces[type];
    const artDisplay = document.getElementById('ascii-art');
    artDisplay.textContent = art;
}
