
   type Product = {
        name: string;
        description: string;
        price: string;
        id: string;
        imgSrc: string;
    }


export const setStore = (product:Product, count: number)  => {
    const storageJson = localStorage.getItem("cart") ?? "{}";
    const storage = JSON.parse(storageJson);

    // const productAndCount = {count, product};

    localStorage.setItem("cart", JSON.stringify(storage))
}