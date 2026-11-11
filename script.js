

const contextMenu = document.querySelector('#contextMenu');
const share = document.querySelector('#share');

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


share.addEventListener('mousedown',(e)=>{
e.preventDefault();
console.log('share : ' + getSelectedText())
})





function getSelectedText()
{
    return window.getSelection().toString()
}