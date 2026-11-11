

const contextMenu = document.querySelector('#contextMenu');


document.addEventListener('contextmenu',(e)=>{
    const selected = getSelectedText();
    if(selected)
    {
        e.preventDefault();
        console.log('Something is selected');
        contextMenu.style.display = 'block';
        contextMenu.style.left = e.pageX+'px';
        contextMenu.style.top = e.pageY+'px'; 
    }
    else 
    {
        console.log('Nothing is selected');
        contextMenu.style.display = 'none';
    }
})


document.addEventListener('click',()=>{
        contextMenu.style.display = 'none';
})





function getSelectedText()
{
    return window.getSelection().toString()
}