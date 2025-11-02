import './electronics.css';

function Electronics() {
    const electronics = [
        { id: 11, name: 'Ear Buds', price: 20, url:"https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/a9c6447f-c487-46df-97cf-b087ba5ccb18.jpg"},
        { id: 12, name: 'Mobile', price: 50, url:"https://cdn.zeptonow.com/production/tr:w-403,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/8a5fdec2-d214-468d-b6a9-0905d76e7b8d.jpg" },
        { id: 13, name: 'Laptop', price: 40,url:"https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/8133fd45-959b-4860-ba21-9e7957481c90.jpeg" },
        { id: 14, name: 'Tablet', price: 15,url:"https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/18e48a34-32c1-43a7-a2da-b7cfc0a8ff1b.jpg" },
        { id: 15, name: 'Mouse', price: 45 ,url:"https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/df13efac-711e-455a-b45d-625949556925.jpg"},
        { id: 16, name: 'Trimmer', price: 45,url:"https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/a4e39afb-2bef-4ab8-87cc-95265ff9d1d8.jpg" },
    ]
    return (
        <>
            <div>
                <h3>Electronics</h3>
                <div className='main-container'>
                    {electronics.map((item) => {
                        return (
                            <div className='card'>
                                <img src={item.url} alt="image"></img>
                                <p>
                                    {item.name}
                                </p>
                                <p>
                                    {item.price}
                                </p>
                                <button className="button btn-primary" onClick="Add()">Add</button>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    );
}

export default Electronics;