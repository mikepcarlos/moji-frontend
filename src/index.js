const endPoint = 'http://localhost:3000/api/v1/emojis';
// const emojiList = document.querySelector('.emojis-list')

document.addEventListener('DOMContentLoaded', () => {
  let currentKeyDownFn;

  const cards = document.querySelector('.cards-list')

  fetchEmoji()

  function fetchEmoji() {
    fetch(endPoint)
      .then(res => res.json())
      .then(emojiPage)
  }

  function emojiPage(data) {
    // let emojiId = 0
    let btnId = 0
    let newArr = data.slice();
    for (var i = 0; i < data.length/4; i++) {
      const card = document.createElement('div')
      const btn = document.createElement('button')
      btn.dataset.id = ++btnId
      btn.addEventListener('click', playCard)
      card.className = "card"
      let mojis = newArr.splice(0, 4)
      mojis.forEach(moji => {
        const emojiDiv = document.createElement('div')
        const img = document.createElement("img")
        const markup = `<h3 hidden>${moji.title}</h3>`;
        emojiDiv.className = moji.title
        emojiDiv.innerHTML += markup
        img.src = getImage(moji.title)
        img.addEventListener('click', playSound)
        emojiDiv.append(img)
        btn.innerText = 'PLAY THIS CARD'
        // emojiDiv.id = ++emojiId
        card.append(emojiDiv, btn)
      })
      cards.append(card)
    }
  }

  function playCard(event) {

    if (currentKeyDownFn !== undefined) {
      document.removeEventListener("keydown", currentKeyDownFn)
    }
    currentKeyDownFn = keyDownListener(event)

    document.addEventListener('keydown', currentKeyDownFn )

  }

  function keyDownListener(event) {
      // console.log(e.target);
      return (e) => {
        if (e.keyCode === 65) {
        getSound(event, 0)
      } else if (e.keyCode === 83) {
        getSound(event, 1)
      } else if (e.keyCode === 68) {
        getSound(event, 2)
      } else if (e.keyCode === 70) {
        getSound(event, 3)
      } else {
        alert('wrongkey')
      }
    }

  }

  function getSound(event, index) {
    const mojis = event.target.parentNode.children
    //debugger
    const name = mojis[index].querySelector('h3')
    // debugger
    switch (name.innerText){
      case "Bday":
        var bday = new Audio('./audio/wierd-R-sound.wav');
        bday.play();
        break;
      case "Crying":
        var cry = new Audio('./audio/sad-chord.wav');
        cry.play();
        break;
      case "Facepalm":
        var cry = new Audio('./audio/erase3.wav');
        cry.play();
        break;
      case "Flower":
        var flower = new Audio('./audio/mariogrow.wav');
        flower.play();
        break;
      case "IceCold":
        var cold = new Audio('./audio/coin.wav');
        cold.play();
        break;
      case "Idc":
        var idc = new Audio('./audio/switch.wav');
        idc.play();
        break;
      case "Killer":
        var kill = new Audio('./audio/gnatattack_bossminibugs.wav');
        kill.play();
        break;
      case "Kiss":
        var kiss = new Audio('./audio/love-chord.wav');
        kiss.play();
        break;
      case "Kissy":
        var kissy = new Audio('./audio/musicnote12.wav');
        kissy.play();
        break;
      case "Laugh":
        var laugh = new Audio('./audio/laughing-chord.wav');
        laugh.play();
        break;
      case "Poop":
        var poop = new Audio('./audio/titlescreen-a-fall.wav');
        poop.play();
        break;
      case "Smoking":
        var smoke = new Audio('./audio/horn.wav');
        smoke.play();
        break;
      case "Stupid":
        var stupid = new Audio('./audio/funkBeat.wav');
        stupid.play();
        break;
      case "SuperCool":
        var cool = new Audio('./audio/airhorn.wav');
        cool.play();
        break;
      case "SuperMan":
        var man = new Audio('./audio/musicnote9.wav');
        man.play();
        break;
      case "Yell":
        var yell = new Audio('./audio/shocked-chord.wav');
        yell.play();
        break;
      }

  }


  function getImage(title) {
    return `./emoji_img/${title}.gif`
  }

  function playSound(event) {
    const name = event.target.parentNode.children[0]
    switch (name.innerText){
      case "Bday":
        var bday = new Audio('./audio/wierd-R-sound.wav');
        bday.play();
        break;
      case "Crying":
        var cry = new Audio('./audio/sad-chord.wav');
        cry.play();
        break;
      case "Facepalm":
        var cry = new Audio('./audio/erase3.wav');
        cry.play();
        break;
      case "Flower":
        var flower = new Audio('./audio/mariogrow.wav');
        flower.play();
        break;
      case "IceCold":
        var cold = new Audio('./audio/coin.wav');
        cold.play();
        break;
      case "Idc":
        var idc = new Audio('./audio/switch.wav');
        idc.play();
        break;
      case "Killer":
        var kill = new Audio('./audio/gnatattack_bossminibugs.wav');
        kill.play();
        break;
      case "Kiss":
        var kiss = new Audio('./audio/love-chord.wav');
        kiss.play();
        break;
      case "Kissy":
        var kissy = new Audio('./audio/musicnote12.wav');
        kissy.play();
        break;
      case "Laugh":
        var laugh = new Audio('./audio/laughing-chord.wav');
        laugh.play();
        break;
      case "Poop":
        var poop = new Audio('./audio/titlescreen-a-fall.wav');
        poop.play();
        break;
      case "Smoking":
        var smoke = new Audio('./audio/horn.wav');
        smoke.play();
        break;
      case "Stupid":
        var stupid = new Audio('./audio/funkBeat.wav');
        stupid.play();
        break;
      case "SuperCool":
        var cool = new Audio('./audio/airhorn.wav');
        cool.play();
        break;
      case "SuperMan":
        var man = new Audio('./audio/musicnote9.wav');
        man.play();
        break;
      case "Yell":
        var yell = new Audio('./audio/shocked-chord.wav');
        yell.play();
        break;
      }
  }
});
