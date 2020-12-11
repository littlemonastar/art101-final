console.log('Hello World!');

const form = document.querySelector('form'); // grabbing an element on the page
const errorElement = document.querySelector('.error-message');
const loadingElement = document.querySelector('.loading');
const ssssElement = document.querySelector('.ssss');
const loadMoreElement = document.querySelector('#loadMore');
const API_URL = (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') ? 'http://localhost:5000/v2/ssss' : 'https://meower-api.now.sh/v2/ssss';

let skip = 0;
let limit = 5;
let loading = false;
let finished = false;

errorElement.style.display = 'none';

document.addEventListener('scroll', () => {
  console.log("scroll");
  console.log(loading);
  console.log(finished);
  const rect = loadMoreElement.getBoundingClientRect();
  if (rect.top < window.innerHeight && !loading && !finished) {
    console.log("loadMore");
    loadMore();
  }
  console.log(rect.top);
  console.log(window.innerHeight);
});

listAllssss();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');

  if (name.trim() && content.trim()) {
    errorElement.style.display = 'none';
    form.style.display = 'none';
    loadingElement.style.display = '';

    const sss = {
      name,
      content
    };

    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(sss),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType.includes('json')) {
          return response.json().then(error => Promise.reject(error.message));
        } else {
          return response.text().then(message => Promise.reject(message));
        }
      }
    }).then(() => {
      form.reset();
      setTimeout(() => {
        form.style.display = '';
      }, 1000);
      listAllssss();
    }).catch(errorMessage => {
      form.style.display = '';
      errorElement.textContent = errorMessage;
      errorElement.style.display = '';
      loadingElement.style.display = 'none';
    });
  } else {
    errorElement.textContent = 'Name and content are required!';
    errorElement.style.display = '';
  }
});

function loadMore() {
  skip += limit;
  listAllssss(false);

  
}

function listAllssss(reset = true) {
  loading = true;
  if (reset) {
    ssssElement.innerHTML = '';
    skip = 0;
    finished = false;
  }
  fetch(`${API_URL}?skip=${skip}&limit=${limit}`)
    .then(response => response.json())
    .then(result => {
      result.ssss.forEach(sss => {
        const div = document.createElement('div');

        const header = document.createElement('h3');
        header.textContent = sss.name;

        const contents = document.createElement('p');
        contents.textContent = sss.content;

        const date = document.createElement('small');
        date.textContent = new Date(sss.created);

        div.appendChild(header);
        div.appendChild(contents);
        div.appendChild(date);

        ssssElement.appendChild(div);
      });
      loadingElement.style.display = 'none';
      if (!result.meta.has_more) {
        loadMoreElement.style.visibility = 'hidden';
        finished = true;
      } else {
        loadMoreElement.style.visibility = 'visible';
      }
      loading = false;
    });
}
