(function () {
  class jumboTron extends HTMLElement {
    constructor() {
      super()
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._backButton = document.createElement('button')
      this._backButton.onclick = () => this.handleClick('backward')
      // this._backButton.setAttribute('onClick', () => this.handleClick('backward'))
      this._forwardButton = document.createElement('button')
      this._forwardButton.onclick = () => this.handleClick('forward')
      // this._forwardButton.setAttribute('onClick', () => this.handleClick('forward'))
      this._currSlide = 0
      this._imgs = document.querySelectorAll('img')
    }

    connectedCallback() {
      this.back = this._shadowRoot.appendChild(this._backButton)
      this.back.style.backgroundColor = 'transparent'
      this.back.style.width = '10%'
      this.back.style.padding = '0'
      this.back.style.fontSize = '50px'
      this.back.focus = 'outline: none;'
      this.back.innerHTML = '<'
      this.image = this._shadowRoot.appendChild(document.createElement('img'))
      this.image.setAttribute('src', this._imgs[this._currSlide + 1].getAttribute('src'))
      this.forward = this._shadowRoot.appendChild(this._forwardButton)
      this.forward.style.backgroundColor = 'transparent'
      this.forward.style.width = '10%'
      this.forward.style.padding = '0'
      this.forward.style.fontSize = '50px'
      this.forward.innerHTML = '>'
      this.render()
    }

    handleClick(direction) {
      if (direction === 'forward') {
        if (this._currSlide < this._imgs.length - 2) {
          this._currSlide += 1
        }
      } else if (direction === 'backward') {
        if (this._currSlide > 0) {
          this._currSlide -= 1
        }
      }
      this.render()
    }

    render() {
      console.log(this._currSlide)
      this.image.setAttribute('src', this._imgs[this._currSlide + 1].getAttribute('src'))
      this.image.style.width = '100%'
      this.image.style.height = '100%'
    }
  }

  customElements.define('jumbo-tron', jumboTron)
})()

