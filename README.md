# English description below

# Zadania rekrutacyjne

Treść zadania 1:
Zadanie będzie polegało na napisanie skryptu w języku JavaScript, który będzie pobierał dane ze strony https://www.reddit.com/r/funny.json oraz dokona na nich następujące operacje:

1. napisać funkcję, która przekształci dane do struktury:

{
"posts": [
{
"title": "put title here",
"upvotes": 1234,
"score": 1000,
"num_comments": 100,
"created": "16.05.2019 12:12",
},
...
],
"count": 10
}

2. napisać funkcję, która umożliwi sortowanie po "upvotes", "num_comments", "score" lub dacie "created" w zależności od przekazanego parametru
3. napisać funkcję, która zwróci tytuł postu z najwyższym stosunkiem głosów dodatnich do liczby komentarzy (w przypadku kilku postów o jednakowych współczynnikach, wybrać najnowszy z nich)
4. napisać funkcję, która wyświetli posty tylko z ostatniego dnia (24h wstecz)
   oraz:
   zadanie 2: polegające na odtworzeniu strony pokazanej na zdjęciu wraz z stylami.
   #Użyte technologie:
   TypeScript, Jest, HTML, SASS, NPM

# Rozwiązanie:

Pliki z rozwiązaniem znajdują się w katalogu src z podziałem na zadanie JS oraz zadanie html
Zadanie 1:
Rozwiązania znajdują się w folderach nazwanych zgodnie z podpunktami którę widnieją powyżej (1,2,3,4)
Wszystkie funkcje zostały stworzone tak aby można było je łączyć między sobą oraz wszystkie bazują na głównym pliku o nazwie fetchData.ts. Funckcja zawarta w fetchData sprowadza api do obiektu którym można się posłużyć przy kolejnym "promisie" wraz z użyciem jednej z funkcji znajdujących się w folderach 1,2,3,4.

# Objaśnienia do niektórych zadań

podpunkt 2: funkcja sortData wykorzystuje jako parametr do sortowania funkcję zwracającą parametr ustawiony domyślnie na 'score' jeżeli podany parametr będzie niewłaściwy
podpunkt 3: do sortowania użyto zewnętrznej funkcji compare.

# English description:
Those files are solution of tasks for intern position in ProfilSoftware company in Gdańsk Poland.
In first task i was able to fetch data from reddit api and convert it to:
{
"posts": [
{
"title": "put title here",
"upvotes": 1234,
"score": 1000,
"num_comments": 100,
"created": "16.05.2019 12:12",
},
...
],
"count": 10
}
second task consisted to write function that sort data from api by one of arguments:
"upvotes", "num_comments", "score", "created",
third task: create function that returns a title of best ratio of upvotes /num_comments.
and the last one: create function that show only posts created one day before,
Also there was task to copy layout from picture to html and style it in SASS or CSS.

# Tech

TypeScript, Jest, HTML, SASS, NPM
