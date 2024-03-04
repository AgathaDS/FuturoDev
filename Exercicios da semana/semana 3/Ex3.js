//[M1S06] Ex 3 - Fetch API

async function fetchData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        const container = document.getElementById('data-container');
        container.innerHTML = `
            <p>Nome: ${data.nome}</p>
            <p>Idade: ${data.idade}</p>
            <p>Email: ${data.email}</p>
        `;
    } catch (error) {
        console.error('Ocorreu um erro ao buscar os dados:', error);
    }
}

window.onload = fetchData;
