
function soundAdd(){
  let audio = new Audio();
  audio.src = './audio/add.wav';
  audio.autoplay = true;
}
function soundDel(){
  let audio = new Audio();
  audio.src = './audio/del.wav';
  audio.autoplay = true;
}
function soundUpdate(){
  let audio = new Audio();
  audio.src = './audio/update.wav';
  audio.autoplay = true;
}
function soundNoResult(){
  let audio = new Audio();
  audio.src = './audio/noResult.wav';
  audio.autoplay = true;
}
function soundFirstPage(){
  let audio = new Audio();
  audio.src = './audio/firstPage.wav';
  audio.autoplay = true;
}
function soundLastPage(){
  let audio = new Audio();
  audio.src = './audio/lastPage.wav';
  audio.autoplay = true;
}
function soundInput(){
  let audio = new Audio();
  audio.src = './audio/inputName.wav';
  audio.autoplay = true;
}

$(window).ready(function(){//после загрузки window 
    render() //вызываем функцию render()
  })
  
let inpName = $(".fName");// 1-input Имя
let inpSurname = $(".lName");// 2 input Фамилия
let inpNum = $(".telNum");//3-input Номер
let btnAdd = $(".add");//Кнопка добавления


//-------------------------------Добавление-----------------------------
$('.btnAdd').on('click', function(){
  $('.modalWin').toggleClass('dNone');
  $('.inputForm').css('display','block');
});

let page = 1;
let lastPage = false;
btnAdd.on("click", function(e) {
  e.preventDefault();
  if(inpName.val()!=='' && inpNum.val()!==''){
    let obj = {//Этот объект отправляется в json-server и сохраняетсяв файле db.json
      name: inpName.val().charAt(0).toUpperCase() + inpName.val().slice(1), //С помощью .val() берем значение с инпутов
      surname: inpSurname.val().charAt(0).toUpperCase() + inpSurname.val().slice(1),
      number: inpNum.val()
    }
    
    $.ajax({
      method: "post",//отправляем
      url: `http://localhost:8000/contact`,//на указанный сервер
      data: obj,
      success: function(data) {//если отправка успешно 
        render()//вызываем функцию render()
        soundAdd()
      },
      error: function(err) {
        console.log(err);//иначе выводим ошибку
      }
    })
    $('input').val('');//очищаем все инпуты, чтобы при вводе след значений не делать это в ручную
  }else{soundInput()}
});



function render (){//------render--------
  $('.list').html('')//все что находится внутри <ul> очищаем 
  $.ajax({
    method:"get",//Получаем 
    url:`http://localhost:8000/contact?_page=${page}&_limit=7`,//из указанного сервера
    success: function(data) {//если успешно получили
      data.sort();
        data.map((item) =>{ //переберам полученные данные и добавлем в <ul> все найденные имена
          $('.list').append(`
            <li class="liListC"  data-id="${item.id}">${item.name}</li> 
          `);
        });
    },
    error: function(err){
      console.log(err);
    }
    });
};

//------------------------------------Пагинаяция-----------
$('.btnNext').on('click', function(){
  page++
  $.ajax({
    method:"get",//Получаем 
    url:`http://localhost:8000/contact?_page=${page}&_limit=7`,//из указанного сервера
    success: function(data) {//если успешно получили
      if(data.length==0) {
        page--
        soundLastPage()
      }else{
        $('.list').html('');
        data.map((item) =>{ //переберам полученные данные и добавлем в <ul> все найденные имена
          $('.list').append(`
            <li class="liListC"  data-id="${item.id}">${item.name}</li> 
          `);
        });
      }
    }
    });
});
$('.btnPrev').on('click', function(){
  if(page>1){
    page--
    $.ajax({
      method:"get",//Получаем 
      url:`http://localhost:8000/contact?_page=${page}&_limit=7`,//из указанного сервера
      success: function(data) {//если успешно получили

          $('.list').html('');
          data.map((item) =>{ //переберам полученные данные и добавлем в <ul> все найденные имена
            $('.list').append(`
              <li class="liListC"  data-id="${item.id}"><span class="liListC">${item.name}</span></li> 
            `);
          });
        
      }
      });
  }else soundFirstPage();
});


//------------------------------------Просмотр в модальном окне--------------------
$('.list').on('click', 'li', (e)=>{
  $('.modalWin').toggleClass('dNone');
  $('.modal').css('display','block');

  $('.modal').text('');
  let target = $(e.target);
  let id = target.attr('data-id');
  $.ajax({
    method: 'get', 
    url: `http://localhost:8000/contact/${id}`,
    success: function(data){
      $('.modal').append(`
        <button class="btnX" data-id="${id}">x</button>
        <li class="liMod">Имя: <span>${data.name}</span></li>
        <li class="liMod">Фамилия: <span>${data.surname}</span></li>
        <li class="liMod">Номер: <span>${data.number}</span></li>
        <input class="dNone btnSave" type="submit" value="save">
        <div class="modalDiv"><button class="btnUpdate btn">Update</button><button class="btnDelete btn">Delete</button></div>
      `)
    }
  })
})
$('.modalWin').on('click',function(e){
  if(e.target !== e.currentTarget)return;
  $(this).toggleClass('dNone');
  $('.modal').css('display','none');
  $('.inputForm').css('display','none');
})
$('.modal').on('click','.btnX',function(){
  $('.modalWin').toggleClass('dNone');
  $('.modal').css('display','none');
  $('.inputForm').css('display','none');
});


//-----------------------------Редактирование-----------------------------
let arr=[];
$('.modal').on('click', '.btnUpdate', (e)=>{//----Update----
  e.preventDefault();

  let id = $('.btnX').attr('data-id');
  $('.modal').text('');
  $.ajax({
    method: 'get', 
    url: `http://localhost:8000/contact/${id}`,
    success: function(data){
      $('.modal').append(`
        <button class="btnX" data-id="${id}">x</button>
        <li class="liMod">Имя: <input class="modInpName" value="${data.name}"></li>
        <li class="liMod">Фамилия: <input class="modInpSurname" value="${data.surname}"></li>
        <li class="liMod">Номер: <input class="modInpNumber" value="${data.number}"></li>
        <button class="btnSave btn">Save</button>
      `)
    }
  });
});


$('.modal').on('click', '.btnSave', (e)=>{//-----Save----
  e.preventDefault();
  let id = $('.btnX').attr('data-id');
  console.log(id)
  $.ajax({
    method: 'patch',
    url: `http://localhost:8000/contact/${id}`,
    data:{
      name: $('.modInpName').val(),
      surname: $('.modInpSurname').val(),
      number: $('.modInpNumber').val()
    },
    success:function(){
      render()
      soundUpdate()
    },
    done: function(data){
      console.log(data)
    }
  })
  $('.modalWin').toggleClass('dNone');
});


//----------------------------------------------Удаление------------------
$('.modal').on('click', '.btnDelete', (e)=>{
  e.preventDefault();
  let id = $('.btnX').attr('data-id');
  let q = confirm('Вы уверены?');

  if(q==true){
    $.ajax({
      method: 'delete',
      url: `http://localhost:8000/contact/${id}`,
      success: function(data){
      console.log('Вы удалили данные!');
      $('.modalWin').toggleClass('dNone');
      render();
      soundDel();
     },
     error: function(error){
      console.log('Произошла ошибка!!!');
    }
  });
  }else{return};

})

//----------Поиск------------------------------Поиск------------------
$('.btnSearch').on('click', function(){
  $('.who').toggleClass('dNone');
});

$('.who').on('change',function(){
  let search = false;
  $.ajax({
    method:'get',
    url:"http://localhost:8000/contact",
    success:function(data){
      $('.modal').html('');
      data.map(item=>{
        if(item.name === $('.who').val()){
          search = true;
          $('.modal').append(`
          <button class="btnX">x</button>
          <li class="liMod">${item.name}</li>
          <li class="liMod">${item.surname}</li>
          <li class="liMod">${item.number}</li>
          `);
      }
      });
      if(search===true){
        $('.modalWin').toggleClass('dNone');
        $('.modal').css('display','block');
        search=false;
      }else soundNoResult();
    }
  });
}) 

//-------------------Сортировка-------------------------------------

fetch('http://localhost:8000/contact?_sort=name&_order=')
  .then(result=>result.json())
  .then(name=>console.log(name))









