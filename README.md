# ProjectGralvo 

# Generate services/types
curl http://localhost:3001/api-json -o openapi.json
npx openapi-typescript-codegen --input http://localhost:3001/api-json --output ./src/services/api --client axios
