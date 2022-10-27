'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const containerImg = document.querySelector('.images');
// // asynchronous
// //AJAX (Asenchronous Java Script And Xml)
// // XML old scholl to Ajax call
// const randerCountry = function (data, neighboor = '') {
//   const html = `
//   <article class="country ${neighboor}">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.altSpellings[0]}</h3>
//     <h4 class="country__region">${data.continents[0]}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${
//       Object.entries(data.languages)[0][1]
//     }</p>
//     <p class="country__row"><span>💰</span>${
//       Object.entries(data.currencies)[0][1].name
//     }</p>
//   </div>
// </article>
// `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 111;
// };
// const handelError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 111;
// };
// const get_fetch = function (url, msg) {
//   return fetch(`${url}`).then(resonse => {
//     console.log(resonse);
//     if (!resonse.ok) {
//       throw new Error(`${msg}  ${resonse.status}`);
//     }
//     return resonse.json();
//   });
// };
// // //1-make requset
// // const get_country = function (name) {
// //   const request = new XMLHttpRequest();
// //   //2-open requset pass type of request and api
// //   request.open('Get', `https://restcountries.com/v3.1/name/${name}`);
// //   request.send();
// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);
// //     randerCountry(data);
// //     const neighbor = data.borders[1];
// //     console.log(neighbor);
// //     const request2 = new XMLHttpRequest();
// //     //2-open requset pass type of request and api
// //     request2.open('Get', `https://restcountries.com/v3.1/alpha/${neighbor}`);
// //     request2.send();
// //     request2.addEventListener('load', function () {
// //       const [data2] = JSON.parse(this.responseText);
// //       randerCountry(data2, 'neighbour');
// //     });
// //   });
// // };
// // get_country('egypt');

// // get_country('usa');
// ////////////////////////////////////////////////////////////////////////////
// // use fetch with  promise
// // const get_country = function (country) {
// //   get_fetch(
// //     `https://restcountries.com/v3.1/name/${country}`,
// //     'country is not existing '
// //   )
// //     .then(data => {
// //       console.log(data);
// //       randerCountry(data[0]);
// //       let neighbour;
// //       if (data[0].hasOwnProperty('borders')) {
// //         neighbour = data[0].borders[0];
// //       } else {
// //         throw new Error('No neighbour found!');
// //       }

// //       return get_fetch(
// //         `https://restcountries.com/v3.1/alpha/${neighbour}`,
// //         'country is not existing '
// //       );
// //     })

// //     .then(data => randerCountry(data[0], 'neighbour'))
// //     .catch(err => {
// //       handelError(`${err}.try agin`);
// //     })
// //     .finally(() => (countriesContainer.style.opacity = 111));
// // };
// // btn.addEventListener('click', function () {
// //   get_country('vxfv');
// // });
// // get_country('usa');
// /*

// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time �
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating �
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)
// The Complete JavaScript Course 31
// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
// GOOD LUCK �

// */
// // const whereAmI = function (lat = 0, lng = 0) {
// //   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// //     .then(request => {
// //       if (request.ok === false) throw new Error(`try agin`);
// //       console.log(request);
// //       return request.json();
// //     })
// //     .then(data => {
// //       console.log(data);
// //       console.log(`You are in ${data.region} , ${data.country}`);
// //       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
// //     })
// //     .then(request => {
// //       if (request.ok === false) throw new Error(`try agin`);
// //       console.log(request);
// //       return request.json();
// //     })
// //     .then(data => randerCountry(data[0]))
// //     .catch(err => {
// //       console.log(`wrong occure ${err}`);
// //       countriesContainer.insertAdjacentText('beforeend', `wrong occure ${err}`);
// //     });
// // };
// // whereAmI(-33.933, 18.474);
// ////////////////////////////////////////
// //////////////////////////////////////////
// //////////////////////////////////////
// // bulid new promis
// // const firsrPromise = new Promise(function (resolve, reject) {
// //   console.log('loooooding');
// //   setTimeout(function () {
// //     if (Math.random() >= 0.5) {
// //       resolve('win');
// //     } else {
// //       reject(new Error('lose'));
// //     }
// //   }, 2000);
// // });
// // firsrPromise.then(a => console.log(a)).catch(b => console.log(b));

// // const wait = function (sec) {
// //   return new Promise(function (resolve) {
// //     setTimeout(resolve, sec * 1000);
// //   });
// // };
// // wait(2)
// //   .then(() => {
// //     console.log('1 pass');
// //     return wait(1);
// //   })
// //   .then(() => console.log('2 pass'));
// // const get_location = function () {
// //   return new Promise(function (resolve, regect) {
// //     // postion=>resolve(postion),
// //     // error=>regect(error)
// //     navigator.geolocation.getCurrentPosition(resolve, regect);
// //   });
// // };
// // const whereAmI = function () {
// //   get_location()
// //     .then(res => {
// //       console.log(res.coords);
// //       const { latitude: lat, longitude: lng } = res.coords;
// //       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// //     })
// //     .then(request => {
// //       if (request.ok === false) throw new Error(`try agin`);
// //       console.log(request);
// //       return request.json();
// //     })
// //     .then(data => {
// //       console.log(data);
// //       console.log(`You are in ${data.region} , ${data.country}`);
// //       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
// //     })
// //     .then(request => {
// //       if (request.ok === false) throw new Error(`try agin`);
// //       console.log(request);
// //       return request.json();
// //     })
// //     .then(data => randerCountry(data[0]))
// //     .catch(err => {
// //       console.log(`wrong occure ${err}`);
// //       countriesContainer.insertAdjacentText('beforeend', `wrong occure ${err}`);
// //       countriesContainer.style.opacity = 111;
// //     });
// // };
// // btn.addEventListener('click', whereAmI);
// /*

// Coding Challenge #2
// For this challenge you will actually have to watch the video! Then, build the image
// loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by
// yourself. Pretend you're working on your own �
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
// 2. When the image is done loading, append it to the DOM element with the
// 'images' class, and resolve the promise. The fulfilled value should be the
// image element itself. In case there is an error loading the image (listen for
// the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution
// PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed, hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element
// returned by the 'createImage' promise to hide the current image. You will
// need a global variable for that �)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong
// image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast
// GOOD LUCK �
//     var img = document.createElement('img');

// */

// // const creatImage = function (url) {
// //   return new Promise(function (resolve, reject) {
// //     var img = document.createElement('img');
// //     img.style.display = 'block';

// //     img.src = url;
// //     img.addEventListener('load', function () {
// //       containerImg.appendChild(img);
// //       resolve(img);
// //     });
// //     img.addEventListener('error', function () {
// //       //containerImg.appendChild(img);
// //       reject(new Error('img isnt reload'));
// //     });
// //   });
// // };
// // let currentimg;
// // creatImage(
// //   'https://image.shutterstock.com/shutterstock/photos/654844426/display_1500/stock-photo-nomad-on-camel-near-pyramids-in-egyptian-desert-654844426.jpg'
// // )
// //   .then(img => {
// //     currentimg = img;
// //     return wait(2);
// //   })
// //   .then(() => {
// //     currentimg.style.display = 'none';

// //     return creatImage(
// //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp48WkqJEx7Yn7xt578XQlhxC5GnvpJUCJHiHDwj7Q7w&s'
// //     );
// //   })
// //   .catch(err => console.log(`erro occure ${err} .try agin`));
// // document.createElement('img').src =
// //   'https://image.shutterstock.com/shutterstock/photos/654844426/display_1500/stock-photo-nomad-on-camel-near-pyramids-in-egyptian-desert-654844426.jpg';
// //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp48WkqJEx7Yn7xt578XQlhxC5GnvpJUCJHiHDwj7Q7w&s
// // /////////////////////////////////////////////
// // //async and await
// // //const get_location = function () {
// // //   return new Promise(function (resolve, regect) {
// // //     // postion=>resolve(postion),
// // //     // error=>regect(error)
// // //     navigator.geolocation.getCurrentPosition(resolve, regect);
// // //   });
// // // };
// // const get_location = function () {
// //   return new Promise(function (resolve, reject) {
// //     navigator.geolocation.getCurrentPosition(resolve, reject);
// //   });
// // };
// // const whereAmI = async function () {
// //   try {
// //     const location = await get_location();
// //     const { latitude: lat, longitude: lng } = await location.coords;
// //     const r = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// //     if (!r.ok) throw new Error(`can't fetch location `);
// //     const rJson = await r.json();
// //     console.log(rJson);
// //     const responde = await fetch(
// //       `https://restcountries.com/v3.1/name/${rJson.country}`
// //     );
// //     if (!r.ok) throw new Error(`can't fetch location `);

// //     const [data] = await responde.json();
// //     randerCountry(data);
// //     return `im in ${rJson.country}`;
// //   } catch (err) {
// //     console.error(`${err.message}`);
// //   }
// // };
// // (async function () {
// //   try {
// //     console.log('1-started');
// //     const country__data = await whereAmI();
// //     console.log(`${country__data}`);
// //   } catch (err) {
// //     console.error(`${err.message}`);
// //   }
// //   console.log('3-finished');
// // })();
// //chalnger 3
// ////////////////////////////////////
// /*

// Coding Challenge #3
// Your tasks:
// PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time
// using async/await (only the part where the promise is consumed, reuse the
// 'createImage' function from before)
// 2. Compare the two versions, think about the big differences, and see which one
// you like more
// 3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
// in the dev tools Network tab
// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths
// 'imgArr'
// 2. Use .map to loop over the array, to load all the images with the
// 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array �
// 5. Add the 'parallel' class to all the images (it has some CSS styles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']. To test, turn off the 'loadNPause' function
// GOOD LUCK �

// */
// const creatImage = function (url) {
//   return new Promise(function (resolve, reject) {
//     var img = document.createElement('img');
//     img.style.display = 'block';

//     img.src = url;
//     img.addEventListener('load', function () {
//       containerImg.appendChild(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       //containerImg.appendChild(img);
//       reject(new Error('img isnt reload'));
//     });
//   });
// };
// // let currentimg;
// // creatImage(
// //   'https://image.shutterstock.com/shutterstock/photos/654844426/display_1500/stock-photo-nomad-on-camel-near-pyramids-in-egyptian-desert-654844426.jpg'
// // )
// //   .then(img => {
// //     currentimg = img;
// //     return wait(2);
// //   })
// //   .then(() => {
// //     currentimg.style.display = 'none';

// //     return creatImage(
// //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp48WkqJEx7Yn7xt578XQlhxC5GnvpJUCJHiHDwj7Q7w&s'
// //     );
// //   })
// //   .catch(err => console.log(`erro occure ${err} .try agin`));

// const loadNPause = async function () {
//   try {
//     const image = await creatImage(
//       'https://image.shutterstock.com/shutterstock/photos/654844426/display_1500/stock-photo-nomad-on-camel-near-pyramids-in-egyptian-desert-654844426.jpg'
//     );
//   } catch (err) {
//     console.log(`${err}`);
//   }
// };
// loadNPause();
// asynchronous XML formate

const show_country = function (data, neighboor = '') {
  const html = `
   <article class="country ${neighboor}">
   <img class="country__img" src="${data.flags.png}" />
   <div class="country__data">
     <h3 class="country__name">${data.altSpellings[0]}</h3>
     <h4 class="country__region">${data.continents[0]}</h4>
     <p class="country__row"><span>👫</span>${(
       data.population / 1000000
     ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${
      Object.entries(data.languages)[0][1]
    }</p>
    <p class="country__row"><span>💰</span>${
      Object.entries(data.currencies)[0][1].name
    }</p>
  </div>
</article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 111;
};
// const load_country = function (name) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${name}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);
//     show_country(data);
//     const neighbour = data.borders[1];
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data] = JSON.parse(request2.responseText);
//       console.log(data);
//       show_country(data, 'neighbour');
//     });
//   });
// };
// load_country('egypt');
// load_country('usa');
const get_json = function (url, message) {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${message}`);
    return res.json();
  });
};
const load_country = function (name) {
  get_json(
    `https://restcountries.com/v3.1/name/${name}`,
    `can't find this country .try agin`
  )
    .then(data => {
      show_country(data[0]);
      let neighbour;
      if (data[0].hasOwnProperty('borders')) {
        neighbour = data[0].borders[1];
      } else {
        throw new Error('country has not neighbour ');
      }
      return get_json(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'cant find this country .try agin'
      );
    })
    .then(data => {
      show_country(data[0], 'neighbour');
    })
    .catch(err => console.error(`${err.message}`));
};
//load_country('egypt');
// load_country('usa');
const getYourLocation = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// const whereAmI = function () {
//   getYourLocation()
//     .then(res => {
//       const { latitude: lat, longitude: log } = res.coords;
//       return get_json(`https://geocode.xyz/${lat},${log}?geoit=json`);
//     })
//     .then(data => {
//       const country = data.country;
//       return get_json(
//         `https://restcountries.com/v3.1/name/${country}`,
//         `can't find this country .try agin`
//       ).then(data => show_country(data[0]));
//     })
//     .catch(err => console.error(`${err.message}`));
// };
//whereAmI();
const whereAmI = async function () {
  const location = await getYourLocation();
  const { latitude: lat, longitude: log } = await location.coords;
  const request = await get_json(
    `https://geocode.xyz/${lat},${log}?geoit=json`,
    `can't find this country .try agin`
  );
  const country = await request.country;
  const [data] = await get_json(
    `https://restcountries.com/v3.1/name/${country}`,
    `can't find this country .try agin`
  );
  show_country(data);
};
whereAmI();
try {
  console.log('hello');
} catch (e) {
  console.log('caught');
}
