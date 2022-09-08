 /* packingList function: 
Dynamically build a 'create Pack List for trip' button and append it to the 
appropriate section in the DOM
Add event listener to button: upon click implement 'modal' pack list interface
*/
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
    // Check local storage for (and display) pre-existing pack list items 
    if (userListItems) {
        userListItems.forEach(listItem => addPackListItem(listItem))
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        addPackListItem()
    })
    /* Process either user-inputted (form) OR pre-existing (local storage) data
    & render to packList UI
    Create event listeners to handle dbl and right clicks to remove and mark as completed
    and existing list items
    Call updateLocalStorage function after any relevant state change
    */
    function addPackListItem(listItem) {
        let listItemText = input.value
        
        if (listItem) {
            listItemText = listItem.text
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
    /* Grab pack list entries, iterate over them, push processed data from forEach iteration
    to the listItems array and send stringified version to local storage.
    */
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