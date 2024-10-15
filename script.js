window.onload = function () {
    const target_div = document.getElementById('article_container');

    function create_div(header_text, paragraph_text) {
        const new_div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        h2.textContent = header_text;
        p.textContent = paragraph_text;

        new_div.classList.add('article_styles');
        new_div.appendChild(h2);
        new_div.appendChild(p);

        return new_div;
    }

    const div1 = create_div('Header 1', 'This is the first paragraph.');
    const div2 = create_div('Header 1', 'This is the first paragraph.');
    const div3 = create_div('Header 1', 'This is the first paragraph.');

    target_div.appendChild(div1);
    target_div.appendChild(div2);
    target_div.appendChild(div3);
}

// document.body.onload = addElement;

// function addElement() {
//     const article_div = document.createElement('div');
//     const h3 = document.createElement('h3');

//     h3.innerHTML = "Article Name";

//     const article_details = document.createTextNode('Some lines of article...');
//     article_div.appendChild(article_details);
 
//     document.getElementById('article_container').appendChild(h3);
//     document.getElementById('article_container').appendChild(article_details);
// }

function style_me() {
   const event_card =  document.querySelectorAll('div.upcoming_events');

    event_card.forEach(div => {
        div.classList.add('upcoming_events_styled');
    });
}

function add_text(event) {
    event.preventDefault()

    const input = document.getElementById('scientist_name');
    result = input.value;

    const result_text = document.createElement('input');
    result_text.value = result;

    const container = document.getElementById('scientist_names');

    const new_div = document.createElement('div');
    new_div.appendChild(result_text);

    container.appendChild(new_div);
}