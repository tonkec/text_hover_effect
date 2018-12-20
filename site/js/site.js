const effects = [
  {
    "both-side": [
      "both-down",
      "both-up",
      "both-left",
      "both-right",
      "both-opening-horizontal",
      "left-down-right-up",
      "left-up-right-down",
      "overline-left-underline-right",
      "overline-right-underline-left"
    ]
  },

  {
    "corners-close": ["left-bottom", "left-top", "right-bottom", "right-top"]
  },
  {
    "corners-expand": ["bottom-left", "bottom-right", "top-left", "top-right"]
  },
  {
    "double-linethrough": [
      "bottom-left",
      "bottom-right",
      "top-left",
      "top-right"
    ]
  },
  {
    "double-underline": [
      "double-underline-left-right",
      "double-underline-right-left",
      "double-underline-opening",
      "double-underline-left",
      "double-underline-right"
    ]
  },
  {
    fill: [
      "fill-closing-horizontal",
      "fill-closing-vertical",
      "fill-down",
      "fill-up",
      "fill-left",
      "fill-right",
      "fill-opening-horizontal"
    ]
  },
  {
    "fill-corners": [
      "fill-bottom-left",
      "fill-bottom-right",
      "fill-top-left",
      "fill-top-right"
    ]
  },
  {
    linethrough: [
      "linethrough-closing",
      "linethrough-opening",
      "linethrough-left",
      "linethrough-right"
    ]
  },
  {
    moves: [
      "move-down",
      "move-up",
      "move-left",
      "move-right",
      "move-horizontal",
      "move-vertical"
    ]
  },
  {
    "one-side": ["left-down", "left-up", "right-down", "right-up"]
  },
  {
    overline: [
      "overline-closing",
      "overline-opening",
      "overline-left",
      "overline-right"
    ]
  },
  {
    underline: [
      "underline-closing",
      "underline-opening",
      "underline-left",
      "underline-right"
    ]
  }
];

const root = $("#root");
for (let item in effects) {
  let arrayItem = effects[item];
  let nameOfTheGroup = Object.keys(arrayItem);
  let arrayOfEffects = arrayItem[nameOfTheGroup];
  root.append(`
    <div class="effect-column">
      <p> ${nameOfTheGroup} </p>
    </div>
  `);

  for (effect in arrayOfEffects) {
    root.append(`
      <span id=${arrayOfEffects[effect]} class="effect"> ${
      arrayOfEffects[effect]
    } </span>
    `);
  }
}

$(".effect").click(function() {
  let id = $(this).attr("id");
  $("#result")
    .attr("class", "")
    .addClass("text-hover " + "text-hover-" + id);
});
