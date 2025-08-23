export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Car Motors API",
    version: "1.0.0",
  },
  paths: {},
};

export const swaggerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Swagger UI</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
  <script>
    SwaggerUIBundle({ url: '/swagger.json', dom_id: '#swagger-ui' });
  </script>
</body>
</html>
`;
