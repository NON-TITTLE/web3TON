const path = require("path");

module.exports = {
    experimental: {
        appDir: true, // Solo para el sistema de rutas con `app/`
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, "src"),
        };
        return config;
    },
};
