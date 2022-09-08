
function packingList(country) {
    const packListContainer = document.getElementById('section-container_pack-list')
    const newButton = document.createElement('button')
    packListContainer.appendChild(newButton)
    newButton.setAttribute('id', 'pack-list-btn')
    newButton.innerText = `+ create a packing list for ${country} trip`

    newButton.addEventListener('click', () => {
        const myModal = document.getElementById('my-modal')
        myModal.style.display = 'block'

        const close = document.getElementsByClassName('close')[0]
        close.addEventListener('click', () => {
            myModal.style.display = 'none'
        })
        window.addEventListener('click', (e) => {
            if (e.target == myModal)
                myModal.style.display = 'none'
        })
    })
}

    const form = document.getElementById('pack-list-form')
    form.style.display = 'block'
    const input = document.getElementById('input')
    const userUL = document.getElementById('pack-list')
    const userListItems = JSON.parse(localStorage.getItem('listItems'))

    if (userListItems) {
        userListItems.forEach(listItem => addPackListItem(listItem))
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        addPackListItem()
    })

    function addPackListItem(listItem) {

        let listItemText = input.value
        console.log(listItemText)
        
        if (listItem) {
            listItemText = listItem.text
            console.log(listItemText)
        }

            if (listItemText) {
                const listEle = document.createElement('li')
                listEle.setAttribute('id', 'pack-list-item')
                    if (listItem && listItem.checkedOff) {
                        listEle.classList.add('checked-off')
                    }
           
            listEle.innerText = listItemText

            listEle.addEventListener('dblclick', () => {
                listEle.remove()
                updateLocalStorage()
            })

            listEle.addEventListener('contextmenu', (e) => {
                e.preventDefault()
                listEle.classList.toggle('checked-off')
                updateLocalStorage()
            })

        userUL.appendChild(listEle)
        input.value = ''
        updateLocalStorage()  
    }
}
    
    function updateLocalStorage() {
        let listItemsEle = document.querySelectorAll('#pack-list-item')

        const listItems = []

        listItemsEle.forEach(item => {

            listItems.push({
                text: item.innerText,
                checkedOff: item.classList.contains('checked-off')
            })
        })

        localStorage.setItem('listItems', JSON.stringify(listItems))
    }

export { packingList }