const setupContainer = document.querySelector('.drop-down-options')
const setUpGuide = document.querySelector('.setup-guide')
const closeSetupGuide = document.querySelector('.drop-down-btn svg')
const selectPlanBanner = document.querySelector('.select-plan-banner')
const closeBanner = document.querySelector('.close-banner')
const profileTab = document.querySelector('.profile')
const profileDropDown = document.querySelector('.profile-drop-down')
const alertTab = document.querySelector('.notification')
const alertDropDown = document.querySelector('.alert-drop-down')

alertTab.addEventListener('click', () => {
    alertDropDown.classList.toggle('open-drop-down')
    if (alertDropDown.classList.contains('open-drop-down')) {
        alertTab.style.backgroundColor = "#656266"
    } else {
        alertTab.style.backgroundColor = "#303030"
    }
})

profileTab.addEventListener('click', () => {
    profileDropDown.classList.toggle('open-drop-down')
    if (profileDropDown.classList.contains('open-drop-down')) {
        profileTab.style.backgroundColor = "#656266"
    } else {
        profileTab.style.backgroundColor = "#303030"
    }
})

closeBanner.addEventListener('click', () => {
    selectPlanBanner.style.display = "none";
})

const setupGuides = [
    {
        id: 1,
        title: "Customize your online store",
        description: "Choose a theme and add your logo, colors, and images to reflect your brand.",
        link: '#',
        imageUrl: "https://crushingit.tech/hackathon-assets/customise-store.png",
        open: true,
        btnLabel: 'Customize theme'
    },
    {
        id: 2,
        title: "Add your first product",
        description: "Write a description, add photos, and set pricing for the products you plan to sell.",
        link: '#',
        imageUrl: "https://crushingit.tech/hackathon-assets/product.png",
        open: false,
        btnLabel: 'Add product'
    },
    {
        id: 3,
        title: "Add a custom domain",
        description: "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
        link: '#',
        imageUrl: "https://crushingit.tech/hackathon-assets/website.png",
        open: false,
        btnLabel: 'Add domain'
    },
    {
        id: 4,
        title: "Name your store",
        description: "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.",
        link: '#',
        imageUrl: "https://crushingit.tech/hackathon-assets/name-store.png",
        open: false,
        btnLabel: 'Name store'
    },
    {
        id: 5,
        title: "Set up a payment provider",
        description: "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.",
        link: '#',
        imageUrl: "https://crushingit.tech/hackathon-assets/payment.png",
        open: false,
        btnLabel: 'Set up payment'
    },
]

let currentGuide = 1

const renderUI = () => {
    setupGuides.forEach(guide => {
        const guideElement = `
        <div class="guide ${currentGuide === guide.id ? '' : 'closed'}">
        <div class="left">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
            </svg>
            <h4 class="hide">${guide.title}</h4>
            <div class="guide-content">
              <h4>${guide.title}</h4>
              <p>${guide.description} <a href="${guide.link}">Learn more</a></p>
              <a href="#" class="primary-btn">${guide.btnLabel}</a>
            </div>
        </div>
        <img src="${guide.imageUrl}" alt="" class="guide-img">
      </div>
        `
        setupContainer.insertAdjacentHTML("beforeend", guideElement)
    })
    const guides = setupContainer.querySelectorAll('.guide')
    guides.forEach((guide, index) => {
        guide.addEventListener('click', () => {
            currentGuide = index + 1
            setupContainer.innerHTML = ''
            renderUI()
        })
    })
}

const action = () => {
    console.log('clicked')
}
renderUI()

closeSetupGuide.addEventListener('click', () => {
    setUpGuide.classList.toggle("close-drop-down")
})