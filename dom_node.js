function node(kwargs = {})
{
    const node = _create_element(kwargs.tag, kwargs.ns)
    set_text_content(node, kwargs.text_content)
    set_attributes(node, kwargs.attributes)
    set_css(node, kwargs.css)
    add_classes(node, ...kwargs.classes ?? [])
    add_event_listeners(node, ...kwargs.event_listeners ?? [])
    add_children(node, ...kwargs.children ?? [])
    return node
}

function _create_element(tag = "div", ns)
{
    return ns ? document.createElementNS(ns, tag) : document.createElement(tag)
}

function set_text_content(node, text_content = "")
{
    node.textContent = text_content
}

function set_attributes(node, attributes = {})
{
    for(const attribute of Object.entries(attributes))
        node.setAttribute(...attribute)
}

function set_css(node, css = {})
{
    for(const property of Object.entries(css))
        node.style.setProperty(...property)
}

function add_classes(node, ...classes)
{
    if(classes.length > 0)
        node.classList.add(...classes)
}

function add_event_listeners(node, ...event_listeners)
{
    for(const listener of event_listeners)
        node.addEventListener(...listener)
}

function add_children(node, ...children)
{
    for(const child of children)
        node.appendChild(child)
}

function toggle_attributes(node, ...attributes)
{
    for(const attribute of attributes)
        node.toggleAttribute(attribute)
}

function remove_attributes(node, ...attributes)
{
    for(const attribute of attributes)
        node.removeAttribute(attribute)
}

function remove_classes(node, ...classes)
{
    if(classes.length > 0)
        node.classList.remove(...classes)
}

function remove_event_listeners(node, ...event_listeners)
{
    for(const listener of event_listeners)
        node.removeEventListener(...listener)
}

function remove_all_children(node)
{
    while(node.firstChild)
        node.firstChild.remove()
}