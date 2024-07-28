function generateSchemaName(customSchemaName, node, target) {
    const defaultSchema = target.schema;

    // seeds go in a global `raw` schema
    if (node.resourceType === 'seed') {
        return customSchemaName.trim();
    }

    // non-specified schemas go to the default target schema
    else if (customSchemaName === null) {
        return defaultSchema;
    }

    // specified custom schema names go to the schema name prepended with the default schema name in prod
    else if (target.name === 'prod') {
        return `${defaultSchema}_${customSchemaName.trim()}`;
    }

    // specified custom schemas go to the default target schema for non-prod targets
    else {
        return defaultSchema;
    }
}