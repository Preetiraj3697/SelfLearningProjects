

const dropItems = document.getElementById('drop-item');

new Sortable(dropItems,{
    animation: 350,
    dragClass: "sortable-drag"
})