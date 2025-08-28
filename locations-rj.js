// Localidades do Estado do Rio de Janeiro
const locationsRJ = {
    // Regiões Metropolitanas e Municípios organizados por região
    regions: {
        "Região Metropolitana": [
            "Rio de Janeiro",
            "Belford Roxo",
            "Duque de Caxias",
            "Guapimirim",
            "Itaboraí",
            "Itaguaí",
            "Japeri",
            "Magé",
            "Maricá",
            "Mesquita",
            "Nilópolis",
            "Niterói",
            "Nova Iguaçu",
            "Paracambi",
            "Queimados",
            "São Gonçalo",
            "São João de Meriti",
            "Seropédica",
            "Tanguá"
        ],
        "Região Serrana": [
            "Petrópolis",
            "Teresópolis",
            "Nova Friburgo",
            "Cachoeiras de Macacu",
            "Cantagalo",
            "Carmo",
            "Cordeiro",
            "Duas Barras",
            "Macuco",
            "Santa Maria Madalena",
            "São José do Vale do Rio Preto",
            "São Sebastião do Alto",
            "Sumidouro",
            "Trajano de Moraes"
        ],
        "Região dos Lagos": [
            "Cabo Frio",
            "Arraial do Cabo",
            "Armação dos Búzios",
            "Araruama",
            "Iguaba Grande",
            "São Pedro da Aldeia",
            "Saquarema"
        ],
        "Região Norte Fluminense": [
            "Campos dos Goytacazes",
            "Macaé",
            "Carapebus",
            "Cardoso Moreira",
            "Conceição de Macabu",
            "Quissamã",
            "São Fidélis",
            "São Francisco de Itabapoana",
            "São João da Barra"
        ],
        "Região Noroeste Fluminense": [
            "Itaperuna",
            "Aperibé",
            "Bom Jesus do Itabapoana",
            "Cambuci",
            "Italva",
            "Laje do Muriaé",
            "Miracema",
            "Natividade",
            "Porciúncula",
            "Santo Antônio de Pádua",
            "São José de Ubá",
            "Varre-Sai"
        ],
        "Região do Médio Paraíba": [
            "Volta Redonda",
            "Barra Mansa",
            "Resende",
            "Barra do Piraí",
            "Itatiaia",
            "Pinheiral",
            "Piraí",
            "Porto Real",
            "Quatis",
            "Rio Claro",
            "Rio das Flores"
        ],
        "Região Centro-Sul Fluminense": [
            "Vassouras",
            "Areal",
            "Comendador Levy Gasparian",
            "Engenheiro Paulo de Frontin",
            "Mendes",
            "Miguel Pereira",
            "Paracambi",
            "Paraíba do Sul",
            "Paty do Alferes",
            "Sapucaia",
            "Três Rios"
        ],
        "Região da Costa Verde": [
            "Angra dos Reis",
            "Paraty",
            "Mangaratiba"
        ]
    },
    
    // Lista de todos os municípios em ordem alfabética (para busca rápida)
    allMunicipalities: [
        "Angra dos Reis",
        "Aperibé",
        "Araruama",
        "Areal",
        "Armação dos Búzios",
        "Arraial do Cabo",
        "Barra do Piraí",
        "Barra Mansa",
        "Belford Roxo",
        "Bom Jesus do Itabapoana",
        "Cabo Frio",
        "Cachoeiras de Macacu",
        "Cambuci",
        "Campos dos Goytacazes",
        "Cantagalo",
        "Carapebus",
        "Cardoso Moreira",
        "Carmo",
        "Comendador Levy Gasparian",
        "Conceição de Macabu",
        "Cordeiro",
        "Duas Barras",
        "Duque de Caxias",
        "Engenheiro Paulo de Frontin",
        "Guapimirim",
        "Iguaba Grande",
        "Itaboraí",
        "Itaguaí",
        "Italva",
        "Itaperuna",
        "Itatiaia",
        "Japeri",
        "Laje do Muriaé",
        "Macaé",
        "Macuco",
        "Magé",
        "Mangaratiba",
        "Maricá",
        "Mendes",
        "Mesquita",
        "Miguel Pereira",
        "Miracema",
        "Natividade",
        "Nilópolis",
        "Niterói",
        "Nova Friburgo",
        "Nova Iguaçu",
        "Paracambi",
        "Paraíba do Sul",
        "Paraty",
        "Paty do Alferes",
        "Petrópolis",
        "Pinheiral",
        "Piraí",
        "Porciúncula",
        "Porto Real",
        "Quatis",
        "Queimados",
        "Quissamã",
        "Resende",
        "Rio Claro",
        "Rio das Flores",
        "Rio de Janeiro",
        "Santa Maria Madalena",
        "Santo Antônio de Pádua",
        "São Fidélis",
        "São Francisco de Itabapoana",
        "São Gonçalo",
        "São João da Barra",
        "São João de Meriti",
        "São José de Ubá",
        "São José do Vale do Rio Preto",
        "São Pedro da Aldeia",
        "São Sebastião do Alto",
        "Sapucaia",
        "Saquarema",
        "Seropédica",
        "Sumidouro",
        "Tanguá",
        "Teresópolis",
        "Trajano de Moraes",
        "Três Rios",
        "Varre-Sai",
        "Vassouras",
        "Volta Redonda"
    ],
    
    // Zonas da cidade do Rio de Janeiro
    rioZones: {
        "Zona Sul": [
            "Botafogo",
            "Copacabana",
            "Catete",
            "Cosme Velho",
            "Flamengo",
            "Gávea",
            "Glória",
            "Humaitá",
            "Ipanema",
            "Jardim Botânico",
            "Lagoa",
            "Laranjeiras",
            "Leblon",
            "Leme",
            "São Conrado",
            "Urca"
        ],
        "Zona Norte": [
            "Abolição",
            "Água Santa",
            "Alto da Boa Vista",
            "Andaraí",
            "Benfica",
            "Bonsucesso",
            "Cachambi",
            "Catumbi",
            "Cidade Nova",
            "Complexo do Alemão",
            "Del Castilho",
            "Encantado",
            "Engenho de Dentro",
            "Engenho Novo",
            "Estácio",
            "Grajaú",
            "Higienópolis",
            "Ilha do Governador",
            "Jacaré",
            "Jacarezinho",
            "Lins de Vasconcelos",
            "Madureira",
            "Mangueira",
            "Manguinhos",
            "Maracanã",
            "Maré",
            "Maria da Graça",
            "Méier",
            "Olaria",
            "Penha",
            "Piedade",
            "Pilares",
            "Praça da Bandeira",
            "Ramos",
            "Rio Comprido",
            "Rocha",
            "São Cristóvão",
            "São Francisco Xavier",
            "Tijuca",
            "Todos os Santos",
            "Triagem",
            "Vila Isabel"
        ],
        "Zona Oeste": [
            "Bangu",
            "Barra da Tijuca",
            "Campo Grande",
            "Cidade de Deus",
            "Cosmos",
            "Deodoro",
            "Guaratiba",
            "Inhoaíba",
            "Jacarepaguá",
            "Jardim Sulacap",
            "Magalhães Bastos",
            "Padre Miguel",
            "Paciência",
            "Pedra de Guaratiba",
            "Realengo",
            "Recreio dos Bandeirantes",
            "Santa Cruz",
            "Santíssimo",
            "Senador Camará",
            "Senador Vasconcelos",
            "Sepetiba",
            "Taquara",
            "Vargem Grande",
            "Vargem Pequena",
            "Vila Militar",
            "Vila Valqueire"
        ],
        "Centro": [
            "Caju",
            "Centro",
            "Gamboa",
            "Lapa",
            "Paquetá",
            "Porto",
            "Santa Teresa",
            "Santo Cristo",
            "Saúde"
        ]
    }
};

// Função para popular o select de localidades
function populateLocationSelect() {
    const locationSelect = document.getElementById('location');
    if (!locationSelect) return;
    
    // Limpar opções existentes
    locationSelect.innerHTML = '<option value="">Selecione sua localidade</option>';
    
    // Adicionar opções agrupadas por região
    Object.keys(locationsRJ.regions).forEach(regionName => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = regionName;
        
        locationsRJ.regions[regionName].forEach(municipality => {
            const option = document.createElement('option');
            option.value = municipality.toLowerCase().replace(/\s+/g, '-');
            option.textContent = municipality;
            
            // Se for Rio de Janeiro, adicionar os bairros como sub-opções
            if (municipality === "Rio de Janeiro") {
                option.textContent = municipality + " (Capital)";
                optgroup.appendChild(option);
                
                // Adicionar bairros do Rio agrupados por zona
                Object.keys(locationsRJ.rioZones).forEach(zoneName => {
                    locationsRJ.rioZones[zoneName].forEach(neighborhood => {
                        const neighborhoodOption = document.createElement('option');
                        neighborhoodOption.value = `rio-de-janeiro-${neighborhood.toLowerCase().replace(/\s+/g, '-')}`;
                        neighborhoodOption.textContent = `  └─ ${neighborhood} (${zoneName})`;
                        optgroup.appendChild(neighborhoodOption);
                    });
                });
            } else {
                optgroup.appendChild(option);
            }
        });
        
        locationSelect.appendChild(optgroup);
    });
}

// Executar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', populateLocationSelect);
