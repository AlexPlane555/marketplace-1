const sales = ["45", "20","100", "15"]
        function addHtmlFile(containerId, htmlFilePath, idelement) {
      // Получаем контейнер
      const container = document.getElementById(containerId);

      // Загружаем файл HTML
      fetch(htmlFilePath)
        .then(response => response.text())
        .then(htmlContent => {
          // Создаем новый элемент div

          let newDiv = document.createElement('div');
          newDiv.innerHTML = htmlContent;
          newDiv.id = `element-${idelement}`; 
          //newDiv.getElementById("item").textContent=`Шмотка #-${idelement}`;
          const scripts = newDiv.querySelectorAll('script');
         scripts.forEach(script => {
           const newScript = document.createElement('script');
           newScript.textContent = script.textContent;
           document.body.appendChild(newScript);
         });
          // Добавляем новый div в контейнер
          container.appendChild(newDiv);
          
        });
        //document.getElementById(containerId).getElementById("item").innerHTML=`Шмотка #-${idelement}`;
    }

    // Добавляем файлы HTML
    for (let i = 0;i < 4; i++) {
        addHtmlFile('elements', 'elements/element.html', i + 1);
    }

    setTimeout(function() {
      
      for(let i = 1; i < 5; i++) {
        let items = document.getElementById(`element-${i}`);
        //console.log(items)
        let as = items.querySelector("#item");
        as.innerText = `Шмотка #${i}`;
        let th = items.querySelector("#sale");
        th.innerText = `${sales[i - 1]}$`;
      }
      for(let i = 1; i < 5; i++) {
         const block = document.getElementById(`element-${i}`);
         block.addEventListener('click', function() {
           let h = window.location.href = `./iphone_1313_pro_11.html?item=${i}&sale=${sales[i - 1]}`;
           /*let as = h.querySelector("#item");
           as.innerText = `Шмотка #${i}`;
           let th = h.querySelector("#sale");
        as.innerText = `${sales[i - 1]}$`;*/
         });
      }
       }, 500); 