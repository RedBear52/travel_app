
const packingList = (country) => {
    console.log(country);
    const container = document.getElementById('pack-list-container')
    const form = document.getElementById('form')
    const input = document.getElementById('input')
    const packList = document.getElementById('pack-list')
    const userListItems = JSON.parse(localStorage.getItem('pack-list'))
    const header = document.createElement('h3')
    header.innerText = `
    Packing List for ${country} Trip
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
                console.log('double click happened');
                listEle.classList.toggle('checked-off')
            })

            listEle.addEventListener('contextmenu', (e) => {
                e.preventDefault()
                listEle.remove()
            })
        }
    }
    // const updateLocalStorage = () => {
    // }
}

export { packingList }