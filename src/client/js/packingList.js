
const packingList = (country) => {
    const packListContainer = document.getElementById('section-container_pack-list')
    const newButton = document.createElement('button')
    packListContainer.appendChild(newButton)
    newButton.id = 'pack-list-btn'
    newButton.innerText = `+ create a packing list for ${country} trip`

    newButton.addEventListener('click', () => {
        newButton.classList = 'hidden'
        const container = document.getElementById('pack-list-container')
        const myModal = document.getElementById('my-modal')
        myModal.style.display = 'block'
        
        const close = document.getElementsByClassName('close')[0]
        close.addEventListener('click', () => {
            close.style.display = 'none'
        })
        window.addEventListener('click', (e) => {
            if (e.target == packListContainer)
            packListContainer.style.display = 'none'
        })

        const form = document.getElementById('pack-list-form')
        form.classList.toggle('hidden')
    //     const input = document.getElementById('input')
    //     const packList = document.getElementById('pack-list')
    //     packList.style.display = 'block'
        const userListItems = JSON.parse(localStorage.getItem('pack-list'))
        const header = document.createElement('h3')
        header.innerText = `
        Packing List
        `
        
        container.insertAdjacentElement("afterbegin", header)
  

        if(userListItems) {
            userListItems.forEach(listItem => addPackListItem(listItem))
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            addPackListItem(input)
        })

        const addPackListItem = (listItem) => {
            let listItemText = listItem.value
            if(listItem) {
                const listEle = document.createElement('li')

                if(listItem && listItem.completed) {
                    listEle.classList.add('checked-off')
                }

                listEle.innerText = listItemText
                packList.appendChild(listEle)
                input.value = ''

                listEle.addEventListener('dblclick', () => {
                    listEle.classList.toggle('checked-off')
                })

                listEle.addEventListener('contextmenu', (e) => {
                    e.preventDefault()
                    listEle.remove()
                })
            }
        }
    // const updateLocalStorage = () => {
    })
}

export { packingList }