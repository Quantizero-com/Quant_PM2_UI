module.exports = {
  apps: [
    {
      name: 'Quant_PM2_UI',
      script: 'node',
      args: '.',
      instances: 1,                              // Number of instances (1 for a single instance)
      exec_mode: 'fork',                         // Single process mode (use 'cluster' for multiple CPU cores)
      env: {
        HOST: "0.0.0.0",
        NODE_ENV: 'production',                 // Environment variable (production)
      },
    },
  ],
};
