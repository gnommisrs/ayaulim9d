function work(){ 
    let input = document.getElementById("koment") 
    let name = input.value; 
    let newText = document.createElement("h3"); 
    newText.innerHTML = name ; 
 
    let gamebox = document.getElementById("firstPost"); 
    gamebox.appendChild(newText) 
}
let post = document.getElementById("firstPost"); 
let postsBox = document.getElementById("postsBox") 
 
let imgurls = [ 
    "https://avatars.mds.yandex.net/i?id=144bd247b223deb5d737453a8a1383f93611f707-9181163-images-thumbs&n=13", 
    "https://avatars.mds.yandex.net/i?id=c7ff8ecebb795b7fc4da75b076231f25e84b0ae5-10641465-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=3b9046e1bf59dafc2008a57d98d57916e42fa06a-9863853-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=dbbf8d3d4bda0d03046d1c6fe30594b31956fdaf-11413071-images-thumbs&n=13"
    
] 
function likePost(likeButton) {
    const likeCountElement = likeButton.parentNode.parentNode.querySelector(".likeCount");
    let likeCount = parseInt(likeCountElement.innerText);
    likeCount++;
    likeCountElement.innerText = likeCount;
}    
let texts = [
    "Шикарная природа",
    "Любимая школа",
    "Обожаю природу",
    "уютное место для чтения"
]
for(let i = 0; i < 100; i++){ 
    let newpost = post.cloneNode(true); 
    let imgpost = newpost.getElementsByClassName("img")[0];
    // let text = newpost.querySelector(".post > div:nth-child(3)");
    imgpost.setAttribute("src", imgurls[i % 4]);
    // text.textContent = texts[i % 4];
    postsBox.appendChild(newpost); 
}