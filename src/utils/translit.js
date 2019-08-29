const dict = {
  "а":"a",
  "б":"b",
  "в":"v",
  "г":"g",
  "д":"d",
  "е":"e",
  "ё":"ye",
  "ж":"zh",
  "з":"z",
  "и":"i",
  "й":"y",
  "к":"k",
  "л":"l",
  "м":"m",
  "н":"n",
  "о":"o",
  "п":"p",
  "р":"r",
  "с":"s",
  "т":"t",
  "у":"u",
  "ф":"f",
  "х":"kh",
  "ц":"ts",
  "ч":"ch",
  "ш":"sh",
  "щ":"shch",
  "ъ":"",
  "ы":"y",
  "ь":"",
  "э":"e",
  "ю":"yu",
  "я":"ya",
  " ":"-",
}




export function CyrillicToTransliteration(str) {
 return str
    .toLowerCase()
    .split("")
    .map(w => {
      if (dict.hasOwnProperty(w)) {
        return dict[w];
      }
      return "";
    })
    .join("");
}

//
// console.log(translit("Борщ"), ' : ',translit("Борщ") === "borshch")
// console.log(translit("Котлетки из индейки и тыквы в сметанном соусе"), ' : ',translit("Котлетки из индейки и тыквы в сметанном соусе") === "kotletki-iz-indeyki-i-tykvy-v-smetannom-souse")
// console.log(translit("Рыбная солянка на сковороде"), ' : ',translit("Рыбная солянка на сковороде") === "rybnaya-solyanka-na-skovorode")
// console.log(translit("Треска с овощами в горчичном соусе"), ' : ',translit("Треска с овощами в горчичном соусе") === "treska-s-ovoshchami-v-gorchichnom-souse")
// console.log(
//   translit("«Рис» из цветной капусты"),
//   " : ",
//   translit("«Рис» из цветной капусты") === "ris-iz-tsvetnoy-kapusty"
// );
