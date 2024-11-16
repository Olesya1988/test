function jp(i) {
    const e = document.querySelector(".header-small-menu-content"),
      t = document.querySelector(".header-small-menu-arrow");
    i.target === e ||
      e.contains(i.target) ||
      (e.classList.remove("open"),
      t.classList.remove("open"),
      document.removeEventListener("click", jp));
  }
  
  function Hp(i) {
    const e = document.querySelector(".header-services-content"),
      t = document.querySelector(".header-services-arrow");
    i.target === e ||
      e.contains(i.target) ||
      (e.classList.remove("open"),
      t.classList.remove("open"),
      document.removeEventListener("click", Hp));
  }


try {
    const n = document.querySelector(".header-services-selector"), // блок "Услуги"
      a = document.querySelector(".header-services-content"), // Выпадающий список услуг
      o = document.querySelector(".header-services-arrow"), // стрелка блока "Услуги"
      u = document.querySelectorAll(".header-menu-content--overflow"); // подменю списка услуг
    n &&
      a &&
      n.addEventListener("mouseover", (c) => { // курсор мыши пользователя наводится на элемент
        u.forEach((v) => {
          v.classList.add("header-menu-content--overflow"), // в подменю списка услуг добавляется класс
            setTimeout(() => {
              v.classList.add("header-menu-content--overflow"); // в подменю списка услуг ещё раз добавляется класс
            }, 500);
        });
        let h;
        a.addEventListener("mouseleave", (v) => { // курсор манипулятора (обычно мыши) перемещается за границы элемента
          h = setTimeout(() => {
            const T = document.querySelector(".header-services-content"), // Выпадающий список услуг
              x = document.querySelector(".header-services-arrow"); // стрелка блока "Услуги"
            T.classList.remove("open"), x.classList.remove("open"); // удаляем класс видимости у выпадающего списка и стрелки
          }, 300);
        }),
          a.addEventListener("mouseenter", (v) => {
            clearTimeout(h);
          });
        const g = document.querySelector(".header-small-menu-content"),
          _ = document.querySelector(".header-small-menu-arrow");
        g.classList.remove("open"),
          _.classList.remove("open"),
          a.classList.add("open"),
          o.classList.add("open"),
          a.classList.contains("open") &&
            setTimeout(() => {
              document.addEventListener("click", Hp);
            }, 1);
      });
  } catch (n) {
    console.error(n);
  }

  try {
    document.querySelectorAll(".header-small-menu-selector").forEach((n) => {
      n.addEventListener("mouseover", (a) => {
        const o = n.querySelector(".header-small-menu-content"),
          u = n.querySelector(".header-small-menu-arrow"),
          c = document.querySelector(".header-services-content"),
          h = document.querySelector(".header-services-arrow");
        c.classList.remove("open"),
          h.classList.remove("open"),
          o.classList.add("open"),
          u.classList.add("open"),
          o.classList.contains("open") &&
            setTimeout(() => {
              document.addEventListener("click", jp);
            }, 1);
        let g;
        o.addEventListener("mouseleave", (_) => {
          g = setTimeout(() => {
            const v = document.querySelector(".header-small-menu-content"),
              T = document.querySelector(".header-small-menu-arrow");
            v.classList.remove("open"), T.classList.remove("open");
          }, 300);
        }),
          o.addEventListener("mouseenter", (_) => {
            clearTimeout(g);
          });
      });
    });
  } catch (n) {
    console.error(n);
  }

document.querySelector('.header-services-selector').addEventListener('click', () => {  
    console.log(1);
    document.querySelector('.header-services-content').classList.toggle('open2'); 
    document.querySelector('.header-small-menu-content').classList.remove('open2');    
})

document.querySelector('.header-small-menu-title').addEventListener('click', () => {
    console.log(2);
    document.querySelector('.header-small-menu-content').classList.toggle('open2');
    document.querySelector('.header-services-content').classList.remove('open2');    
})



