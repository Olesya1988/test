function jp(i) {
    const e = document.querySelector(".header-small-menu-content"),
        t = document.querySelector(".header-small-menu-arrow");
    console.log(i.target);
    i.target === e ||
        e.contains(i.target) ||
        (e.classList.remove("open"),
            t.classList.remove("open"),
            document.removeEventListener("click", jp));
}
function Hp(i) {
    const e = document.querySelector(".header-services-content"),
        t = document.querySelector(".header-services-arrow");
    console.log(i.target);
    i.target === e ||
        e.contains(i.target) ||
        (e.classList.remove("open"),
            t.classList.remove("open"),
            document.removeEventListener("click", Hp));
}



try {
    const n = document.querySelector(".header-services-selector"),
        a = document.querySelector(".header-services-content"),
        o = document.querySelector(".header-services-arrow"),
        u = document.querySelectorAll(".header-menu-content--overflow");
    n &&
        a &&
        n.addEventListener("mouseover", (c) => {
            u.forEach((v) => {
                v.classList.add("header-menu-content--overflow"),
                    setTimeout(() => {
                        v.classList.add("header-menu-content--overflow");
                    }, 500);
            });
            let h;
            a.addEventListener("mouseleave", (v) => {
                h = setTimeout(() => {
                    const T = document.querySelector(".header-services-content"),
                        x = document.querySelector(".header-services-arrow");
                    T.classList.remove("open"), x.classList.remove("open");
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
                o.classList.add("open")
            //   a.classList.contains("open") &&
            //     setTimeout(() => {
            //       document.addEventListener("click", Hp);
            //     }, 1);
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
                u.classList.add("open")
            //   o.classList.contains("open") &&
            //     setTimeout(() => {
            //       document.addEventListener("click", jp);
            //     }, 1);
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
    document.querySelector('.header-services-content').classList.toggle('open');
    document.querySelector('.header-small-menu-content').classList.remove('open');    
})

document.querySelector('.header-small-menu-title').addEventListener('click', () => {
    document.querySelector('.header-small-menu-content').classList.toggle('open');
    document.querySelector('.header-services-content').classList.remove('open');    
})



