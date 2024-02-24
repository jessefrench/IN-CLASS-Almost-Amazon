import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();
  let domString = `
    <div class="text-white ms-5 details">
      <h5>${obj.author.first_name} ${obj.author.last_name} ${obj.author.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
      <p>Author email: <a href="mailto:${obj.author.email}">${obj.author.email}</a></p>
      <i id="update-author--${obj.author.firebaseKey}" class="btn btn-info"><span id="update-author--${obj.author.firebaseKey}" class="fas fa-edit"></span></i>
      <i id="delete-author-btn--${obj.author.firebaseKey}" class="btn btn-danger"><span id="delete-author-btn--${obj.author.firebaseKey}" class="fas fa-trash-alt"></span></i>
      <hr>
    </div>`;

  obj.books.forEach((book) => {
    domString += `
      <div class="card" style="width: 300px">
          <img class="card-img-top" src=${book.image} alt=${book.title} style="height: 400px;">
          <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${book.title}</h5>
              <p class="card-text bold">${book.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${book.price}` : `$${book.price}`}</p>
              <hr>
              <i id="view-book-btn--${book.firebaseKey}" class="btn btn-success"><span id="view-book-btn--${book.firebaseKey}" class="fas fa-eye"></span></i>
              <i id="edit-book-btn--${book.firebaseKey}" class="btn btn-info"><span id="edit-book-btn--${book.firebaseKey}" class="fas fa-edit"></span></i>
              <i id="delete-book-btn--${book.firebaseKey}" class="btn btn-danger"><span id="delete-book-btn--${book.firebaseKey}" class="fas fa-trash-alt"></span></i>
          </div>
        </div>
      </div>
  </div>`;
  });
  renderToDOM('#view', domString);
};

export default viewAuthor;
