var current_page = window.location.pathname.split("/").pop();

if (current_page == "index.html") {
    document.getElementById("iss").addEventListener("mouseover", () => {
        document.getElementById("main_text").style.opacity = 0;
        document.getElementById("iss_text").style.opacity = 0.5;
    });

    document.getElementById("iss").addEventListener("mouseout", () => {
        document.getElementById("main_text").style.opacity = 0.5;
        document.getElementById("iss_text").style.opacity = 0;
    });

    /*document.addEventListener("DOMContentLoaded", () => {
        document.getElementsByTagName("html")[0].style.transform = "scale(1)";
    });*/

    document.getElementById("mro").addEventListener("mouseover", () => {
        document.getElementById("main_text").style.opacity = 0;
        document.getElementById("mro_text").style.opacity = 0.5;
    });

    document.getElementById("mro").addEventListener("mouseout", () => {
        document.getElementById("main_text").style.opacity = 0.5;
        document.getElementById("mro_text").style.opacity = 0;
    });

    document.getElementById("juno").addEventListener("mouseover", () => {
        document.getElementById("main_text").style.opacity = 0;
        document.getElementById("juno_text").style.opacity = 0.5;
    });

    document.getElementById("juno").addEventListener("mouseout", () => {
        document.getElementById("main_text").style.opacity = 0.5;
        document.getElementById("juno_text").style.opacity = 0;
    });

    document.getElementById("lro").addEventListener("mouseover", () => {
        document.getElementById("main_text").style.opacity = 0;
        document.getElementById("lro_text").style.opacity = 0.5;
    });

    document.getElementById("lro").addEventListener("mouseout", () => {
        document.getElementById("main_text").style.opacity = 0.5;
        document.getElementById("lro_text").style.opacity = 0;
    });

    document.getElementById("cassini").addEventListener("mouseover", () => {
        document.getElementById("main_text").style.opacity = 0;
        document.getElementById("cassini_text").style.opacity = 0.5;
    });

    document.getElementById("cassini").addEventListener("mouseout", () => {
        document.getElementById("main_text").style.opacity = 0.5;
        document.getElementById("cassini_text").style.opacity = 0;
    });

    document.getElementById("voyager").addEventListener("mouseover", () => {
        document.getElementById("main_text").style.opacity = 0;
        document.getElementById("voyager_text").style.opacity = 0.5;
    });

    document.getElementById("voyager").addEventListener("mouseout", () => {
        document.getElementById("main_text").style.opacity = 0.5;
        document.getElementById("voyager_text").style.opacity = 0;
    });

    document.getElementById("newhorizons").addEventListener("mouseover", () => {
        document.getElementById("main_text").style.opacity = 0;
        document.getElementById("newhorizons_text").style.opacity = 0.5;
    });

    document.getElementById("newhorizons").addEventListener("mouseout", () => {
        document.getElementById("main_text").style.opacity = 0.5;
        document.getElementById("newhorizons_text").style.opacity = 0;
    });

    /*document.getElementById("earth").addEventListener("mouseover", () => {
        document.getElementById("test").style.opacity = 0.5;
    });

    document.getElementById("earth").addEventListener("mouseout", () => {
        document.getElementById("test").style.opacity = 0;
    });*/
}

var imgId = 0;
function changeImage(buttonId) {
    if (buttonId == 0) {
        if (imgId == 0) imgId = 10;
        else imgId -= 1;
    }
    else {
        if (imgId == 10) imgId = 0;
        else imgId += 1;
    }

    var imgStore = [
        "url('https://sun9-43.userapi.com/impg/G7fw0FJJMd5_qzM0D0HelioQ-9KalHTon_ktLA/xMyxQ_dDIQs.jpg?size=2560x1440&quality=95&sign=2a567dc9ca9a7de790941d8ed1814ba8&type=album')",
        "url('https://sun9-80.userapi.com/impg/0-ZcyFaigQtr3xST01CByZ6vsui9WQY016eHZg/J3WfLoiPmUE.jpg?size=985x739&quality=96&sign=038354e44fa3bbb0008760601baa7f04&type=album')",
        "url('https://sun9-76.userapi.com/impg/yV0vDXTJTEVQjXm8asK8ZmZSqu3F-21iSxX2Bw/tIGxf_twE8o.jpg?size=985x654&quality=96&sign=e71c06fc5433d2e393cee8b19019690b&type=album')",
        "url('https://sun9-75.userapi.com/impg/vnaIW055kF6i5C6c_2jv3kEEMrBeRvtuczTRYA/2c4OPF1zAvg.jpg?size=1536x1430&quality=95&sign=3fc3a87ad2d12dd2c5bb758962239254&type=album')",
        "url('https://sun9-50.userapi.com/impg/Xit12PIbLmyj9fKxMsA274Di_NRMx_dvXPOymA/RMzSw8_FFXk.jpg?size=2504x2160&quality=95&sign=6c77f6587cdf1b1c66ae8a94ee766c2d&type=album')",
        "url('https://sun9-77.userapi.com/impg/wkMSf71l8kAJON-4cQpMniJr78wND3K5L1ZTUw/TkeRiCF6L4Q.jpg?size=985x720&quality=96&sign=7cede84135ff9dac69f1aa3789bebb7d&type=album')",
        "url('https://sun9-9.userapi.com/impg/TQXE7HpiGHu3IvlUJtknZoQ76vNwKMm4TIl8NQ/200WjdCTJxw.jpg?size=2560x1920&quality=96&sign=2765f2a1ebd554067acebf234f723bce&type=album')",
        "url('https://sun9-23.userapi.com/impg/MJWJ5INfKRS4S77sNrBuJrzd7fqhp-KfI66Yvw/4j-vUXlVxGQ.jpg?size=2085x1581&quality=96&sign=b3d0b544af9efb407d7acf28e7df19c7&type=album')",
        "url('https://sun9-54.userapi.com/impg/B7WrSDty6pPZshIoLSSXhG0CLsn0GVXx_Qcp7g/CG1IQWpqNvw.jpg?size=2560x1600&quality=95&sign=aabdfadcfc5feef3f6028d54c3808e29&type=album')",
        "url('https://sun9-79.userapi.com/impg/0X4UaE7_DJuuum88qR0VKAqkNbhFGhiGNyifNg/uQxmvcO0iiE.jpg?size=2560x1440&quality=95&sign=95b254686e96c387f0835075af6422ca&type=album')",
        "url('https://sun9-57.userapi.com/impg/KKmErcHj7ZTKGxaqP3zya8RtqBLtU6Ft5g76lQ/_iHwGhle1Q8.jpg?size=2560x1600&quality=96&sign=8bcc8157f11bd8cf9fc43880a2c51a1a&type=album')"
    ];

    var imgLabel = [
        "Ударный кратер с песчаными дюнами на дне",
        "Песчаные дюны на дне кратера Проктор",
        "Пылевой вихрь",
        "Заснеженный кратер недалеко от северного полюса",
        "Схoд лaвины нa сeвeрнoм пoлюсe",
        "Спутник Фобос",
        "Темные дюны в кратере Проктор",
        "Марсоход Perseverance",
        "Иней на песчаных дюнах",
        "Песчаные дюны с волнистыми узорами",
        "Рельеф поверхности с горами"
    ];

    document.getElementById("photo").style.backgroundImage = imgStore[imgId];
    document.getElementById("label").innerText = imgLabel[imgId];
}