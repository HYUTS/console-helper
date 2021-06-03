/**
* [Print to console with style!]
* Colors accepted format HEX and STRING
* Hex #000 -> #FFFFFF or "red","orange",,, -> "black"
* @param  {[String]} string Text you would like to print to console
* @param  {[String]} bg_color Background-color of console only behind text d: "black"
* @param  {[String]} fg_color Foreground color of your text d: "black"
* @param  {[Number]} f_size Font size default: "15"
* @return  {[void]}  \\..(0.0)../
*/
function p(str = "p(string, background, forground, font-size);", bg_color = "black", fg_color = "lime", f_size = "15px") {
  console.log('%c ' + str + ' ', 'background: ' + bg_color + '; color: ' + fg_color + '; font-size:  ' + f_size + 'px');
}
