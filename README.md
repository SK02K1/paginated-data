# Paginated Data Example

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
