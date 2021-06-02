const {
  addBooks, getAllBooks, deleteBooksById, getBooksById, editBooksById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooks,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooksById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBooksById,
  },
];

module.exports = routes;
