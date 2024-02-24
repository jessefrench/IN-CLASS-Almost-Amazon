import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyAuthors = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#store', domString);
};

const showAuthors = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.first_name} ${item.last_name} ${item.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
        <hr>
        <i id="view-author-btn--${item.firebaseKey}" class="btn btn-success"><span id="view-author-btn--${item.firebaseKey}" class="fas fa-eye"></span></i>
        <i id="update-author--${item.firebaseKey}" class="btn btn-info"><span id="update-author--${item.firebaseKey}" class="fas fa-edit"></span></i>
        <i id="delete-author-btn--${item.firebaseKey}" class="btn btn-danger"><span id="delete-author-btn--${item.firebaseKey}" class="fas fa-trash-alt"></span></i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showAuthors, emptyAuthors };
