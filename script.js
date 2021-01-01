function fun1() {
  var rng = document.getElementById('customRange1'); //rng - это Input
  var p = document.getElementById('one'); // p - абзац
  p.innerHTML = rng.value;
}
let form = document.querySelector('#form');
let filePrev = document.getElementById('file_prev');
let formImage = document.getElementById('userfile');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // formImage.addEventListener('change', () => {
  //   console.log(formImage.files[0]);

  //   uploadFiles(formImage.files[0]);
  // });

  // function uploadFiles(file) {
  //   console.log(file.name);

  //   if (!['image/jpeg', 'image/png'].includes(file.type)) {
  //     alert('Разрешены только изображения.');
  //     return;
  //   }

  //   // проверим размер файла (<2 Мб)
  //   if (file.size > 2 * 1024 * 1024) {
  //     alert('Файл должен быть менее 2 МБ.');
  //     return;
  //   }

  //   let reader = new FileReader();
  //   reader.onload = function (e) {
  //     filePrev.innerHTML = `<img src='${e.target.result}' alt='foto'>`;
  //   };
  //   reader.onerror = function (e) {
  //     alert('error');
  //   };
  //   reader.readAsDataURL(file);
  // }

  let formData = {
    name: document.querySelector("input[name='name']").value,
    tel: document.querySelector("input[name='tel']").value,
    city: document.querySelector("input[name='city']").value,
    inst: document.querySelector("input[name='inst']").value,
    age: document.querySelector("input[name='range']").value,
    ques: document.querySelector("input[name='ques']").value,
    image: document.querySelector("input[name='image']"),
  };

  let request = new XMLHttpRequest();

  request.addEventListener('load', function () {
    console.log(request.response);
    alert('done');
  });
  request.open('POST', '/mail.php', true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(
    'name=' +
      encodeURIComponent(formData.name) +
      '&tel=' +
      encodeURIComponent(formData.tel) +
      '&city=' +
      encodeURIComponent(formData.city) +
      '&inst=' +
      encodeURIComponent(formData.inst) +
      '&age=' +
      encodeURIComponent(formData.age) +
      '&ques=' +
      encodeURIComponent(formData.ques) +
      '&image=' +
      encodeURIComponent(formData.image),
  );
});

// const form = document.querySelector('.form');
// let name = document.querySelector('#name');

// const message = {
//   loading: 'Отправка...',
//   success: 'Спасибо. Форма отправлена',
//   failed: 'Что-то пошло не так...',
// };
// console.log(name.value);

// document.addEventListener('DOMContentLoaded', () => {
//   const file_attach = document.getElementById('file_attach'); // файл
//   const forms = document.querySelectorAll('form'); // формы

//   const message = {
//     loading: 'Отправка...',
//     success: 'Спасибо. Форма отправлена',
//     failed: 'Что-то пошло не так...',
//   };

//   // обработчик события 'change' (происходит после выбора файла)
//   file_attach.addEventListener('change', () => {
//     uploadFile(file_attach.files[0]);
//   });

//   // Загрузка файла
//   const uploadFile = (file) => {
//     console.log(file.name);

//     // провераяем тип файла
//     if (!['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'].includes(file.type)) {
//       alert('Разрешены только изображения.');
//       return;
//     }

//     // проверим размер файла (<2 Мб)
//     if (file.size > 2 * 1024 * 1024) {
//       alert('Файл должен быть менее 2 МБ.');
//       return;
//     }
//   };

//   // отправляем `POST` запрос
//   const postData = async (url, fData) => {
//     // имеет асинхронные операции
//     document.querySelector('.status').innerHTML = message.loading; // в процессе

//     // ждём ответ, только тогда наш код пойдёт дальше
//     let fetchResponse = await fetch(url, {
//       method: 'POST',
//       body: fData,
//     });

//     // ждём окончания операции
//     return await fetchResponse.text();
//   };

//   if (forms) {
//     forms.forEach((el) => {
//       el.addEventListener('submit', function (e) {
//         e.preventDefault();

//         // Блок со статусом отправки
//         let statusMessage = document.createElement('div');
//         statusMessage.classList.add('status');
//         el.appendChild(statusMessage);

//         // создание объекта FormData
//         const fData = new FormData(el);
//         fData.append('file_attach', file_attach.files[0]); // добавляем файл в объект FormData()

//         // Отправка на сервер
//         postData('mail.php', fData)
//           .then((fetchResponse) => {
//             statusMessage.innerHTML = message.success;
//           })
//           .catch(() => (statusMessage.innerHTML = message.failed))
//           .finally(() => {
//             this.reset(); // очищаем поля формы
//             setTimeout(() => {
//               statusMessage.remove(); // удаляем статус
//             }, 5000);
//           });
//       });
//     });
//   }
// });

// $(document).ready(function () {
//   $('#form').submit(function () {
//     if (
//       document.form.name.value == '' ||
//       document.form.phone.value == '' ||
//       document.form.email.value == ''
//     ) {
//       return false;
//     }
//     $.ajax({
//       type: 'POST',
//       url: 'mail.php', //Change
//       data: $(this).serialize(),
//     }).done(function () {
//       $('.js-overlay-thank-you').fadeIn();
//       $(this).find('input').val('');
//       $('#form').trigger('reset');
//     });
//     return false;
//   });
// });

// $('.js-close-thank-you').click(function () {
//   $('.js-overlay-thank-you').fadeOut();
// });

// $(document).mouseup(function (e) {
//   let popup = $('.popup');
//   if (e.target != popup[0] && popup.has(e.target).length === 0) {
//     $('.js-overlay-thank-you').fadeOut();
//   }
// });
