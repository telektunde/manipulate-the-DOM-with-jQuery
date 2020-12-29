let names = ['Peti', 'Miki', 'Zsuzsi', 'Tunde'];

names.forEach((name) => {
    if (name=='Tunde') {
        $('ul').append('<li><strong>' + name + '</strong></li>');
    } else {
        $('ul').append('<li>' + name + '</li>');   
    }
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('ul').after('<h1>' + additionalBlock['title'] + '</h1>' + '<p>' + additionalBlock['text'] + '</p>');