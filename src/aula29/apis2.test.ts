import { test, expect } from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('Método POST para criar um novo post', async () => {
    const res = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: 1,
            title: 'Meu Novo Post',
            body: 'Conteúdo do meu novo post',
        })

    });
     // Testar Status Code
    expect(res.status).toBe(201);
    // Testar se o retorno é um objeto JSON
    const data = await res.json();
    expect(data).toHaveProperty('id');
    expect(data.title).toBe('Meu Novo Post');
    expect(data.body).toBe('Conteúdo do meu novo post');
});

test('Método PUT para atualizar um post existente', async () => {
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: 1,
            title: 'Meu Novo Post',
            body: 'Conteúdo do meu novo post',
        })

    });
     // Testar Status Code
    expect(res.status).toBe(200);
    // Testar se o retorno é um objeto JSON
    const data = await res.json();
    expect(data).toHaveProperty('id');
    expect(data.title).toBe('Meu Novo Post');
    expect(data.body).toBe('Conteúdo do meu novo post');
});
test('Método PATCH para atualizar parcialmente um post existente', async () => {
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: 1,
            title: 'Meu Novo Post',
            body: 'Conteúdo do meu novo post',
        })

    });
     // Testar Status Code
    expect(res.status).toBe(200);
    // Testar se o retorno é um objeto JSON
    const data = await res.json();
    expect(data).toHaveProperty('id');
    expect(data.title).toBe('Meu Novo Post');
    expect(data.body).toBe('Conteúdo do meu novo post');
});

// Teste para o método DELETE
test('Método DELETE para deletar um post existente', async () => {
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'DELETE',
    });
     // Testar Status Code
    expect(res.status).toBe(200);
});