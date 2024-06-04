const menuHome = () => {
    document.getElementById("contentFrame").setAttribute("src","home.html")
    document.getElementById("menuHome").style = "color: black; background-color: white;"
    document.getElementById("menuJukebox").style = "color: white; background-color: #298eb5;"
    document.getElementById("menuDiary").style = "color: white; background-color: #298eb5;"
}

const menuJukebox = () => {
    document.getElementById("contentFrame").setAttribute("src","jukebox.html")
    document.getElementById("menuJukebox").style = "color: black; background-color: white;"
    document.getElementById("menuHome").style = "color: white; background-color: #298eb5;"
    document.getElementById("menuDiary").style = "color: white; background-color: #298eb5;"
}

const menuDiary = () => {
    document.getElementById("contentFrame").setAttribute("src","Diary.html")
    document.getElementById("menuDiary").style = "color: black; background-color: white;"
    document.getElementById("menuJukebox").style = "color: white; background-color: #298eb5;"
    document.getElementById("menuHome").style = "color: white; background-color: #298eb5;"
}