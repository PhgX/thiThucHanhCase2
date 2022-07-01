import * as rl from 'readline-sync'
import { ProductManager } from './ProductManager'
import { Menu } from './menu';
import { Product } from './product';


let allproducts = new ProductManager();
let menu = new Menu();
let choice = -1;

let product1 = new Product('tao', 1, 'TaoUc', 10000, 5000, 'Hoaqua nuoc ngoai', '20/6/2022');
let product2 = new Product('cam', 2, 'CamMy', 15000, 5000, 'Hoa qua nuoc ngoai', '21/6/2022');
let product3 = new Product('duahau', 3, 'DưaThai', 10000, 3000, 'Hoa qua nuoc ngoai', '24/6/2022');
let product4 = new Product('thanhlong', 4, 'thanhlongmientay', 15000, 1000, 'Hoa qua trong nuoc', '27/6/2022');
let product5 = new Product('dua', 5, 'Dừa miền Nam', 10000, 7000, 'Hoa qua trong nuoc', '29/6/2022');

allproducts.addNewProduct(product1);
allproducts.addNewProduct(product2);
allproducts.addNewProduct(product3);
allproducts.addNewProduct(product4);
allproducts.addNewProduct(product5);

function showAllProducts() {
    let products = allproducts.getAll();
    if (!products[0]) {
        console.log('Không có sản phẩm')
    }
    if (products[0]) {
        for (let product of products) {
            // console.log(products)
            console.log(`${product.id}, ${product.name}, ${product.amount}, ${product.price}, ${product.date}, ${product.type}, ${product.discribe}`)
        }
    }
}

function findProduct() {
    let products = allproducts.getAll();
    let name = rl.question('Nhập tên sản phẩm');
    let index = allproducts.findProductByName(name);
    if (index == undefined) {
        console.log(`Sản phẩm không tồn tại`);
    } else if (index != undefined) {
        let product = products[index];
        console.log(`${product.id}, ${product.name}, ${product.amount}, ${product.price}, ${product.date}, ${product.type}, ${product.discribe}`)

    }
}

function addNewProduct() {
    let name = rl.question("nhập tên sản phẩm");
    let id = +rl.question("Nhập id");
    let type = rl.question("Nhập kiểu sản phẩm");
    let price = +rl.question("Nhập giá sản phẩm");
    let amount = +rl.question("Nhập số lượng sản phẩm");
    let discrible = rl.question("Nhập miêu tả sản phẩm");
    let date = rl.question("Nhập ngày tạo");
    let newproduct = new Product(name, id, type, price, amount, discrible, date);
    allproducts.addNewProduct(newproduct);
    console.log('---Nhập sản phẩm thành công---')
}

function updateProduct() {
    let name = rl.question("Nhập tên sản phẩm muốn chỉnh sửa thông tin");
    let index = allproducts.findProductByName(name);
    if (index != undefined) {
        let id = +rl.question("Nhập id");
        let type = rl.question("Nhập kiểu sản phẩm");
        let price = +rl.question("Nhập giá sản phẩm");
        let amount = +rl.question("Nhập số lượng sản phẩm");
        let discrible = rl.question("Nhập miêu tả sản phẩm");
        let date = rl.question("Nhập ngày tạo");
        let newproduct = new Product(name, id, type, price, amount, discrible, date);
        allproducts.updateProduct(name, newproduct)
    } else {
        console.log('Không tìm thấy sản phẩm')
    }
}

function deleteProduct() {
    let name = rl.question("Nhập tên sản phẩm muốn xóa khỏi hệ thống");
    let index = allproducts.findProductByName(name);
    if (index != undefined) {
        allproducts.deleteProduct(name);
        console.log('---Xóa sản phẩm thành công---')
    } else if (index == undefined) {
        console.log('Sản phẩm không tồn tại')
    }
}

do {
    menu.menu();
    choice = +rl.question('Nhập lựa chọn');
    switch (choice) {
        case 1: {
            showAllProducts();
            break;
        }
        case 2: {
            addNewProduct();
            break;
        }
        case 3: {
            findProduct();
            break;
        }
        case 4: {
            updateProduct();
            break;
        }
        case 5: {
            deleteProduct();
            break;
        }
        case 0: {
            break;
        }
    }

} while (choice != -1)