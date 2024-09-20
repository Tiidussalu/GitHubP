const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

const button = document.getElementById('get-image-button');
const imageContainer = document.getElementById('image-container');

button.addEventListener('click', makeApiRequest);

function makeApiRequest() {
  xhr.open('GET', 'https://porn-image1.p.rapidapi.com/?type=pussy');
  xhr.setRequestHeader('x-rapidapi-key', '24cf74204amsh7c1383de566e53fp16df90jsn66293b2ebb9e');
  xhr.setRequestHeader('x-rapidapi-host', 'porn-image1.p.rapidapi.com');

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      const responseData = JSON.parse(this.responseText);
      console.log(responseData);
      const imageUrl = responseData.url; // Assuming the API returns a URL in the response
      const img = document.createElement('img');
      img.src = imageUrl;
      imageContainer.innerHTML = ''; // Clear the container before adding the new image
      imageContainer.appendChild(img);
    }
  });

  xhr.send(null); // No data needs to be sent in this case
}