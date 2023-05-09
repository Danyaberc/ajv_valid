

console.log('IT`S FRONT JS')
const name_inp = document.querySelector('.name_inp')
const text_inp = document.querySelector('.text_inp')
const submit_but = document.querySelector('.submit_but')
const articles = document.querySelector('.articles')
//MODEL

//CONTROLLER

submit_but.addEventListener('click', (event) => {
   event.preventDefault();
   run(name_inp.value, text_inp.value)
   console.log(typeof name_inp.value)
   console.log(typeof text_inp.value)
})

//VIEW

const renderPage = async (arrInfo) => {
   articles.innerHTML = '';
   arrInfo.data.forEach(item => {
      articles.innerHTML += `
      <div class ="article_name">${item.inpname}
         <div class ="article_text">${item.inptext}</div>
      </div>
      `
   })
   let article_name = document.querySelectorAll('.article_name')
   let article_text = document.querySelectorAll('.article_text')
   for (let i = 0; i < article_name.length; i++) {
      article_name[i].addEventListener('click', (ev) => {
         for (let i = 0; i < article_text.length; i++) {
            if (article_text[i].classList.contains('on')) {
               article_text[i].classList.remove('on')
               console.log('ЦЕ ІФ ІФ ІФ')
            }
         }
         ev.target.childNodes[1].classList.add('on')
      })
   }

}
//RUNNER

const run = async (name, text) => {
   const inpname = name;
   const inptext = text;



   const arrInfo = await axios.post('/ajax', { inpname: inpname, inptext: inptext })
   console.log(arrInfo)
   renderPage(arrInfo)

}

