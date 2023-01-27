
<div align="center">
<h1>Paginated Data Demo</h1>
<img src="https://pbs.twimg.com/media/EqsMLpRVQAAI4EJ.jpg" />
</div>

## Backend: https://codesandbox.io/s/paginated-data-backend-3toz8l
## Client: https://codesandbox.io/s/paginated-data-client-t9dbio


## API

### 1. Get all albums

- Request URL: `"https://3toz8l.sse.codesandbox.io/albums"`
- HTTP Method: **GET**
- Response Body:

  ```js
  {
      "info": {
          "count": Number,
          "pages": Number
      },
      albums: Array
  }
  ```

- **Functionality**: This API call gets all albums from the database.

### 2. Get paginated albums

- Request URL: `"https://3toz8l.sse.codesandbox.io/albums/?page=<page_number>"`
- HTTP Method: **GET**
- Response Body:

  ```js
  {
      "info": {
          "count": Number,
          "pages": Number
          "prev": String | Null,
          "next": String | Null
      },
      albums: Array
  }
  ```

- **Functionality**: This API call gets 5 albums per page based on the specified `<page_number>`.
