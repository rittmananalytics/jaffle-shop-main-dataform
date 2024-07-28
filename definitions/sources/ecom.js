// Source: ecom


    const raw_customers = declare({
        database: dataform.projectConfig.defaultDatabase,
        schema: "raw",
        name: "raw_customers"
    });

    
    const raw_orders = declare({
        database: dataform.projectConfig.defaultDatabase,
        schema: "raw",
        name: "raw_orders"
    });

    
    const raw_items = declare({
        database: dataform.projectConfig.defaultDatabase,
        schema: "raw",
        name: "raw_items"
    });

    
    const raw_stores = declare({
        database: dataform.projectConfig.defaultDatabase,
        schema: "raw",
        name: "raw_stores"
    });

    
    const raw_products = declare({
        database: dataform.projectConfig.defaultDatabase,
        schema: "raw",
        name: "raw_products"
    });

    
    const raw_supplies = declare({
        database: dataform.projectConfig.defaultDatabase,
        schema: "raw",
        name: "raw_supplies"
    });

    module.exports = { raw_customers, raw_orders, raw_items, raw_stores, raw_products, raw_supplies };
