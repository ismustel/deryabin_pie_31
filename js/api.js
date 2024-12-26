fetch('https://dummyjson.com/products')
    .then(res => res.json()) 
   
    .then(data => { 
        let block = document.getElementById('block');

        data.products.forEach(function(product) {
    
            let product_block = document.createElement('div');
            product_block.className = 'products-block';

            let img = document.createElement('img');
            img.src = product.images[0];
            product_block.append(img);

            let title = document.createElement('h3');
            title.textContent = product.title;
            product_block.append(title);

            let price = document.createElement('h3');
            price.textContent = `Цена: ${product.price}$`;
            product_block.append(price);

            let category = document.createElement('h3');
            category.textContent = `Категория: ${product.category}`;
            product_block.append(category);

            block.append(product_block);
        });
    });

function search_product(){
    let search_product_type = document.getElementById("input_search").value
    let container_search = document.getElementById("search_block")

    fetch(`https://dummyjson.com/products/search?q=${search_product_type}`)
        .then(res => res.json()) 
   
        .then(data => {

            data.products.forEach(function(product) {

                let block_search = document.createElement('div')
                block_search.className = 'products-block-search';

                let img_search_block = document.createElement('img');
                img_search_block.src = product.images[0];
                block_search.append(img_search_block);

                let title_search_block = document.createElement('h3');
                title_search_block.textContent = product.title;
                block_search.append(title_search_block);

                let price_search_block = document.createElement('h3');
                price_search_block.textContent = `Цена: ${product.price}$`;
                block_search.append(price_search_block);

                let category_search_block = document.createElement('h3');
                category_search_block.textContent = `Категория: ${product.category}`;
                block_search.append(category_search_block);

                container_search.append(block_search);
            
            })
        })

} 