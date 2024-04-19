const { mockTest } = require('./api')

test('Validação se o docker está funcional', async () => {
    const response = await mockTest();
  
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Hello World!!');

  });
  