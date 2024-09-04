const { createApp } = Vue

createApp({
    data() {
        return {
            // array di oggetti (immagini)
            listImages: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],
            // stabilisco una proprietà per tenere l attuale index
            activeIndex: 0,
            class: 'active',
            autoPlayInterval: null,
        }
    },
    methods: {
        // metodo o funzione per diminuire l index
        prevImage() {
            this.activeIndex = (this.activeIndex === 0) ? this.listImages.length - 1 : this.activeIndex - 1;
        },
        // metodo o funzione per aumentare l index
        nextImage() {
            this.activeIndex = (this.activeIndex === this.listImages.length - 1) ? 0 : this.activeIndex + 1;
        },
        // metodo o funzione che uso al click su una miniatura per cambiare l index
        currentThumb(index) {
            this.activeIndex = index;
        },
        autoPlay() {
            if (!this.autoPlayInterval) {
                this.autoPlayInterval = setInterval(() => {
                    this.nextImage();
                }, 3000);
            }
        },
        stopAutoPlay() {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        },
    },

}).mount('#app')