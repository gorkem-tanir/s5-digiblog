// Haberleri üretmek için aşağıdaki newsData objesini kullanacağız. Önce inceleyin.
import { newsData } from "./../../resources.js";

const sampleNewsItem = {
  baslik: "örnek başlık",
  tarih: "11 Kasım 2026",
  ilkParagraf: "Örnek paragraf 1",
  ikinciParagraf: "Örnek paragraf 2",
  ucuncuParagraf: "Örnek paragraf 3",
};

/*
Adım 1: NewsBuilder component fonksiyonu yazmak
Yazacağınız NewsBuilder fonksiyonu, yukarıdaki sampleNewsItem yapısındaki bir objeyi parametre olarak almalı ve alttaki yapıya sahip bir içerik oluşturup return etmeli:

<div class="article">
  <h2>{haber başlığı}</h2>
  <p class="tarih">{haber tarihi}</p>

  {üç ayrı paragraf elementi}

  <button class="expandButton">+</button>
</div>


Adım 2:
Oluşturulan expandButton classına sahip elemana tıklandığında, içinde bulunduğu article classına sahip elemanda isOpen classı yoksa eklemeli, varsa çıkarmalı.


Adım 3:
newsData, sampleNewsItem yapısına benzeyen objelerden oluşan bir array ve sayfada göstermek istediğimiz haberleri içeriyor.
newsData'nın her bir elemanını NewsBuilder ile kullanmak için bir döngü yazın. Döngü her çalıştığında:
- o anki eleman ve NewsBuilder kullanılarak içerik hazırlanmalı,
- hazırlanan içerik, index.html'de bulunan articleList classına sahip elemanın içine yerleştirilmeli.


Not 1: İlk 2 adım NewsBuilder içinde yapılmalı.
Not 2: NewsBuilder fonksiyonunda oluşturduklarınızı return etmeyi unutmayın.
*/

function NewsBuilder(news) {
  const article = document.createElement("div");
  article.classList.add("article");
  const newsHeader = document.createElement("h2");
  newsHeader.textContent = news.baslik;
  const newsDate = document.createElement("p");
  newsDate.classList.add("tarih");
  newsDate.textContent = news.tarih;
  const paragraph1 = document.createElement("p");
  const paragraph2 = document.createElement("p");
  const paragraph3 = document.createElement("p");
  paragraph1.textContent = news.ilkParagraf;
  paragraph2.textContent = news.ikinciParagraf;
  paragraph3.textContent = news.ucuncuParagraf;
  const button = document.createElement("button");
  button.textContent = "+";
  button.classList.add("expandButton");
  button.addEventListener("click", (event) => {
    article.classList.toggle("isOpen");
  });
  article.appendChild(newsHeader);
  article.appendChild(newsDate);
  article.appendChild(paragraph1);
  article.appendChild(paragraph2);
  article.appendChild(paragraph3);
  article.appendChild(button);
  return article;
}

newsData.forEach((news) => {
  const article = NewsBuilder(news);
  document.querySelector(".articleList").appendChild(article);
});
