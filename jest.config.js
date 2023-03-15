module.exports = {
  // Diretório raiz
  roots: ['<rootDir>/src'],
  // De onde pegar arquivos para fazer cobertura de testes
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  // Converter arquivos ts para js para rodar Jest no typescript
  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}
