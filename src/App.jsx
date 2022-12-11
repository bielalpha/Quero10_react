import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  

  const inputRef = useRef(null);

  const [updated, setUpdated] = useState('');

  const [colorArr, setColorArr] = useState([
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightpink",
    "lightsalmon",
    "lightseagreen	",
    "lightskyblue	",
    "lightslategray	",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"
  ])

  let arrayOfRandomColors = []
  let rightItem = ""

  const compare = () => {
    let input = inputRef.current.value
    console.log(input)
    let alphabeticalOrder = []
    alphabeticalOrder.push(input, rightItem)
    alphabeticalOrder.sort(function (a, b) {
      if (a > b) {
        return -1;
      }
      if (b > a) {
        return 1;
      }
      return 0;
    });
    if (alphabeticalOrder[0] == alphabeticalOrder[1]) {
      alert("O valor inserido correto !!")
      document.body.style.backgroundColor = rightItem
    } else if (alphabeticalOrder[1] == input) {
      alert("Opa a resposta é alfabeticamente maior, tente novamente !!!")
    } else if (alphabeticalOrder[0] == input) {
      alert("Opa a resposta é alfabeticamente menor, tente novamente !!!")
    }
  }

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      let item = colorArr[Math.floor(Math.random() * colorArr.length)];
      arrayOfRandomColors.push(item)
    };
    let item = arrayOfRandomColors[Math.floor(Math.random() * arrayOfRandomColors.length)]
    rightItem = item
    document.getElementById('colorsSelect').innerHTML = arrayOfRandomColors
  }, [])

  return (
    <div className="container">
      <p>Adivinhe a cor com base no texto abaixo</p>
      <p id="colorsSelect">{colorArr}</p>
      <h4>Insira a cor</h4>
      <input type="text" className="inserir" ref={inputRef} />
      <button className="button" onClick={compare}>Adivinhar</button>
    </div>
  )
}

export default App
