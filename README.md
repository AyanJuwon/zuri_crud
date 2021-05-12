# zuri_crud
Api link : https://secret-escarpment-70929.herokuapp.com

*Show Data**
----
  Returns json data about a single user.

* **URL**

      https://secret-escarpment-70929.herokuapp.com/

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`



* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ firstname : "Michael ",lastname: "Bloom",email:"Michealbloom@gmail.com",country :"England" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND 
    **Content:** `{ error : "Data not found" }`

  O
* **Sample Call:**

  ```javascript
    $.ajax({
      url: "https://secret-escarpment-70929.herokuapp.com"
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
