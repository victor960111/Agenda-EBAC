const formContato = document.getElementById('formContato');
        const tabelaContatos = document.getElementById('tabelaContatos');

        formContato.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;

            adicionarContato(nome, telefone);

            formContato.reset();
        });

        function adicionarContato(nome, telefone) {
            const linha = tabelaContatos.insertRow();

            const celulaNome = linha.insertCell();
            const celulaTelefone = linha.insertCell();

            celulaNome.textContent = nome;
            celulaTelefone.textContent = telefone;
        }