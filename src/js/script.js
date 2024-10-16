let weCreate = document.getElementById('weCreate')
let weCreateHeight = weCreate.scrollHeight
let upperText = document.querySelectorAll('.slider .sliderText')
let slidernumber = document.querySelectorAll('.slider .sliderNumerator')
let researchChildren = Object(upperText[0].children)

const baseURL = 'file:///C:/Users/IHC/Desktop/wpage/src/img/'
let supportChildren = Object(upperText[1].children)
const btn = slidernumber[2]
const sliderTopics = ['research & development', 'services & solutions', 'product innovation']
const urls = ['R&D-ow.svg', 'services-w.svg', 'services-w.svg']
let onclick = false
btn.addEventListener('click', () => {
    onclick = true
    change() 
})
window.addEventListener('load', () => {
    setInterval(() => {
        change()
    }, 5000);
})

const change = () => {
    upperText[0].classList.add("animate-[opacity_1s_alternate]")
    upperText[1].classList.add("animate-[opacity_1s_alternate]")

    setTimeout(() => {
        upperText[0].classList.remove("animate-[opacity_1s_alternate]")
        upperText[1].classList.remove("animate-[opacity_1s_alternate]")
            
        switch (slidernumber[0].innerHTML) {
            case '2':
                slidernumber[0].innerHTML = '3'
                slidernumber[1].innerHTML = '1'
                researchChildren[0].currentSrc = baseURL + urls[2]
                researchChildren[1].innerHTML = sliderTopics[2]
                supportChildren[0].currentSrc = baseURL + urls[0]
                supportChildren[1].innerHTML = sliderTopics[0]
                break
            case '3':
                slidernumber[0].innerHTML = '1'
                slidernumber[1].innerHTML = '2'
                researchChildren[0].currentSrc = baseURL + urls[0]
                researchChildren[1].innerHTML = sliderTopics[0]
                supportChildren[0].currentSrc = baseURL + urls[1]
                supportChildren[1].innerHTML = sliderTopics[1]
                break
            default:
                slidernumber[0].innerHTML = '2'
                slidernumber[1].innerHTML = '3'
                researchChildren[0].currentSrc = baseURL + urls[1]
                researchChildren[1].innerHTML = sliderTopics[1]
                supportChildren[0].currentSrc = baseURL + urls[2]
                supportChildren[1].innerHTML = sliderTopics[2]
        }
    }, 1000);
}

window.addEventListener('scroll', () => {
    let temp = window.scrollY
    if (temp > weCreateHeight * 1.2) {
        weCreate.style.right = temp / 7 + 'px'
    }
})

