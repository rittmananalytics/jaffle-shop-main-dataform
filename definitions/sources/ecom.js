// Source: ecom


    const source_raw_customers = declare({
        database: dataform.projectConfig.defaultDatabase,
        schema: "raw",
        name: "raw_customers"
    });
    
    const source_raw_orders = declare({
        database: dataform.projectConfig.defaultDatabase,
        schema: "raw",
        name: "raw_orders"
    });
    
    const source_raw_items = declare({
        database: dataform.projectConfig.defaultDatabase,
        schema: "raw",
        name: "raw_items"
    });
    
    const source_raw_stores = declare({
        database: dataform.projectConfig.defaultDatabase,
        schema: "raw",
        name: "raw_stores"
    });
    
    const source_raw_products = declare({
        database: dataform.projectConfig.defaultDatabase,
        schema: "raw",
        name: "raw_products"
    });
    
    const source_raw_supplies = declare({
        database: dataform.projectConfig.defaultDatabase,
        schema: "raw",
        name: "raw_supplies"
    });
    module.exports = { source_raw_customers, source_raw_orders, source_raw_items, source_raw_stores, source_raw_products, source_raw_supplies };
