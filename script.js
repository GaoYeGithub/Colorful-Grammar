const wordpos = new WordPOS({
  dictPath: "https://cdn.jsdelivr.net/npm/wordpos-web@1.0.2/dict"
})

$(document).ready(() => {
  const updateBackground = () => {
    let sentence = $("#sentence").val()
    wordpos.getPOS(sentence).then(types => {
      const leftGradient = (((types.verbs.length +
        types.adverbs.length +
        types.nouns.length +
        types.adjectives.length) * 10) + (types.rest.length / 20)) 
      const rightGradient = sentence.length * 10

      $("body").css("background-image", `linear-gradient(to right,
        hsl(${leftGradient}, 80%, 60%), hsl(${rightGradient}, 90%, 70%)
      `)
    })
  }

  const updateFont = () => {
    const fontSize = $("#font-size").val() + "px"
    const fontFamily = $("#font-family").val()
    $("#sentence").css({
      "font-size": fontSize,
      "font-family": fontFamily
    })
  }

  updateBackground()
  updateFont()

  $("#sentence").on("keydown", updateBackground)
  $("#font-size").on("input", updateFont)
  $("#font-family").on("change", updateFont)
})
