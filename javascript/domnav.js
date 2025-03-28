function checkDOM() {
    const parent = document.getElementById('parent');
    const child1 = document.getElementById('child1');
    const child2 = document.getElementById('child2');
    const sibling = document.getElementById('sibling');

    alert('Parent Node: ' + parent.nodeName);
    alert('Parent Element: ' + child1.parentElement.nodeName);

    alert('Child Nodes Length: ' + parent.childNodes.length);
    alert('Children Length: ' + parent.children.length);

    alert('First Child: ' + parent.firstChild.nodeName);
    alert('Last Child: ' + parent.lastChild.nodeName);
    alert('First Element Child: ' + parent.firstElementChild.nodeName);
    alert('Last Element Child: ' + parent.lastElementChild.nodeName);

    alert('Next Sibling: ' + child1.nextSibling.nodeName);
    alert('Previous Sibling: ' + child2.previousSibling.nodeName);
    alert('Next Element Sibling: ' + child1.nextElementSibling.innerText);
    alert('Previous Element Sibling: ' + child2.previousElementSibling.innerText);

    alert('Second Child: ' + parent.children[1].innerText);
    alert('Total Children: ' + parent.children.length);

    for (let i = 0; i < parent.children.length; i++) {
        alert(`Child ${i + 1}: ` + parent.children[i].innerText);
    }

    alert('Sibling of P: ' + sibling.previousElementSibling.innerText);
}
