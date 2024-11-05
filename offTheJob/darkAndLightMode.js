//if statement - evaluates boolean darkMode and lightMode
//  const prefersDarkMode = true

//  if (prefersDarkMode){
//     console.log('dark mode set');
//     document.body.style.background = 'black'
//  }else{
//     console.log('light mode set');
//     document.body.style.background = 'blue'
//  }

// a better way to change colors without 
// making a lot of comparison is to use the switch mode

const colorMode = 'dark';

switch (colorMode){
    case 'solarized':
        console.log('solarized mode set');
        document.body.style.background = 'gold'
    break;
    case 'dark':
        console.log('dark mode set');
        document.body.style.background = 'black'
    break;
    default:// used when both condition are not met
        console.log('light mode set');
        document.body.style.background = 'white'
}