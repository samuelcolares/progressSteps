const main = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();
        this.buttonPrev.disabled = true

    },

    cacheSelectors: function () {
        this.buttonPrev = document.getElementById('prev')
        this.buttonNext = document.getElementById('next')
        this.circles = document.querySelectorAll('.circle')
        this.progress = document.getElementById('progress')
    },

    bindEvents: function () {
        this.buttonNext.addEventListener('click', (e) => {
            this.currentActive++
            this.buttonPrev.disabled = false

            if (this.currentActive > this.circles.length) {
                this.currentActive = this.circles.length
            }
            this.Events.update.bind(this)()
        })

        this.buttonPrev.addEventListener('click', (e) => {
            this.currentActive--
            if (this.currentActive < 1) {
                this.currentActive = 1
            }
            if (this.currentActive === 1) {
                e.target.disabled = true
            }
            this.Events.update.bind(this)()
        })
    },

    currentActive: 1,

    Events: {
        update: function () {
            this.circles.forEach((circle, idx) => {
                if (idx < this.currentActive) {
                    circle.classList.add('active')
                } else (
                    circle.classList.remove('active')
                )
            })
            const actives = document.querySelectorAll('.active')
            this.progress.style.width = (actives.length - 1) / (this.circles.length - 1) * 100 + '%'
            console.log((actives.length - 1) / (this.circles.length - 1))

        }
    },

}

main.init();


